import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { loggerObject } from 'src/models/loggerObject';

@Component({
  selector: 'app-action-counter',
  templateUrl: './action-counter.component.html',
  styleUrls: ['./action-counter.component.css']
})
export class ActionCounterComponent implements OnInit {
  counterValue: any;
  requiredData : loggerObject[] = [];
  counterStart : number = 0;
  counterPause : number = 0;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataEnhancer();
  }
  ngOnChanges(): void{
    console.log(this.counterValue,"counterValue======4th comp",);
   
    
    
  }

  /*
  dataEnhancer(): void{
    var demoObj: loggerObject = {actionType:'', date: new Date()}

    this.dataService.subject1.subscribe(data=>{
      this.counterValue=data;
      if(this.counterValue.actionType == "Start"){
        demoObj.actionType = "Started";
        demoObj.date = this.counterValue.timestamping;
        this.counterStart++;
      }  
      else if(this.counterValue.actionType == "Pause"){
        demoObj.actionType = "Paused";
        demoObj.date = this.counterValue.timestamping;
        this.counterPause++;
      }
      this.requiredData.push(demoObj);
      console.log("action logger data", this.requiredData)
      if(this.counterValue.actionType == "Reset"){
        this.requiredData = [];
        this.counterStart = 0;
        this.counterPause = 0;
      }
    })

   
   
  

    
  }
*/
  dataEnhancer(): void{

  
    this.dataService.subject1.pipe( tap((data)=>{
       var demoObj: loggerObject = {actionType:'', timeStamping: 0}
    
      this.counterValue=data;

      console.log("this.countervalue from logger",this.counterValue.actionType)
      if(this.counterValue.actionType == "Start"){
        demoObj.actionType = "Started";
        demoObj.timeStamping = Number(this.counterValue.counterValue);
        console.log("hello 1"+demoObj)
        
       this.requiredData.push({actionType:"Started",date:this.counterValue.timestamping}) ;
       this.counterStart++;
      // this.requiredData=Object.assign({}, this.requiredData);


    }
    else if(this.counterValue.actionType == "Pause"){
      demoObj.actionType = "Paused";
      console.log("First paused inside logger")
      this.counterPause++;
       // this.dataService.pausedValue.
       // subscribe(data1=>{
        //this.pausedCounterValue=data1;
      //  console.log(data1+"data1 from logger")
      //  demoObj.timeStamping = this.pausedCounterValue;
      //  console.log("hello 2"+demoObj)
          this.requiredData.push({actionType:"Paused",date:this.counterValue.timestamping}) ;
      //  this.requiredData=Object.assign({}, this.requiredData);
    //  })

    
   
    }
 

  
    console.log("logger data", this.requiredData)
    if(this.counterValue.actionType == "Reset"){
      this.requiredData = [];
      this.requiredData = [];
      this.counterStart = 0;
      this.counterPause = 0;
    }

    })).
    
    subscribe(data=>{
   
  })
  


  }






}
