export type CronJob = {
  name       :  string
  schedule   :  string
  handler    :  () => Promise<void> | void
  last      ?:  string | null
}

export const jobs: CronJob[]  =  []
export const interval         =  Number(process.env.CRON_INTERVAL) || 10000
