import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  @Input() player:Player={
    id:0,
    name:"",
    score:0
  }
  @Output() changeScore= new  EventEmitter<{index:number,delta:number}>();

  @Output() removePlayer= new  EventEmitter<{index:number}>();

  ngOnInit(): void {
  }

  
 public onChangeScore(value:{index:number,delta:number}):void{
  
  this.changeScore.emit(value);
  console.log("aici");
 }

 public onRemovePlayer():void{
    this.removePlayer.emit({
      index:this.player.id!
    });
 }

}
