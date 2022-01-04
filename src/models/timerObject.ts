export class TimerObject {
    constructor(counterValue: number,actionType: string,timestamping: Date){
       this.counterValue =  counterValue;
       this.actionType = actionType;
       this.timestamping = timestamping;
       this.pausedData=this.pausedData;
    }

    counterValue : number;
 
    actionType : string;
 
    timestamping: Date;
    pausedData?:number;
  }
 