import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/models/Room.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {


  constructor(private router: Router, private http: HttpClient) {}
  searchText: string = '';
  heads_per_room: string = '';
  type_of_room = '';
  allRoom: Room[] = [];
  type_of_food = '';
  hostel_address = '';




  isShowDivIf = false; 
  isShowDivIftwo = false; 
  isShowDivIfthree = false;
  // isShowDivIffour = false; 


  errorshow = true;
  errorshowmsg = true;

    
  toggleDisplayDivIf() {  
    this.isShowDivIf = !this.isShowDivIf;  
  }  

  toggleDisplayDivIftwo()
  {  
    this.isShowDivIftwo = !this.isShowDivIftwo;  
  }  

  toggleDisplayDivIfthree() {  
    this.isShowDivIfthree = !this.isShowDivIfthree;  
  } 

  // toggleDisplayDivIffour() {  
  //   this.isShowDivIffour = !this.isShowDivIffour;  
  // } 
  onClickrooms(type_of_room: string) {
    this.type_of_room = type_of_room;
    this.fetchSelectedRoom();
  }

  onClickfood(type_of_food: string) {
    this.type_of_food = type_of_food;
    this.fetchSelectedRoom();
  }
  onClickheads(heads_per_room: string)
  {
  this.heads_per_room = heads_per_room;
  this.fetchSelectedRoom();
  }

  onClicklocation(hostel_address: string)
  {
  this.hostel_address = hostel_address;
  this.fetchSelectedRoom();
  }

  onNonefood() {
    this.type_of_food = '';
    this.fetchSelectedRoom();
  }

  onNoneroom() {
    this.type_of_room = '';
    this.fetchSelectedRoom();
  }

  onNoneheads() {
    this.heads_per_room = '';
    this.fetchSelectedRoom();
  }

  onSearch() {
    console.log(this.searchText);
    this.fetchSearchRoom();
  }

  ngOnInit() {
    this.fetchAllRoom();
  }




  private fetchSelectedRoom() {
    this.http
      .get<{ [key: string]: Room }>('https://localhost:7176/api/Rooms')
      .pipe(
        map((res) => {
          const Room = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              Room.push({ ...res[key], id: key });
            }
          }
          return Room;
        })
      )

      .subscribe((Room) => {
        if (Array.isArray(Room)) {
          if (this.type_of_room != '' && this.type_of_food != '') {
            const filtereddata = Room.filter(
              (item: { type_of_rooms: string; type_of_food: string ;heads_per_room: string;hostel_address:string;}) =>
                item.type_of_rooms === this.type_of_room &&
                item.type_of_food === this.type_of_food && item.heads_per_room === this.heads_per_room 
            );
            console.log(filtereddata);
            this.allRoom = filtereddata;
          } else {
            const filtereddata = Room.filter(
              (item: { type_of_rooms: string; type_of_food: string ;heads_per_room: string;hostel_address:string;}) =>
                item.type_of_rooms === this.type_of_room ||
                item.type_of_food === this.type_of_food ||
                item.heads_per_room === this.heads_per_room 
            );
            console.log(filtereddata);
            this.allRoom = filtereddata;
          }



          }
      });
  }

  fetchAllRoom() {
    this.http
      .get(`https://localhost:7176/api/Rooms`)
      .subscribe((res) => {
        this.allRoom = res as any;
      });
  }

  private fetchSearchRoom() {
    this.errorshow=true;
    this.errorshowmsg=true;
    
    this.http
      .get<{ [key: string]: Room }>('https://localhost:7176/api/Rooms')
      .pipe(
        map((res) => {
          const Room = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              Room.push({ ...res[key], id: key });
            }
          }
          return Room;
        })
      )

      .subscribe(
        (Room) => {
          if (Array.isArray(Room)) {
            const filtereddata = Room.filter(
              (item: { hostel_address: string }) =>
                item.hostel_address === this.searchText
            );
            console.log(filtereddata);
            this.allRoom = filtereddata;
            if (filtereddata.length == 0) {
              this.errorshowmsg=false;
            } else {
              console.log(filtereddata);
              this.allRoom = filtereddata;
            }
          }
        },
        (error) => {
          this.allRoom = [];
      this.errorshow=false;
        }
      );
  }
}
