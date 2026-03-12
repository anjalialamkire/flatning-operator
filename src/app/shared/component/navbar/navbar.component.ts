import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
 
})
export class NavbarComponent implements OnInit {
   isToggle:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onToggle()
  {
    this.isToggle = !this.isToggle
  }

}
