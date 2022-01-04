import { Component, Input, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { loggerObject } from 'src/models/loggerObject';

@Component({
  selector: 'app-counter-action-logger',
  templateUrl: './counter-action-logger.component.html',
  styleUrls: ['./counter-action-logger.component.css']
})
export class CounterActionLoggerComponent implements OnInit {
  counterValue: any;
  pausedCounterValue : number=0;
  requiredData : loggerObject[] = [];
  // demoObj: loggerObject = {actionType:'', timeStamping: 0}

  constructor(private dataService:DataService) {
    this.dataEnhancer();
   }

  ngOnInit(): void {
    console.log(this.counterValue,"counterValue");
    console.log("PausedCounterValue",this.pausedCounterValue);
     // this.dataEnhancer();
  }

  ngOnChanges(): void{
  }
  dataEnhancer(): void{


  
    this.dataService.subject1.pipe( tap((data)=>{
       var demoObj: loggerObject = {actionType:'', timeStamping: 0}
    
      this.counterValue=data;

      console.log("this.countervalue from logger",this.counterValue.actionType)
      if(this.counterValue.actionType == "Start"){
        demoObj.actionType = "Started";
        demoObj.timeStamping = Number(this.counterValue.counterValue);
        console.log("hello 1"+demoObj)
        
       this.requiredData.push({actionType:"Started",timeStamping:Number(this.counterValue.counterValue)}) ;
      // this.requiredData=Object.assign({}, this.requiredData);


    }
    else if(this.counterValue.actionType == "Pause"){
      demoObj.actionType = "Paused";
      console.log("First paused inside logger")
    
        this.dataService.pausedValue.
        subscribe(data1=>{
        this.pausedCounterValue=data1;
        console.log(data1+"data1 from logger")
        demoObj.timeStamping = this.pausedCounterValue;
        console.log("hello 2"+demoObj)
        //  this.requiredData.push({actionType:"Paused",timeStamping:this.pausedCounterValue}) ;
      //  this.requiredData=Object.assign({}, this.requiredData);
     
      })

      setTimeout(() => {
        this.requiredData.push({actionType:"Paused",timeStamping:this.pausedCounterValue}) ;
      }, 10);
   
    }
 

  
    console.log("logger data", this.requiredData)
    if(this.counterValue.actionType == "Reset"){
      this.requiredData = [];
    }

    })).
    
    subscribe(data=>{
   
  })
  


  }

}
