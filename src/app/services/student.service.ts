import { Injectable } from '@angular/core';
export interface Student {
  name: string;
  class: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = []; // Array to store students

  constructor() {}

  getStudents(): Student[] {
    return this.students; // Return the list of students
  }

  addStudent(student: Student): void {
    this.students.push(student); // Add the student to the array
  }

  deleteStudent(student: Student): void {
    this.students = this.students.filter(s => s.name !== student.name); // Remove the student
  }

  updateStudent(oldStudent: Student, newStudent: Student): void {
    const index = this.students.findIndex(s => s.name === oldStudent.name);
    if (index !== -1) {
      this.students[index] = newStudent; // Update the student
    }
  }
}