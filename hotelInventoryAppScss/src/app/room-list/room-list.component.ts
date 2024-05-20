import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms/room';
import { log } from 'console';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent implements OnInit, OnChanges {
  /**
   * The decorator input is used to say that the property rooms here can be rendered as an html
   * roomsListInput is the variable used to gather data as an input and will be rendered as an output as used on the component
   */

  /**
   * En Angular, @Input est un décorateur utilisé pour transmettre des données d'un composant parent à un composant enfant. Cela permet aux composants enfants de recevoir des données ou des paramètres de configuration depuis leurs composants parents.
   */
  @Input() roomsListInput: RoomList[] = [];
  @Input() title: String = '';
  /**
   * En Angular, @Output est un décorateur utilisé pour émettre des événements d'un composant enfant à un composant parent. C'est un élément clé pour la communication entre composants, permettant au composant enfant d'envoyer des données ou des événements au composant parent.
   */
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    //this.title = "See below the list of our available rooms"
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
