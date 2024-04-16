// 4-update_grade_by_city.js

function updateStudentGradeByCity(students, city, newGrades) {
  const updatedStudents = students.map(student => {
    const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';
    return { ...student, grade };
  });

  return updatedStudents.filter(student => student.location === city);
}

export default updateStudentGradeByCity;
