import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {

// onScroll() {
//     const offset = window.pageYOffset;

//     // Move the odd row up and the even row down
//     document.querySelectorAll('.row:nth-child(odd) img').forEach(function(img) {
//       (img as HTMLElement).style.transform = 'translateY(' + (-100 + offset / 2) + '%)';
//     });

//     document.querySelectorAll('.row:nth-child(even) img').forEach(function(img) {
//       (img as HTMLElement).style.transform = 'translateY(' + (100 - offset / 2) + '%)';
//     });
//   }

  constructor(private router: Router) { }

  

}
