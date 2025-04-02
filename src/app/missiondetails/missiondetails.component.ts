import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  
  constructor(
    public dialogRef: MatDialogRef<MissiondetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public mission: any
  ) {}

  close() {
    this.dialogRef.close();
  }
}
