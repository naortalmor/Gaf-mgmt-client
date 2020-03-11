import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
}) 

export class AddRestaurant implements OnInit{
    newRestuarantForm: FormGroup;

    ngOnInit() {
        this.newRestuarantForm = new FormGroup({
          name: new FormControl(''),
          adress: new FormControl(''),
          cuisine: new FormControl(''),
          options: new FormControl('')
        });
    }
}

