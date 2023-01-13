export default interface Employee {
  registration: string
  salary: number
  adimissionDate: Date

  generateRegistration(): string
}