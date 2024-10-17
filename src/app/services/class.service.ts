import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  getClasses() {
    return [
      { name: 'Class A', grade: 'Grade 1' },
      { name: 'Class B', grade: 'Grade 2' }
    ];
  }
}