const fs = require('fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const groupOfStudents = {};
  const fieldNames = fileLines[0].split(',');
  const studentPropertyNames = fieldNames.slice(0, fieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecords = line.split(',');
    const studentPropertyValues = studentRecords.slice(
      0,
      studentRecords.length - 1,
    );
    const field = studentRecords[studentRecords.length - 1];
    if (!Object.keys(groupOfStudents).includes(field)) {
      groupOfStudents[field] = [];
    }
    const studentEntries = studentPropertyNames.map((propName, idx) => [
      propName,
      studentPropertyValues[idx],
    ]);
    groupOfStudents[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object.values(groupOfStudents).reduce(
    (prev, curr) => (prev || []).length + curr.length,
  );
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(groupOfStudents)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(
      `Number of students in ${field}: ${group.length}. List: ${studentNames}`,
    );
  }
};

module.exports = countStudents;
