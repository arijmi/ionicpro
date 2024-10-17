import { Injectable } from '@angular/core';
import { Teacher } from './teacher/teacher.module';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  updateTeacher(teacher: Teacher) {
    throw new Error('Method not implemented.');
  }
  getTeacherById(teacherId: number): Teacher {
    throw new Error('Method not implemented.');
  }
  addTeacher(teacher: Teacher) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
