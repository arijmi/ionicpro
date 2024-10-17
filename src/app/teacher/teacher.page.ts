import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { Teacher } from './teacher.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage  {

  teacher: Teacher = { id: '', name: '', subject: '', experience: 0 };
  teachers: Teacher[] = [];

  constructor() {}

  // Add a new teacher
  addTeacher() {
    if (this.teacher.id === '') {
      this.teacher.id = Date.now().toString(); // Generate unique ID as a string
      this.teachers.push({ ...this.teacher });
    } else {
      this.updateTeacher(); // Call update if teacher ID exists
    }
    this.resetForm(); // Reset the form after adding or updating
  }

  // Reset the form
  resetForm() {
    this.teacher = { id: '', name: '', subject: '', experience: 0 };
  }

  // Edit teacher
  editTeacher(teacherToEdit: Teacher) {
    this.teacher = { ...teacherToEdit }; // Set the teacher details for editing
  }

  // Delete a teacher by ID
  deleteTeacher(id: string) {
    this.teachers = this.teachers.filter((teacher) => teacher.id !== id);
  }

  // Update teacher details
  updateTeacher() {
    const index = this.teachers.findIndex(t => t.id === this.teacher.id);
    if (index !== -1) {
      this.teachers[index] = { ...this.teacher }; // Update the teacher's details
    }
  }
  
}