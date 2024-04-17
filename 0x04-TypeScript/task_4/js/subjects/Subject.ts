// Import the Teacher interface from Teacher.ts
import { Subjects } from './Teacher';

// Define the Subject class in the Subjects namespace
namespace Subjects {
  export class Subject {
    private _teacher: Teacher | null = null;

    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }
  }
}
