import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  name : string;
  email : string;
  phonenumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  //dee method
  deleteUser(id): Observable<User> {// by default it is observable of type object,
                                  //we are changing it to observable og type User
    
      const headers2 = new HttpHeaders({ //FOR EVERY API REQ WE PASSING HEADERS,LIKE TOKENS ETC
      'Content-Type': 'application/json', //TO ELIMINATE THIS REPETITION WE USE INTERCEPTORS 
      'authenticationToken': '123454' //WE NEED NOT TO WRITE THIS HEADERS HERE ,WE WRITE IN INTERCEPTORS
     });
  
     const params2 =new HttpParams()
      .set('pageNum','10')
      .set('pageSize','100');

    return this.http.delete<User>('https://jsonplaceholder.typicode.com/users/'+id , {headers:headers2, params:params2});//delete the user with id 1 or we make it dynamic by passing id
  }

  //put method
  updateUser(){
    const putBody={
      name:'Arc tutorials',
      userId:1
    };
    const headers2 = new HttpHeaders({
      'Content-Type': 'application/json',
      'authenticationToken': '123454'
     });
  
     const params2 =new HttpParams()
      .set('pageNum','10')
      .set('pageSize','100');
  
    return this.http.put('https://jsonplaceholder.typicode.com/users/1',putBody,{headers:headers2, params:params2})
  }                           //update the user with id 1 

 //post method
 addUser(body){
  
  const headers2 = new HttpHeaders({
    'Content-Type': 'application/json',
    'authenticationToken': '123454'
   });

   const params2 =new HttpParams()
    .set('pageNum','10')
    .set('pageSize','100');

   return this.http.post('https://jsonplaceholder.typicode.com/users',body,{headers:headers2, params:params2})
 }


//get method
getUsers():Observable<User>{ //this method by default observable of type object, this method return observable of type User
    
  //HttpInterceptors
   const headers2 = new HttpHeaders({
     'Content-Type': 'application/json',
     'authenticationToken': '123454'
    })

    const params2 =new HttpParams()
    .set('pageNum','10')
    .set('pageSize','100');

  return this.http.get<User>('https://jsonplaceholder.typicode.com/users',{headers: headers2 ,params: params2});

  /*const users =[
    {userId : 10, userName : 'youtube'},
    {userId : 20, userName : 'instagram'}
  ];
  return users;*/
}


}
