import { Injectable } from '@angular/core';
import { Http, Response ,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';


@Injectable()

export class appService {
   constructor(private http: Http) {

  }
 
  
   
getStudentData() {
        return this.http.get('http://localhost:8090/rest/getStudent')
            .map(this.extractData)
            .catch(this.handleError);
    }
    getCourseData() {
        return this.http.get('http://localhost:8090/rest/getCourses')
            .map(this.extractData)
            .catch(this.handleError);
    }
   saveStudentData(savestudent:any) {
        return this.http.put('http://localhost:8090/rest/addStudent',{"studentName":savestudent.studentName,"firstName":savestudent.firstName,"lastName":savestudent.lastName,"email":savestudent.email,"courses":savestudent.courses})
            .map(this.extractData)
            .catch(this.handleError);
    }
      updateStudentData(savestudent:any) {
        return this.http.post('http://localhost:8090/rest/updateStudent',{"studentName":savestudent.studentName,"firstName":savestudent.firstName,"lastName":savestudent.lastName,"email":savestudent.email,"courses":savestudent.courses})
            .map(this.extractData)
            .catch(this.handleError);
    }
      deleteStudentData(id:any) {
        return this.http.delete('http://localhost:8090/rest/deleteStudent',{ "studentId":id })
            .map(this.extractData)
            .catch(this.handleError);
    }
  
    private extractData(res:Response) {
        let body = res.json();

        return body || [];
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
  

  
}