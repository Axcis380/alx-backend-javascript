function updateStudentGradeByCity(students, city, newGrades) {
  const updatedStudents = [];

  for (const student of students) {
    if (student.location === city) {
      const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
      const grade = matchingGrade ? matchingGrade.grade : 'N/A';
      updatedStudents.push({ ...student, grade });
    }
  }

  return updatedStudents;
}

export default updateStudentGradeByCity;
