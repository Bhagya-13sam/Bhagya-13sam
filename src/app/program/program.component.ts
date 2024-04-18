import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Programdata } from './program.model';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})

export class ProgramComponent implements OnInit {

  programform!:FormGroup;
  dataobj:any;
  showupdate!:boolean;
  showadd!:boolean;
  allprogramdata:any;
  formBuilder:any;
  //data:undefined|Programdata[];
  datac:Programdata=new Programdata;
  

  constructor(private formbuilder:FormBuilder,private api:ApiService){}


  ngOnInit():void{
    this.programform=this.formbuilder.group({

      pid:[ ,Validators.required],
      pname:['',Validators.required],
      description:['',Validators.required],
      status:['',Validators.required],
      
    })
this.getprogram();
  }
  addprogram(){
    
    this.datac.pid=this.programform.value.pid;
    this.datac.pname=this.programform.value.pname;
    this.datac.description=this.programform.value.description;
    this.datac.status=this.programform.value.status;

    this.api.postprogram(this.datac).subscribe(res=>{
    this.programform.reset()
    alert("Record added successfully")
   },_err =>{alert("something when wrong")
  })
  this.getprogram();
  }

  getprogram(){
    this.api.getprogram().subscribe(res=>{
    this.allprogramdata=res;
    })
  }

  add()
  {
     this.showupdate=false;
     this.showadd=true;
     this.programform.reset();
 
  }

  


deleteprogram(data:any){
  if(confirm("Are you sure to delete?")){
  this.api.deletepro(data.id)
  .subscribe(res=>{
    alert("Record deleted Successfully");
    this.getprogram();
  })

}

}


edit(data:any)
  { 
    this.showupdate=true;
    this.showadd=false; 
   this.datac.id=data.id;
   this.programform.controls['pid'].setValue(data.pid);
   this.programform.controls['pname'].setValue(data.pname);
   this.programform.controls['description'].setValue(data.description);
   this.programform.controls['status'].setValue(data.status);
   
  }
 //update on edit
  
  update(){
    this.datac.pid =this.programform.value.pid;
    this.datac.pname =this.programform.value.pname;
    this.datac.description=this.programform.value.description;
    this.datac.status=this.programform.value.status;

this.api.updateprogram(this.datac,this.datac.id).subscribe(res=>{
  console.log(res)
  this.programform.reset()
  this.getprogram();
  alert("Record updated successfully")
},_err =>{alert("something when wrong")

})
  }

}
  