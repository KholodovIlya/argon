import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../game';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gamesList!: Observable<Game[]>
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.gamesList = this.userService.getGamesList();
  }

}
