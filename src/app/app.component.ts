import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isCollapsed :boolean=true;


getUrl(){
  return "url('~assets/img/background.jpg')";
}

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  val2:any;

  constructor(public routes:Router){
   


  }
  name = 'Max';

 

}
