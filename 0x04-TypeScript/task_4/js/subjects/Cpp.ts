// Import the Teacher interface and Subject class from Teacher.ts and Subject.ts
import { Subjects } from './Teacher';
import { Subject } from './Subject';

// Using declaration merging, add a new optional attribute experienceTeachingC to the Teacher interface
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Create a class Cpp extending from Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for C++';
    }

    getAvailableTeacher(): string {
      if (this._teacher?.experienceTeachingC) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}

// Export constant cpp for Cpp Subjects
export const cpp = new Subjects.Cpp();
