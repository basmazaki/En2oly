import { Component, OnInit } from '@angular/core';
import { ClientServicesService } from '../../ClientCallServicees/client-services.service';
import { GetAllFinshedRequests } from '../../ClientViewModels/get-all-finshed-requests';

@Component({
  selector: 'app-client-requests-history',
  templateUrl: './client-requests-history.component.html',
  styleUrls: ['./client-requests-history.component.css']
})
export class ClientRequestsHistoryComponent implements OnInit {

  ListFinshedRequests:GetAllFinshedRequests[];

  constructor(private ClientServices:ClientServicesService) { }

  ngOnInit() {
    this.ClientServices.GetAllFinshedRequests().subscribe
    ((res)=>{this.ListFinshedRequests=res;
    console.log(res);
  }
    )
  }

}
