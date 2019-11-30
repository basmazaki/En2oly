import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientheader',
  templateUrl: './clientheader.component.html',
  styleUrls: ['./clientheader.component.css']
})
export class ClientheaderComponent implements OnInit {
  ISLogin:boolean=false;
  Status:boolean;
  constructor(private router:Router) { }

  ngOnInit() {

  }
  LogOut()

  {
    alert('lll');
    this.ISLogin=false;
    //localStorage.setItem('ClientID',null);
   // localStorage.setItem('ClientToken',null);
    // localStorage.setItem('ID',null);
    // localStorage.setItem('Token',null);
    localStorage.clear();
    alert(localStorage.getItem('ID'))


this.router.navigate(['/home']);

  }

}
