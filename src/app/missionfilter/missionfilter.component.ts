import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpacexService } from '../service/spacex.service';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
  imports: [FormsModule]
})
export class MissionfilterComponent {
searchYear: string = ''; // Stores user input
  missions: any[] = []; // Stores filtered missions

  @Output() missionsFiltered = new EventEmitter<any[]>(); // Emit filtered missions

  constructor(private spacexService: SpacexService) {}

  // Fetch filtered missions based on year
  filterMissions() {
    if (this.searchYear) {
      this.spacexService.getMissionsByYear(this.searchYear).subscribe(data => {
        this.missions = data;
        this.missionsFiltered.emit(this.missions); // Emit to parent component
      });
    }
  }
}
