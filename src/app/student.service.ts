import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    {
      name: 'Naresh'
    },
    {
      name: 'Suresh'
    },
    {
      name: 'Santhosh'
    },
    {
      name: 'Ravi'
    }
  ];

  public getStundes(): Observable<any> {
    const stundesObservable = new Observable(o => {
      setTimeout( () => {
        o.next(this.students);
      }, 1000);
    });

    return stundesObservable;
  }

}
