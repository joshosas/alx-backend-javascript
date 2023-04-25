export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (studentPrev, currStudent) => studentPrev.id || studentPrev + currStudent.id,
      0,
    );
  }
  return 0;
}
