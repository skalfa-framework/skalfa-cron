export function parseSchedule(value: number, pattern: string): boolean {
  if (pattern === "*") return true

  if (pattern.includes(",")) {
    return pattern.split(",").some((p) => parseSchedule(value, p))
  }

  if (pattern.includes("/")) {
    const [base, step] = pattern.split("/")
    const stepNum = Number(step)
    if (base === "*") return value % stepNum === 0
  }

  if (pattern.includes("-")) {
    const [start, end] = pattern.split("-").map(Number)
    return value >= start && value <= end
  }

  return Number(pattern) === value
}
