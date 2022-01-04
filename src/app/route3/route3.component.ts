import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css']
})
export class Route3Component implements OnInit {
  counterValue: any;
  pausedCounterValue: any;
  // pauseData: any;
  constructor() { }

  ngOnInit(): void {

  }

  GetChildData(data:any){  
    console.log(data);  
    this.counterValue = data;
 }  
  GetPauseData(data: any){
    console.log("paused data",data)
    this.pausedCounterValue = data;
    // this.pauseData = data;
  }
 ngOnChanges(): void{
   console.log("going in ngch--r3",this.counterValue,this.pausedCounterValue)
   this.GetChildData(this.counterValue);
   this.GetPauseData(this.pausedCounterValue);
 }

}
