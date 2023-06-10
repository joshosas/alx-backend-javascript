const fs = require('fs');

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data.toString('utf-8').trim().split('\n');
      const groupOfStudents = {};
      const fieldNames = fileLines[0].split(',');
      const studentPropertyNames = fieldNames.slice(0, fieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropertyValues = studentRecord.slice(
          0,
          studentRecord.length - 1,
        );
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(groupOfStudents).includes(field)) {
          groupOfStudents[field] = [];
        }
        const studentEntries = studentPropertyNames.map(
          (propertyName, idx) => [propertyName, studentPropertyValues[idx]],
        );
        groupOfStudents[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object.values(groupOfStudents).reduce(
        (pre, cur) => (pre || []).length + cur.length,
      );
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(groupOfStudents)) {
        const studentNames = group
          .map((student) => student.firstname)
          .join(', ');
        console.log(
          `Number of students in ${field}: ${group.length}. List: ${studentNames}`,
        );
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
