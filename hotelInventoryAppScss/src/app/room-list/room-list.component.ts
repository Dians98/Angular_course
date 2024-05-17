import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomList } from '../rooms/room';


@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
})
export class RoomListComponent implements OnInit {
  /**
   * The decorator input is used to say that the property rooms here can be rendered as an html
   * roomsListInput is the variable used to gather data as an input and will be rendered as an output as used on the component
   */
  @Input() roomsListInput: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>()

  constructor() {}
  ngOnInit(): void {}

  selectRoom(room: RoomList)
  {
    this.selectedRoom.emit(room);
  }
}
