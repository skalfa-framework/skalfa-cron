import { jobs, CronJob } from "./state";

export const add = (
  schedule   :  string,
  handler    :  CronJob["handler"],
  jobName   ?:  string
) => {
  const name = jobName || `Cronjob(${jobs.length + 1})`
  jobs.push({ name, schedule, handler, last: null })
};
