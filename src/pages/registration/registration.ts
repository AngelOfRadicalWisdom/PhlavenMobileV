import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LandingPage}from '../landing/landing';
//import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { PhpServerProvider} from '../../providers/php-server/php-server';
import 'rxjs/add/operator/map';
import { UserData } from '../../Models/UserData.model';
import {Http, Headers} from '@angular/http';
//import { jsonpCallbackContext } from '@angular/common/http/src/module';
//import { RequestOptions } from '@angular/http';
/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage implements OnInit{
  responseData:any;
  revcenterlist:any;
 //revcenter;
list=[];
   headers=new Headers();

UserData={}as UserData;
//  UserData={
//  username:this.UserData.username,
// password:this.UserData.password,
// pass:this.UserData.cpass,
// name:this.UserData.fname,
//   lname:this.UserData.lname,
//   email:this.UserData.email,
//   gender:this.UserData.gender
//  };

  //UserData = {'username':"",'password',"cpass":"","lastname":"","firstname":" ","email":"","gender":" "};

  constructor(public navCtrl: NavController, public navParams: NavParams, public PhpServer:PhpServerProvider) {
   
    }
    
    ngOnInit(){
      this.PhpServer.getRevcenters('revcenters').then(data=> {     
       // result.json();
        this.revcenterlist = data; 
    //   this.revcenterlist.json();
       this.list=this.revcenterlist;
        // console.log(this.revcenterlist);  
         //3console.log (this.list) ;
       });
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
   // let headers=new Headers();
   // headers.append('Content-Type','application/json');
//headers.append('UserData','application/json');

//this.responseData=UserData;
  }
  signup(){
//    // let data=new FormData();
//     //data.append('username','email');
this.PhpServer.signup(this.UserData,'m/newuser/register').then((result) => {
//     // this.responseData=data;
 this.responseData = result;
     if(this.responseData==200){
      this.navCtrl.push(LandingPage);
     }
     else{ 
       console.log("Registration Failed"); }
   }, (err) => {
   //  alert(err);



    })
  }
   
  revcenters(){  
      this.PhpServer.getRevcenters('revcenters').then(result=> {     
         this.revcenterlist = result; 
         this.list=Array.of(this.revcenterlist)
         // console.log(this.list);    
        });
        }

}
