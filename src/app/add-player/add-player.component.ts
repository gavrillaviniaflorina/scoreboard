import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.sass']
})
export class AddPlayerComponent implements OnInit {

  @Output() addPlayer=new EventEmitter<{name:string}>();
  name:string="";
  constructor() { }

  ngOnInit(): void {
  }

  public onAddPlayer():void{
    this.addPlayer.emit({
      name:this.name
    })

    this.name="";
  }

}
