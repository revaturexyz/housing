import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'dev-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  baseUrl:string = "/dashboard";
  providerDefaultPage: string = "edit-provider";
  coordinatorDefaultPage: string = "coordinator-notifications";
  tenantDefaultPage: string = "tenant-profile";
  isDropdownOpen: boolean = false;
  public role: string;
 
  constructor(private router: Router,public user: UserService, public oktaAuth: OktaAuthService) { 
  }
 
  ngOnInit() {
    this.role = sessionStorage.getItem("role");

    //check if route is just '/dashboard'
    if(this.router.url == this.baseUrl){

      //based on user role, navigate to their respective default page
      //if no role, navigate back to home page
      switch(this.role)
      {
        case "Provider":
          this.goToDefaultPage(this.providerDefaultPage);
          break;
        case "Coordinator":
          this.goToDefaultPage(this.coordinatorDefaultPage);
          break;
        case "Tenant":
          this.goToDefaultPage(this.tenantDefaultPage);
          break;
        default:
          //redirect to home
          this.router.navigate(["./"]);
          break;
      } 
    }
  } 

  //goes to the dashboard default page based on  the default page passed
  goToDefaultPage(defaultPage:string)
  {
    this.router.navigate([this.baseUrl+"/"+defaultPage]);
  }

  //takes in a css selector as a string and the class that you want to add to that element
  addClass(selector:string, selectorClass:string)
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
    //remove the hide class from dropdown container, which will display the container
    this.removeClass(".dropdown-container","hide");  
    
    //add the active styling on the dropdown button
    this.addClass(".dash-dropbutton","drop-active");

    this.isDropdownOpen = true;
  }

  //collapses dropdown 
  collapseDropdown()
  {
    //hide the dropdown container
    this.addClass(".dropdown-container","hide"); 
    
    //remove the active styling on the dropdown button
    this.removeClass(".dash-dropbutton","drop-active");

    this.isDropdownOpen = false;
  }

  //if dropdown is open collapse the dropdown
  //if dropdown is closed open the dropdown
  toggleDropdown()
  { 
    if(this.isDropdownOpen)
    {
      this.collapseDropdown();
    }
    else
    { 
      this.expandDropdown(); 
    }
  }
}
