import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MissionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101419226_lab_test2_comp3133';
}
