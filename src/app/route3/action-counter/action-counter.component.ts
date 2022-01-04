import { Component, Input, OnInit } from '@angular/core';
import { loggerObject } from 'src/models/loggerObject';

@Component({
  selector: 'app-action-counter',
  templateUrl: './action-counter.component.html',
  styleUrls: ['./action-counter.component.css']
})
export class ActionCounterComponent implements OnInit {
  @Input() counterValue: any;
  requiredData : loggerObject[] = [];
  counterStart : number = 0;
  counterPause : number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    console.log(this.counterValue,"counterValue======4th comp",);
    if(this.counterValue!= undefined){
      this.dataEnhancer();
    }
  }
  dataEnhancer(): void{
    var demoObj: loggerObject = {actionType:'', date: new Date()}

    if(this.counterValue.actionType == "Start"){
      demoObj.actionType = "Started";
      demoObj.date = this.counterValue.timestamping;
      this.counterStart++;

    }else if(this.counterValue.actionType == "Pause"){
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
  }
}
