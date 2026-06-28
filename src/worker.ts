import { logger } from "@skalfa/skalfa-api-core";
import { jobs, interval } from "./state";
import { isScheduleMatch } from "./is-schedule-match";

export const worker = () => {
  setInterval(async () => {
    const now = new Date()

    const minuteKey = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ` + `${now.getHours()}:${now.getMinutes()}`

    for (const job of jobs) {
      if (!isScheduleMatch(job.schedule, now)) continue

      if (job.last === minuteKey) continue

      job.last = minuteKey

      try {
        await job.handler()
        logger.cron(`${job.name} at (${now}) success!`)
      } catch (err) {
        const em = err instanceof Error ? err.message : String(err)
        logger.cronError(`${job.name} at (${now}) error : ${em}`, { error: em, reference: job.name, at: minuteKey });
      }
    }
  }, interval)
};
