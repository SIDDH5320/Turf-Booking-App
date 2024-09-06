import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TurfListComponent } from "./components/turf-list/turf-list.component";
import { TurfDetailsComponent } from "./components/turf-details/turf-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TurfListComponent, TurfDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'turf-booking-app';
  user = 'Siddh';
}
