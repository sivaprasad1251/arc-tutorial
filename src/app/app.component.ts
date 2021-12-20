import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arc-tutorial';
  success_msg = false;
  success_flag = true;

  superPower="wonderWoman";//string
  category="mobiles";
  tax=100;

  styleProp="purple";
  txtColor="red";

  stylePropClass="c1 c2";
  conditionClsProp="c2";

  page_heading='siva hari prasad';
  
  data_object={                    //object
    firstName:'siva',
    lastName:'vanaparthy'
  };

  isUserLoggedIn = true;

  imgUrl="";
  imgAlt="alternative text";

  txtColVal="blue";
  colSpan=2;

  username="";
  month=9;

 contacts =[
  {
    firstName:'siva',
    lastName:'hari',
    contactID:12345
  },
  {
    'firstName':'siva',
    'lastName':'hari',
    'contactID':12345
  },
  {
    'firstName':'siva',
    'lastName':'hari',
    'contactID':12345
  },
  {
    'firstName':'siva',
    'lastName':'hari',
    'contactID':12345
  },
  {
    'firstName':'siva',
    'lastName':'hari',
    'contactID':12345
  },
  {
    'firstName':'siva',
    'lastName':'hari',
    'contactID':12345
  },
];
getClassName(){
  return 'c3';
}

sayHello(){
  console.log("hello world");
}

highlightBGcolor(a:any,b:any,c:any){
  console.log("hi i am being highlighted"+a+b+c );
}

inputBox(){
  console.log("this is input box");
}

students= [
  {studentId:100,StudentName:"siva",lastName:"prasad"},

];


}
