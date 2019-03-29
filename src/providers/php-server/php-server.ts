import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import {Http, Headers} from '@angular/http';
//import { UserData } from '../../Models/UserData.model';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import 'rxjs/add/operator/map';
let apiUrl = 'http://localhost:8000/api/';
//let apiUrl = 'http://192.168.43.245:8000/api/';
//let apiUrl ='http://192.168.254.111:8000/api/';
/*
  Generated class for the PhpServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhpServerProvider {
  private responseData;
  private revcenter;
  private examID;
  constructor(public http: Http) {
    console.log('Hello PhpServerProvider Provider');
  }
  signup(UserData, type) {
    return new Promise((resolve, reject) => {
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  headers.append('Access-Control-Allow-Origin','*');
headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  this.http.post(apiUrl + type, JSON.stringify(UserData), {headers: headers})
  .subscribe(res => {
        resolve(res.json());
      }, (err) => {
    reject(err);
    console.log("Failed Registration");
  });
    });
  }
  getRevcenters(type) {
      return new Promise(resolve => {    
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.http.get(apiUrl+type)
        .subscribe(data => {
          resolve(data.json()); 
          //data.json();
          this.revcenter=data;
        },
         err => {     
            console.log(err);    
        }); 
       });
      }
      passRevcenter(){
        return this.revcenter;
      }
      login(credentials,type){
        return new Promise((resolve, reject) => {
          let headers = new Headers();
          headers.append('Content-Type','application/json');
          headers.append('Access-Control-Allow-Origin','*');
          headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
          this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
                resolve(res.json());
              //  console.log(credentials.username);
                this.responseData=credentials.username;
                console.log(this.responseData);
               // this.responseData.json();
              }, (err) => {
            reject(err);
            console.log("Failed Registration");
          });  
            });
          }
          getUsername(){
           return this.responseData;
          }
          getLearningPath(details,type) {
            return new Promise(resolve => {    
              let headers = new Headers();
              headers.append('Content-Type','application/json');
              headers.append('Access-Control-Allow-Origin' , '*');
              headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
              this.http.post(apiUrl+type,JSON.stringify(details),{headers:headers})
              .subscribe(data => {
                resolve(data.json()); 
                //data.json();
                this.revcenter=details.revcenter;
              console.log(details);
              },
               err => {     
                  console.log(err);    
              }); 
             });
            }
            getAddRevcenter(details,type) {
              return new Promise(resolve => {    
                let headers = new Headers();
                headers.append('Content-Type','application/json');
                headers.append('Access-Control-Allow-Origin' , '*');
                headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
                this.http.post(apiUrl+type,JSON.stringify(details),{headers:headers})
                .subscribe(data => {
                  resolve(data.json()); 
                  //data.json();
                  //this.revcenter=details.revcenter;
                console.log(details);
                },
                 err => {     
                    console.log(err);    
                }); 
               });
              }
            diagnosticexam(credentials,type){
              console.log(credentials)
              return new Promise(resolve=>{
                let headers= new Headers();
                headers.append('Content-Type','application/json');
                headers.append('Access-Control-Allow-Origin' , '*');
                headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
                this.http.post(apiUrl+type,credentials,{headers:headers})
                .subscribe(data=>{
                  resolve(data.json());
                },
                err=>{
                console.log(err);
                });
              });
            }
            // diagnosticexam(credentials,type){
            //   let headers = new Headers();
            //   headers.append('Content-Type','application/json');
            //   return this.http.post(apiUrl+type,JSON.stringify(credentials),{headers:headers}).map(res=>res);
            // }

      getChoices(credentials,type){
        return new Promise(resolve=>{
          let headers= new Headers();
          headers.append('Content-Type','application/json');
          headers.append('Access-Control-Allow-Origin' , '*');
          headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
          this.http.post(apiUrl+type,JSON.stringify(credentials),{headers:headers})
          .subscribe(data=>{
            resolve(data.json());
            console.log(data);
          },
          err=>{
          console.log(err);
          });
        });
      }
      sendAnswer(credentials,type){
        return new Promise(resolve=>{
          
        })
      }
      viewProfile(credentials,type){
        return new Promise(resolve=>{
          let headers= new Headers();
          headers.append('Content-Type','application/json');
          headers.append('Access-Control-Allow-Origin' , '*');
          headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
          this.http.post(apiUrl+type,JSON.stringify(credentials),{headers:headers})
          .subscribe(data=>{
            resolve(data.json());
          },
          err=>{
          console.log(err);
          });
        });

      }
      getRevCenterPerUser(credentials,type){
        return new Promise(resolve=>{
          let headers= new Headers();
          headers.append('Content-Type','application/json');
          headers.append('Access-Control-Allow-Origin' , '*');
          headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
          this.http.post(apiUrl+type,JSON.stringify(credentials),{headers:headers})
          .subscribe(data=>{
            resolve(data.json());
          },
          err=>{
          console.log(err);
          });
        });

      }
      getExamAndResultsPerUser(credentials,type){
        return new Promise(resolve=>{
          let headers= new Headers();
          headers.append('Content-Type','application/json');
          headers.append('Access-Control-Allow-Origin' , '*');
          headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
          this.http.post(apiUrl+type,JSON.stringify(credentials),{headers:headers})
          .subscribe(data=>{
            resolve(data.json());
          },
          err=>{
          console.log(err);
          });
        });

      }
      getLessonsPerUser(credentials,type){
        return new Promise(resolve=>{
          let headers= new Headers();
          headers.append('Content-Type','application/json');
          headers.append('Access-Control-Allow-Origin' , '*');
          headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
          this.http.post(apiUrl+type,JSON.stringify(credentials),{headers:headers})
          .subscribe(data=>{
            resolve(data.json());
          },
          err=>{
          console.log(err);
          });
        });

      }
      startNode(credentials,type){
        return new Promise(resolve=>{
          let headers= new Headers();
          headers.append('Content-Type','application/json');
          headers.append('Access-Control-Allow-Origin' , '*');
          headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
          this.http.post(apiUrl+type,JSON.stringify(credentials),{headers:headers})
          .subscribe(data=>{
            resolve(data.json());
          },
          err=>{
          console.log(err);
          });
        });

      }


}
