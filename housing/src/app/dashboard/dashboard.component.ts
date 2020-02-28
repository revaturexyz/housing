import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'dev-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
  ) { }
  
  ngOnInit() {
  }

  addClass(selector:string,selectorClass:string)
  {
    document.querySelector(selector).classList.add(selectorClass);
  }
  removeClass(selector:string,selectorClass:string)
  {
    document.querySelector(selector).classList.remove(selectorClass);
  }
  toggleDropdown(){
    //check if only one is toggled  
    this.toggleActive("#complex-nav");
    this.addClass("#complex-nav","sub-active");

    if(document.querySelector("#dropdown-container").classList.contains("hide"))
    {
      this.removeClass("#dropdown-container","hide"); 
    }
    else{ 
      this.addClass("#dropdown-container","hide");
    }
  } 
  toggleActive(selector:string)
  {
    //if any item is clicked remove active style from all, then add active to the one you want
    //but you don't want to remove from drop head when those sub components get selected
    document.querySelectorAll(".dashboard-nav-item").forEach(function(e){
      e.classList.remove("active");
    });

    if(document.querySelector(selector).classList.contains("main"))
    {
      this.addClass("#dropdown-container","hide");
      this.removeClass("#complex-nav","sub-active");
    }

    document.querySelector(selector).classList.add("active");
  }
}
