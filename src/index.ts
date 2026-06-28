import { add } from "./add";
import { worker } from "./worker";
import { parseSchedule } from "./parse-schedule";
import { isScheduleMatch } from "./is-schedule-match";

export type { CronJob } from "./state";

export const cron = {
  // ===========================>
  // ## Cron: add new job
  // ===========================>
  add,

  // ===========================>
  // ## Cron: job worker
  // ===========================>
  worker,

  // ===========================>
  // ## Cron: job schedule parser
  // ===========================>
  parseSchedule,

  // ===========================>
  // ## Cron: check job schedule
  // ===========================>
  isScheduleMatch,
}
