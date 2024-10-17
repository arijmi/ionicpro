import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router'; // Import Router
interface Student {
  name: string;
  class: string;
}

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],

})
export class AddStudentPage implements OnInit {

  student: Student = { name: '', class: '' };

  constructor(private studentService: StudentService ,private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addStudent(): void {
    // Ensure that the student is being added
    this.studentService.addStudent(this.student);
    // You may also want to reset the form or navigate back
    console.log('Student added:', this.student);
    this.router.navigate(['/students']);

  }
   
  
}