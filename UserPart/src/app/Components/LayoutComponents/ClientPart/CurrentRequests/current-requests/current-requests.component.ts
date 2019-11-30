import { Component, OnInit } from '@angular/core';
import { GetAllNotFinshedRequests } from '../../ClientViewModels/get-all-not-finshed-requests';
import { ClientServicesService } from '../../ClientCallServicees/client-services.service';
import { concat } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-requests',
  templateUrl: './current-requests.component.html',
  styleUrls: ['./current-requests.component.css']
})
export class CurrentRequestsComponent implements OnInit {
  ListOfAllNotFinshedRequests:GetAllNotFinshedRequests[]=[];
  ListOFGetAllNotTakedRequests:GetAllNotFinshedRequests[]=[];
  public Lists:GetAllNotFinshedRequests [];
  constructor(private ClientServices:ClientServicesService,private router:Router
  ) { }

  ngOnInit() {

   this.ClientServices.GetAllNotFinshedRequests().subscribe(
      res=>{this.ListOfAllNotFinshedRequests=res;
        this.ClientServices.GetAllNotTakedRequests().subscribe(
          res2=>{this.ListOFGetAllNotTakedRequests=res2;
           // let Lists :GetAllNotFinshedRequests []
   this.     Lists=[...this.ListOfAllNotFinshedRequests,...this.ListOFGetAllNotTakedRequests];
// alert(JSON.stringify( this.Lists));
       }) },
        
      
    (err)=>{console.log(err);}
    );

 
  }
  Delete(ID:number)
  { 
    // alert(ID);
    this.ClientServices.CancelRequest(ID).subscribe(res=>{
      this.ClientServices.GetAllNotFinshedRequests().subscribe(
        res=>{this.ListOfAllNotFinshedRequests=res;
          this.ClientServices.GetAllNotTakedRequests().subscribe(
            res2=>{this.ListOFGetAllNotTakedRequests=res2;
             // let Lists :GetAllNotFinshedRequests []
     this.     Lists=[...this.ListOfAllNotFinshedRequests,...this.ListOFGetAllNotTakedRequests];
  // alert(JSON.stringify( this.Lists));
         }) },
          
        
      (err)=>{console.log(err);}
      );
    });
    
    
// this.router.navigate(['/home']);
// this.router.navigate(['/CurrentRequests']);

  }
  PayBill(RequestID:number)
  {
    this.router.navigate(['/ClientSay', RequestID]);

  }

}
