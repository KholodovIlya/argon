import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../game';
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

  getGamesList() {
    const resultArray = <Game[]>[
      { name: "Rabbit", description: "😎😎😎", link: "https://kholodovilya.github.io/qwe/" },
      { name: "8 march", description: "🥳🥳🥳", link: "https://kholodovilya.github.io/hello/" },
      { name: "Mandelbrot set", description: "🤩🤩🤩", link: "https://kholodovilya.github.io/Mandelbrot/" },
      { name: "Funny Santa", description: "🎄🎄🎄", link: "https://kholodovilya.github.io/FunnySanta/" },
    ];

    return Observable.create((observer: { next: (arg0: Person[]) => void; complete: () => void; }) => {
      observer.next(resultArray);
      observer.complete();
    });
  }
}
