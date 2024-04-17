// Define the Teacher interface with required and optional attributes
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any other additional properties
}

// Define the Directors interface extending the Teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a class implementing the Teacher interface
class TeacherClass implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
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

// Create an object using the Teacher interface
const teacher3: Teacher = new TeacherClass('John', 'Doe', false, 'London', { contract: false });

console.log(teacher3);

// Define the Directors interface extending the Teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create an object using the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Interface for printTeacherFunction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define an interface for the StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Define an interface for the StudentClass instance
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Create a class implementing the StudentClass interface
class StudentClassImpl implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create a new instance of StudentClass
const student1: StudentClass = new StudentClassImpl('Alice', 'Smith');
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName()); // Output: Alice
