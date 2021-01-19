import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title = 'project';
  fname="";
  lname="";
  area="";
  tel="";
  email="";
  getUserValue(val){
    this.fname=val.firstname;
    this.lname=val.lastname;
    this.area=val.areacode;
    this.tel=val.telnum;
    this.email=val.emailid;
    alert("your details: Name: " + this.fname + " " + this.lname + " area box "+ this.area + " telephone number :" + this.tel
    + " Email :" +this.email);

  }
}
