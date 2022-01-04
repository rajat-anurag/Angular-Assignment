import { Component, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {
/*  number: number=0;

  constructor(private renderer:Renderer2,private elemRef:ElementRef) { }


  ngOnInit(): void {
    let val1="hello"+this.number++;
    this.renderer.setStyle(this.elemRef.nativeElement,'background-color','blue');
  
    //this.print(val1,'id1');
  }

  print(val:any,id:any)
  {
    let div=document.createElement('div');
    div.innerText=val;
    this.renderer.setStyle(this.elemRef.nativeElement,'background-color','blue');
    document.getElementById(id)?.appendChild(div);
   
    
  }
*/
containers:any = [];
dataset:any;
@HostBinding() scroll:any;

ngOnInit(){
 
  this.dataset=document.getElementById('span1');
  console.dir(this.dataset?.dataset.value+"dataset dummy");
  this.containers.push(this.containers.length);
  this.containers.push(this.containers.length);
  this.containers.push(this.containers.length);
}

ShowAlert(container:any){
  alert(`Button ${container+1} is clicked`);

}

@HostListener("document:scroll", [])
onWindowScroll() {
  this.containers.push(this.containers.length);
}
constructor() { }

add() {
  this.containers.push(this.containers.length);
}
}
