import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantTypes } from 'src/app/models/enums/enums';
import { Restaurant } from 'src/app/models/interfaces/restaurant';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})

export class AddRestaurant implements OnInit {
  newRestaurantForm:FormGroup;
  RestaurantTypes = RestaurantTypes;
  rating:number = 3;
  starCount:number = 5;
  starColor = 'black';
  finishedRating:number = 0;
  @Output() addRestaurant = new EventEmitter<Restaurant>();
  @Output() closeForm = new EventEmitter<void>();

  ngOnInit() {
    this.newRestaurantForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      cuisine: new FormControl('', Validators.required),
      hever: new FormControl(false),
      kosher: new FormControl(false)
    });
  }

  onRate($event:any) {
    this.finishedRating = $event['newValue'];
  }

  onSubmit() {
    const newRestuarant:Restaurant = {
      name: this.newRestaurantForm.get('name').value,
      address: this.newRestaurantForm.get('address').value,
      type: this.newRestaurantForm.get('cuisine').value,
      isHvr: this.newRestaurantForm.get('hever').value,
      isKosher: this.newRestaurantForm.get('kosher').value,
      rank: this.finishedRating
    };
    this.addRestaurant.emit(newRestuarant);
  }

  onCloseForm() {
    this.closeForm.emit();
  }
}

