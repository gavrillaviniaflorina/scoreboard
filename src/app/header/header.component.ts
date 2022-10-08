import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  @Input() players: Player[] = [];

  public totalPoints():number{

    let total=0;
    for(let i=0;i<this.players.length;i++){
        total+=this.players[i].score;
    }
    return total;
  }

  public totalPlayers():number{

    return this.players.length;
  }

  constructor() {}

  ngOnInit(): void {}
}
