interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Joshua",
  lastName: "Osas",
  age: 20,
  location: "Benin City",
};

const student2: Student = {
  firstName: "Riches",
  lastName: "Ighos",
  age: 22,
  location: "Lagos",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tBody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = tBody.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.innerText = student.firstName;
  locationCell.innerText = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
});

table.appendChild(tBody);
document.body.appendChild(table);

