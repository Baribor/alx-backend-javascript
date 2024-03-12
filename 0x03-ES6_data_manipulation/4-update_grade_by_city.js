export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((s) => s.location === city).map((s) => {
    const grade = newGrades.filter((g) => g.studentId === s.id);
    if (grade.length !== 0) {
      return { ...s, grade: grade[0].grade };
    }
    return { ...s, grade: 'N/A' };
  });
}
