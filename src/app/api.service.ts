

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Programdata } from './program/program.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  //add pogram

  postprogram(data:any){
    return this.http.post<Programdata>("http://localhost:4200/posts",data);
    
    
  }

  //create by Post

  
//get
getprogram(){
  return this.http.get<any>("http://localhost:4200/posts");
 
  
}

//Update

updateprogram(data:any,id:number){
  return this.http.put("http://localhost:4200/posts/"+ id,data);
  
}


//delete

deletepro(id:number){
  return this.http.delete<any>("http://localhost:3000/posts/"+id);
  
}
  
  

  

}