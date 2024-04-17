// Create the DirectorInterface interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Create the TeacherInterface interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Create a class Director that implements DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Create a class Teacher that implements TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Create a function createEmployee
const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
};

// Create a function isDirector
const isDirector = (employee: Director | Teacher): employee is Director => {
  return employee instanceof Director;
};

// Create a function executeWork
const executeWork = (employee: Director | Teacher): void => {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
};

// Create a String literal type named Subjects
type Subjects = 'Math' | 'History';

// Create a function teachClass
const teachClass = (todayClass: Subjects): string => {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
};

// Testing the functions
console.log(createEmployee(200)); // Output: Teacher
console.log(createEmployee(1000)); // Output: Director
console.log(createEmployee('$500')); // Output: Director

const employee1 = createEmployee(200);
const employee2 = createEmployee(1000);
executeWork(employee1); // Output: Getting to work
executeWork(employee2); // Output: Getting to director tasks

console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History
