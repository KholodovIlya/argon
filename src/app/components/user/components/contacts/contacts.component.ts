import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../person';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  personalList!: Observable<Person[]>
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.personalList = this.userService.getPersonalList();
  }

}
