import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestaurantTypes } from 'src/app/models/enums/enums';
import { createHostListener } from '@angular/compiler/src/core';
import { EventEmitter } from '@angular/core';
import { Restaurant } from 'src/app/models/interfaces/restaurant';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
}) 

export class AddRestaurant implements OnInit{
    newRestuarantForm: FormGroup;
    RestaurantTypes = RestaurantTypes;
    rating:number = 3;
    starCount:number = 5;
    starColor = 'black'
    finishedRating: number = 0;
    @Output() addRestaurant = new EventEmitter<Restaurant>();

    ngOnInit() {
        this.newRestuarantForm = new FormGroup({
          name: new FormControl('', Validators.required),
          address: new FormControl('', Validators.required),
          cuisine: new FormControl('', Validators.required),
          hever: new FormControl(false),
          kosher: new FormControl(false)
        });
    }

    onRate($event: any){
       this.finishedRating = $event['newValue'];
    }

    onSubmit(){
      const newRestuarant: Restaurant = {name: this.newRestuarantForm.get('name').value, 
    address: this.newRestuarantForm.get('address').value,
    type: this.newRestuarantForm.get('cuisine').value,
    isHvr: this.newRestuarantForm.get('hever').value,
    isKosher: this.newRestuarantForm.get('kosher').value,
    rank: this.finishedRating}
    this.addRestaurant.emit(newRestuarant);
    } 
}

