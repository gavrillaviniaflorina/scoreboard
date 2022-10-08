import { Component, destroyPlatform } from '@angular/core';
import { Player } from './models/player';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'scoreboard';

  players:Player[]=[

  {

    id:0,
    name:"Lavinia",
    score:5
  },

  {

    id:1,
    name:"Andrei",
    score:7
  },

  {

    id:2,
    name:"Ana",
    score:-1
  },
  {

    id:3,
    name:"Ion",
    score:2
  },

 {

    id:4,
    name:"Andreea",
    score:-5
  },

 {

    id:5,
    name:"Raluca",
    score:10
  }
  ]

  public handleChangeScore(value: {index:number,delta:number}):void{
   
    this.players[value.index].score+=value.delta;

  }

  public handleAddPlayer(value:{name:string}):void{

    var player:Player={
               id:this.players.length,
               name:value.name,
               score:0}
    this.players.push(player);
  }

  public handleRemovePlayer(value:{index:number}):void{
    this.players.splice(value.index,1)
  }
}





