import { Component, OnInit, Output,EventEmitter, Input, ViewChild, ElementRef, AfterViewChecked,  } from '@angular/core';
import { TimerObject } from 'src/models/timerObject';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.css']
})
export class CounterActionsComponent implements OnInit {
  @Input() pausedCounterValue:any=0;
  @Output() counterOutput:any  = new EventEmitter<TimerObject>(); //ask
  outputObject : TimerObject ;
  counter1: number = 0;
  startCheckFlag: boolean = false;
  @ViewChild('f') f:any;
  constructor() { 
    this.outputObject = new TimerObject(this.counter1,'',new Date());
    console.log(this.outputObject, "obj to be sent")
  }

  ngOnInit(): void {
    console.log(this.f+"f value")
  
  }
  ngAfterViewInit(): void{
    console.log("counter1",this.counter1);
   // console.log(this.f.value+"f value")
  }
 
  ngOnChanges(): void {

    console.log("this from paused counter"+this.pausedCounterValue);

    this.counter1=this.pausedCounterValue

 }
  startorpause(){
    console.log(typeof(this.counter1)+"typeof counter1");
    if(this.counter1 == undefined)
    {
      alert("Please Enter Value in Input field to Start Timer")
    }
    
   
    else{
      this.startCheckFlag = !this.startCheckFlag;
      if (this.startCheckFlag){
        this.outputObject.actionType = "Start";
  
      }else{
        this.outputObject.actionType = "Pause";
        // console.log("2nd comp pause",this.pauseData)
  
      }
      this.outputObject.timestamping = new Date();
      this.outputObject.counterValue = this.counter1;
      this.outputObject = Object.assign({}, this.outputObject); // changing obj reference for ngOnChanges
  
      this.counterOutput.emit(this.outputObject);  

    }
   
  }
  resetvalues(){
    console.log("reset----",this.outputObject);
    this.counter1 = 0;
    this.outputObject.actionType = "Reset";
    this.outputObject.counterValue = this.counter1;
    this.outputObject = Object.assign({}, this.outputObject); // changing obj reference for ngOnChanges
    console.log("reset--after--",this.outputObject);

    this.counterOutput.emit(this.outputObject);  

  }
}
