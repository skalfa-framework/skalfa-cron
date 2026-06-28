import { parseSchedule } from "./parse-schedule";

export function isScheduleMatch(schedule: string, date: Date): boolean {
  const [min, hour, day, month, week] = schedule.split(" ")

  return (
    parseSchedule(date.getMinutes(), min) &&
    parseSchedule(date.getHours(), hour) &&
    parseSchedule(date.getDate(), day) &&
    parseSchedule(date.getMonth() + 1, month) &&
    parseSchedule(date.getDay(), week)
  )
}
