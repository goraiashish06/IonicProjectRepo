import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { error } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  verificationId: any;
  code: string;
  constructor() {}

  send(){
    let tell="+918697672992";

    (<any>window).FirebasePlugin.verifyPhoneNumber(tell, 60, (credential)=>
     {
       console.log("SMS sent succesfully")
       this.verificationId = credential.verificationId;

  }),(error)=>{
    console.log(error);
  }

  }

  verify(){
    let siginCred= firebase.auth.PhoneAuthProvider.credential(this.verificationId,this.code);
    console.log(this.code);
    firebase.auth().signInWithCredential(siginCred).then((info)=>{
      console.log(info);
    }),(error)=>{
      console.log(error);
    }

  }
} 