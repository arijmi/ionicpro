import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {

  student: Student | null = null; // Initialize student as null
  tempStudent: Student = { name: '', class: '' };

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const studentData = this.activatedRoute.snapshot.paramMap.get('student');
    if (studentData) {
      this.student = JSON.parse(studentData); // Parse the student object
    }
  }

  updateStudent(): void {
    if (this.student) {
      // Update the original student object with the tempStudent values
      this.studentService.updateStudent(this.student, { ...this.tempStudent });
      this.router.navigate(['/students']); // Navigate back to the students page
    }
  }
}