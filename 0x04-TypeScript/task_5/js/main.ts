// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array containing the two student objects
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");

// Create a table row for each student and append it to the table
studentsList.forEach(student => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
