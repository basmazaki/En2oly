import { Component, OnInit } from '@angular/core';
import { DriverDashboard } from '../../../DriverPart/DriverViewModels/driver-dashboard';
import { ClientServicesService } from '../../ClientCallServicees/client-services.service';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.css']
})
export class ClientRequestComponent implements OnInit {
newRequest:DriverDashboard;
  constructor(private ClientService:ClientServicesService) { 
    
this.newRequest=new DriverDashboard(0);
 
  }

  ngOnInit() {
    
  }
  AddRequest()
  {
    alert("rrrrrrrrrrrrrrr");
alert(this.newRequest);
    console.log(JSON.stringify(this.newRequest));

    this.ClientService.AddRequest(this.newRequest)
    .subscribe(
      (data) => {console.log (JSON.stringify(data)); },
      (err) => {console.log(err);
      });
     

  }
}
