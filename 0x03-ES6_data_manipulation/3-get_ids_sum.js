export default function getStudentIdsSum(students) {
  return students.map((s) => s.id).reduce((a, b) => a + b, 0);
}
