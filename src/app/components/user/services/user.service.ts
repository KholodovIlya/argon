import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getPersonalList() {
    const resultArray = <Person[]>[
      { name: "Илья Холодов", description: "Главный программист", link: "https://vk.com/id450952979" },
      { name: "Святослав Самойлов", description: "Саппорт программист", link: "https://vk.com/lowtabkd" },
    ];

    return Observable.create((observer: { next: (arg0: Person[]) => void; complete: () => void; }) => {
      observer.next(resultArray);
      observer.complete();
    });
  }
}
