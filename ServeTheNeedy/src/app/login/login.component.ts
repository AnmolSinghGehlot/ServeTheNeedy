// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Route, Router } from '@angular/router';
// import { User } from '../user';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   user =new User();
//   msg='';
//   constructor(private _service : RegistrationService, private _router : Router) { }

//   ngOnInit(): void {
//   }
//   loginUser(){
//     this._service.loginUserFromRemote(this.user).subscribe(
//       (      data: any) =>{
//         console.log("response recieved");
//         this._router.navigate(['/loginsucess'])
//       },
//       (      error: any) => {
//         console.log("exception occured");
//         this.msg="Bad Credentials, Please enter valid details";

//       }
//     )
//   }
//   gotoregistration(){
//     this._router.navigate(['/registration'])
//   }
// }
