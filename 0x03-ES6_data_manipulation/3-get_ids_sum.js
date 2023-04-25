export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (previousStudent, currentStudent) => previousStudent.id + currentStudent.id,
      0,
    );
  }
  return 0;
}
