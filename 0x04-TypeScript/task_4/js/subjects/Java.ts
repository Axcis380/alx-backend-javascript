// Import the Teacher interface and Subject class from Teacher.ts and Subject.ts
import { Subjects } from './Teacher';
import { Subject } from './Subject';

// Add a new attribute experienceTeachingJava to the Teacher interface
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Create a class Java extending from Subject
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this._teacher?.experienceTeachingJava) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}

// Export constant java for Java Subjects
export const java = new Subjects.Java();
