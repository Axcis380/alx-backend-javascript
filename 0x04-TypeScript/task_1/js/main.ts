// Define the Teacher interface with required and optional attributes
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly location: string;
  yearsOfExperience?: number;
  [key: string]: any; // Allow any other additional properties
}

// Create a class implementing the Teacher interface
class TeacherClass implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly location: string;
  yearsOfExperience?: number;
  [key: string]: any;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, additionalAttributes: { [key: string]: any }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.yearsOfExperience = additionalAttributes.yearsOfExperience;
    Object.keys(additionalAttributes).forEach((key) => {
      if (key !== "yearsOfExperience") {
        this[key] = additionalAttributes[key];
      }
    });
  }
}

// Create a new instance of TeacherClass
const teacher3 = new TeacherClass('John', 'Doe', false, 'London', { contract: false });

console.log(teacher3);

// Create an object using the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
