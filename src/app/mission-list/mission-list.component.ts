import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../service/spacex.service';
import { CommonModule } from '@angular/common'; 
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';
import { Mission } from '../models/mission'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-missionlist',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css'],
  imports: [CommonModule, MissionfilterComponent, MissiondetailsComponent,MatButtonModule,
    MatCardModule,
    MatDialogModule, ]
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];
  showFilter: boolean = false; // Controls visibility of mission filter
  selectedMission: any = null;
  constructor(private spacexService: SpacexService,  private dialog: MatDialog) {}

  ngOnInit() {
    this.fetchAllMissions();
  }

  fetchAllMissions() {
    this.spacexService.getAllMissions().subscribe(data => {
      this.missions = data;
    });
  }

  // Handle filtered missions
  onMissionsFiltered(filteredMissions: any[]) {
    this.missions = filteredMissions;
  }

  // Toggle mission filter visibility
  toggleFilter() {
    this.showFilter = !this.showFilter;
  }
  // Open mission details in a dialog
  // Open mission details in a dialog
  showMissionDetails(flightNumber: number): void {
    this.spacexService.getMissionByFlightNumber(flightNumber).subscribe(
      (missionData) => {
        this.dialog.open(MissiondetailsComponent, {
          width: '600px',
          data: missionData, // Pass mission data to the dialog
        });
      },
      (error) => {
        console.error('Error fetching mission details:', error);
      }
    );
  }
  
  
}