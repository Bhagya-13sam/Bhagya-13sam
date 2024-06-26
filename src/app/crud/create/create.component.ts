import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  productForm?: FormGroup;

  ngOnInit() {
      this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],    
    })
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService
  ){ }

  submitForm() {
    this.crudService.create(this.productForm?.value).subscribe(_res => {
      console.log('Product created!')
      this.router.navigateByUrl('/crud/home/')})

    }
  }