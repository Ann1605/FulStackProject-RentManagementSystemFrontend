import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'RentManagement';
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router 
  ) {
    this.reservationForm = this.fb.group({
      location: [''],
      numOfPersons: ['']
    });
  }
  onSubmit() {
    // const location = this.reservationForm.get('location').value;
    // const numOfPersons = this.reservationForm.get('numOfPersons').value;
  
    // Do something with the form values, such as submitting to a server or updating a component property
  }
  

}
