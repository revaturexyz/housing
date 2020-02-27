import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dev-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  toggleVisible(selector:string){
    //check if only one is toggled
    document.querySelectorAll(".display-item").forEach(function(e){
      e.classList.add("hide");
    });

    if(document.querySelector(selector).classList.contains("hide"))
    {
      document.querySelector(selector).classList.remove("hide");
    }
  }

  ngOnInit() {
  }

}
