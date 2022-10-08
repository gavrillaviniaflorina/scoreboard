import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.sass']
})
export class StopWatchComponent implements OnInit {

  constructor() { }

  time: number = 0;
  startTimer:any;
  running=false;
  ngOnInit(): void {
  }

  
  public Start():void{
   
    let time=(<HTMLInputElement>document.getElementById("clock"));

   if(!this.running){
     this.running=true;
     this.startTimer=setInterval(()=>{
       this.time++;
       time.innerHTML=`${this.time}`;
     },1000);
    
   }
 }

 public Reset():void{
   clearInterval(this.startTimer);
   this.running=false;
   let time=(<HTMLInputElement>document.getElementById("clock"));
   time.innerHTML="0";
   this.time=0;
 }

 public Stop():void{
   clearInterval(this.startTimer);
   this.running=false;
   let time=(<HTMLInputElement>document.getElementById("clock"));
   
 }

}
