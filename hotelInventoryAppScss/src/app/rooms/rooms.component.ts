import { Component } from '@angular/core';
import { Room, RoomList } from './room';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-rooms',
  standalone: true,
  /**
   * Import Common in order to able to use directive
   */
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  hotelName = "Hilton";
  hidden = true;
  constructor(){}

  room : Room = {
    totalRoom : 150,
    availableRoom : 150
  }

  roomList : RoomList[] = [
    {
      roomNumber : 1,
      roomType : "Single",
      amenities: "Toiletries, Personal care, Coffee Kit",
      price: 100,
      checkinTime: new Date('12-Mar-2024'),
      checkoutTime: new Date('13-Mar-2024')

    },
    {
      roomNumber : 2,
      roomType : "Single",
      amenities: "Toiletries, Coffee Kit",
      price: 100,
      checkinTime: new Date('15-Mar-2024'),
      checkoutTime: new Date('16-Mar-2024')

    },
    {
      roomNumber : 3,
      roomType : "Double",
      amenities: "Toiletries, Personal care, Coffee Kit, Bathrobes and slippers",
      price: 100,
      checkinTime: new Date('12-Mar-2024'),
      checkoutTime: new Date('13-Mar-2024')

    }

  ]

  toggle(): void{
    this.hidden = !this.hidden;
  }


}


