import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements AfterViewInit{
  title = 'hotelInventoryApp';
  role = 'admin';

  @ViewChild('user', {read: ViewContainerRef }) ViewContainerRef !: ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.ViewContainerRef.createComponent(RoomsComponent);
    componentRef.instance.hotelName = "Test Ng After View Init";
  }
}
