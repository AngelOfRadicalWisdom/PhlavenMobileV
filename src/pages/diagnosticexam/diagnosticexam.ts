import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhpServerProvider } from '../../providers/php-server/php-server';
import { Answerscouplet } from '../../Models/answerscouplet.model';
/**
 * Generated class for the DiagnosticexamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diagnosticexam',
  templateUrl: 'diagnosticexam.html',
  preserveWhitespaces: true,
})
export class DiagnosticexamPage {
  Answercouplets={} as Answerscouplet;
  diagtest:any;
  choices:any;
  choicesdata=[];
  diagnosticdata=[];
  requestData:any;
  answerData:any;
  answers;
  sendUserAnswers;

  constructor(public navCtrl: NavController, public navParams: NavParams,public PhpServer:PhpServerProvider) {
    this.answers = new Array<Answerscouplet>();

  }
  ngOnInit(){
    //this.requestData=this.PhpServer.getUsername();
    this.Answercouplets.username=this.PhpServer.getUsername();
    this.Answercouplets.revcenter=this.PhpServer.passRevcenter();
    this.PhpServer.diagnosticexam(this.Answercouplets,'m/reviewee/StartDiag').then(data=>{
      console.log(data);
      this.diagtest=data;
     // this.diagnosticdata=Array.of(this.diagtest)
      this.diagnosticdata=this.diagtest;
      console.log(this.diagnosticdata);

      })
      this.PhpServer.getChoices(this.Answercouplets,'m/reviewee/choices').then(data=>{
        this.choices=data;
        this.choicesdata=this.choices;

      })
    }  
    getData(questionId,selectedAnswerId,examID){
      var questionAlreadyAnswered = false;
      for(var i =0; i<this.answers.length;i++){
        if(this.answers[i].questionid==questionId)
          {
            this.answers[i].answerid = selectedAnswerId;
            questionAlreadyAnswered = true;
          }     
        }
        if(!questionAlreadyAnswered) {
          var ac = new Answerscouplet();
          ac.questionid = questionId;
          ac.answerid = selectedAnswerId;
          ac.examID=examID;
          ac.username = this.PhpServer.getUsername();
          this.answers.push(ac);
     


      //this.Answers.Qanswers=
     // console.log(Answers);
      //console.log(Question);
     

      /*{
        question1: {
          question?id: "question_id",
          answer_id: "answer_id"

        }
        question2: {
          ...
        }
    }*/

      console.log(this.answers);
    }
  }
    sendAnswers(examID){
      //convert answers array to JSON object
      var stringToParse = '{ "username":'+'"'+this.Answercouplets.username+'"'+","+'"revcenter":'+'"'+this.Answercouplets.revcenter+'"'+","+'"count":'+'"'+this.answers.length+'"'+","+'"question":[';
      for(var i =0; i<this.answers.length; i++){
        stringToParse = stringToParse + '{ "questionid" : ' + '"' + this.answers[i].questionid + '",' + '"answerid" :' + '"' + this.answers[i].answerid + '" '+","+'"examID":'+'"'+this.answers[i].examID+'"}';
        if(i<this.answers.length-1){
          stringToParse = stringToParse +  ",";
        }
       // console.log(stringToParse);
      }

      stringToParse = stringToParse + ']}';
      console.log(stringToParse);
     let obj =  JSON.parse(stringToParse);
      console.log(obj);
    
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosticexamPage');
  }

}
