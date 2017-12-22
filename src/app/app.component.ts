import { Component ,Input, Output, EventEmitter } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   providers: [appService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    filteredData:any;
    data:any;
    res:any;
    cres:any;
    coursedata:any;
    showstudent:any;
    displayupdate:any;
      public model: any = {};

      constructor(private appservice: appService
        ) {
  }
ngOnInit() {
    this.showstudent=false;  
    this.displayupdate=false;
   this.getStudentList();
   this.getCourseList();

  }

  getStudentList(){
/* this.res={"results":[{"studentId":"14","firstName":"123","lastName":"1223","courses":["JAVA","UI"],"studentName":"AA","email":"1223"},{"studentId":"15","firstName":"dsfs","lastName":"werwer","courses":["JAVA","PHP"],"studentName":"12343","email":"123"}]}
  this.filteredData = [this.res];
this.data = [this.res]; */
   this.appservice.getStudentData().subscribe((response:any) => {
      this.filteredData = [response];
	  this.data = [response];
    }, (err:any) => { 
        console.log(err);
    }


  }
  getCourseList(){
  /* this.cres={"courses":[{"courseName":"JAVA","courseId":"1"},{"courseName":"ORACLE","courseId":"2"},{"courseName":"UI","courseId":"3"},{"courseName":"PHP","courseId":"4"}]}
  this.coursedata = [this.cres]; */


     this.appservice.getCourseData().subscribe((response:any) => {
     this.cres=response;
      this.coursedata = [response];
    }, (err:any) => { 
        console.log(err);
    }

  }

  saveStudent(){
  console.log(this.model)
      this.appservice.saveStudentData(this.model).subscribe((response:any) => {
      alert("successfully student is saved")
    }, (err:any) => { 
        console.log(err);
    }
  );
  }

updateStudent(){
  console.log(this.model)
      this.appservice.updateStudentData(this.model).subscribe((response:any) => {
      alert("successfully student is saved")
    }, (err:any) => { 
        console.log(err);
    }
  );
  }
  deleteStudent(id){
    this.appservice.deleteStudentData(id).subscribe((response:any) => {
      alert("successfully student is deleted")
    }, (err:any) => { 
        console.log(err);
    }
	);
  }

  create(){
  this.showstudent=true;
  }
back(){
	this.showstudent=false;
}
update(item){
	this.model.studentName=item.studentName,
	this.model.firstName=item.firstName,
	this.model.lastName=item.lastName,
	this.model.email=item.email,
	this.model.id=item.studentId,
	this.model.courses=item.courses

 this.showstudent=true;
 this.displayupdate=true;


}
  
}
