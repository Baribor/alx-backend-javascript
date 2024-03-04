export default function createIteratorObject(report) {
  const employess = [];
  for (const emps of Object.values(report.allEmployees)) {
    employess.push(...emps);
  }

  return employess;
}
