import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {

  @Input()id:number=0;
  @Input()score:number=0;
  @Output() changeScore= new  EventEmitter<{index:number,delta:number}>();
  
  
  constructor() { }

  ngOnInit(): void {
  }


  public onChangeScore(value:number):void{
    this.changeScore.emit({
       index:this.id,
       delta:value
    })
   
  }

}
