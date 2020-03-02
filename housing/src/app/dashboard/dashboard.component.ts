import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'dev-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  prefix:string = "/dashboard/";
  routes: Array<string> = ["edit-provider","provider-status","manage-complex","add-complex"];

  constructor(private router: Router) {}
  
  ngOnInit() {
  }

  //is called whenever a component is loaded into the dashboard's router outlet
  onActivate()
  {
    this.matchSelectionWithUrl();
  }

  //goes to the dashboard default page, which is profile for provider
  goToDefaultPage()
  {
    this.router.navigate([this.prefix]);
  }
  //takes in a css selector as a string and the class that you want to add to that element
  addClass(selector:string,selectorClass:string)
  {
    document.querySelector(selector).classList.add(selectorClass);
  }
  //takes in a css selector as a string and the class that you want to remove from that element
  removeClass(selector:string,selectorClass:string)
  {
    document.querySelector(selector).classList.remove(selectorClass);
  } 
  //expands dropdown 
  expandDropdown()
  {
    this.removeClass("#dropdown-container","hide");
    this.addClass("#complex-nav","drop-active");
  }
  //collapse dropdown 
  collapseDropdown()
  {
    this.addClass("#dropdown-container","hide");
    //this.removeClass("#complex-nav","drop-active");
  }

  //calls open or collapse dropdown methods based on a condition
  toggleDropdown()
  {
    //add drop-active class to the complexes dropdown
    this.addClass("#complex-nav","drop-active");

    if(document.querySelector("#dropdown-container").classList.contains("hide"))
    {
      this.expandDropdown();
    }
    else{ 
      this.collapseDropdown();
    }
  }

  //is called by onActivate, and adds styles to dashboard navigation items based on the url
  matchSelectionWithUrl()
  {
    //remove all active styling in dashboard
    document.querySelectorAll(".dashboard-nav-item").forEach(function(e){
      e.classList.remove("active");
    });

    //add active styling based on url
    switch(this.router.url)
    {
      case this.prefix+this.routes[0]: //if url is /dashboard/edit-provider
        //collapse the dropdown, make profile link active, and remove styling from dropdown in case active
        this.collapseDropdown();
        this.addClass("#profile-nav","active");
        this.removeClass("#complex-nav","drop-active");
        break;
      case this.prefix+this.routes[1]: //if url is /dashboard/provider-status
        //collapse the dropdown, make edit-provider link active, and remove styling from dropdown in case active
        this.collapseDropdown();
        this.addClass("#status-nav","active");
        this.removeClass("#complex-nav","drop-active");
        break;
      case this.prefix+this.routes[2]: //if url is /dashboard/manage-complex
        //expand the dropdown, make manage complexes link active
        this.expandDropdown();
        this.addClass("#manage-nav","active");
        break;
      case this.prefix+this.routes[3]: //if url is /dashboard/add-complex
        //expand the dropdown, make add complexes link active
        this.expandDropdown();
        this.addClass("#add-nav","active");
        break;
      default: //if somehow fails go to the default dashboard page
        this.goToDefaultPage();
        break;
    }
  }

}
