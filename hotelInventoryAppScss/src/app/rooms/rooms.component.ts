import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from '../room-list/room-list.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  /**
   * Import Common in order to able to use directive
   */
  imports: [CommonModule,RoomListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit{
  hotelName = 'Hilton';
  hidden = true;
  room: Room = { totalRoom: 0, availableRoom: 0 };
  roomList: RoomList[] = [];
  /**
   * We added ! in order to not get the error
   * as we are using strict mode
   */
  selectedRoom !:RoomList

  constructor() {}

  ngOnInit(): void {
    this.room = {
      totalRoom: 150,
      availableRoom: 150,
    };

    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Single',
        amenities: 'Toiletries, Personal care, Coffee Kit',
        price: 100,
        checkinTime: new Date('12-Mar-2024'),
        checkoutTime: new Date('13-Mar-2024'),
      },
      {
        roomNumber: 2,
        roomType: 'Single',
        amenities: 'Toiletries, Coffee Kit',
        price: 100,
        checkinTime: new Date('15-Mar-2024'),
        checkoutTime: new Date('16-Mar-2024'),
      },
      {
        roomNumber: 3,
        roomType: 'Double',
        amenities:
          'Toiletries, Personal care, Coffee Kit, Bathrobes and slippers',
        price: 100,
        checkinTime: new Date('12-Mar-2024'),
        checkoutTime: new Date('13-Mar-2024'),
      },
    ];
  }

  toggle(): void {
    this.hidden = !this.hidden;
  }

  /**
   *
   * @param room : Remember, the event Emitter that we passed is a roomList,
   * automatically, the selectRoom here have to take a variable type of RoomList
   */
  selectRoom(room : RoomList ){
    console.log(room);
    this.selectedRoom = room;
  }
}
