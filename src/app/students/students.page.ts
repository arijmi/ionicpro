import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage  {

  students: Student[] = [];


  constructor(private studentService: StudentService,private router: Router) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
  loadStudents(): void {
    this.students = this.studentService.getStudents(); // Retrieve updated students
  }
  deleteStudent(student: Student): void {
    this.studentService.deleteStudent(student); // Delete the student
    this.loadStudents(); // Refresh the list after deletion
  }

  updateStudent(student: Student): void {
    this.router.navigate(['/update-student', { student: JSON.stringify(student) }]); // Navigate to edit page
  }
}


  // Method to delete a student
  

