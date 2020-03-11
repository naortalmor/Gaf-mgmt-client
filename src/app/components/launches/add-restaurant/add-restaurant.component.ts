import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantTypes } from 'src/app/models/enums/enums';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
}) 

export class AddRestaurant implements OnInit{
    newRestuarantForm: FormGroup;
    RestaurantTypes = Object.values(RestaurantTypes);
    rating:number = 3;
    starCount:number = 5;
    starColor = 'black'

    ngOnInit() {
        this.newRestuarantForm = new FormGroup({
          name: new FormControl(''),
          address: new FormControl(''),
          cuisine: new FormControl(''),
          options: new FormControl(''),
          hever: new FormControl(false),
          kosher: new FormControl(false)
        });
    }

    onRate($event: number){
        console.log($event);
    }
}

