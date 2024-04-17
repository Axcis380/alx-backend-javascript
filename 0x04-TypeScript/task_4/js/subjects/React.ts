// Import the Teacher interface and Subject class from Teacher.ts and Subject.ts
import { Subjects } from './Teacher';
import { Subject } from './Subject';

// Add a new attribute experienceTeachingReact to the Teacher interface
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Create a class React extending from Subject
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this._teacher?.experienceTeachingReact) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}

// Export constant react for React Subjects
export const react = new Subjects.React();
