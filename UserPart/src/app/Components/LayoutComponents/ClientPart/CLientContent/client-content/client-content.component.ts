import { Component, OnInit } from '@angular/core';
import { ClientServicesService } from '../../ClientCallServicees/client-services.service';
import { GetAllFinshedRequests } from '../../ClientViewModels/get-all-finshed-requests';

@Component({
  selector: 'app-client-content',
  templateUrl: './client-content.component.html',
  styleUrls: ['./client-content.component.css']
})
export class ClientContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 

    console.log(localStorage.getItem('ClientID'));
    console.log(localStorage.getItem('ClientToken'));


    
 

}}
