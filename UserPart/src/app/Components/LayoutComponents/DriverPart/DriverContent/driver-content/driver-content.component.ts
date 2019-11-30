import { Component, OnInit } from '@angular/core';
import {  DriverDashboardService } from '../../DriverServices/driver-dashboard.service';
import { DriverDashboard } from '../../DriverViewModels/driver-dashboard';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-driver-content',
  templateUrl: './driver-content.component.html',
  styleUrls: ['./driver-content.component.css']
})
export class DriverContentComponent implements OnInit {

  ClientRequests:DriverDashboard[];
  userID=localStorage.getItem('ID');
  
  
  constructor(private DriverServices:DriverDashboardService,private Activated_Route:ActivatedRoute) { 

  }

  ngOnInit() {

    this.DriverServices.getAllRequests().subscribe(
      (res)=>{this.ClientRequests=res;
      console.log(res)},
      
    );



  }

   
  AcceptRequesst(id:number)
  {
    /************* */
    alert(this.userID);
    alert(id);

      alert("accept");
      this.DriverServices.AcceptRequest(id,this.userID)
      .subscribe(res=>{
        console.log(res);
        err=>alert(err)
      
     
      })
    

    /*********** */
  }

}
