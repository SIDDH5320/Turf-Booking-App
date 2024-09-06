import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurfService, Turf } from '../../services/turf.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turf-list',
  standalone: true,
  templateUrl: './turf-list.component.html',
  styleUrls: ['./turf-list.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule]
})
export class TurfListComponent implements OnInit {
  turfs: Turf[] = [ {
    id: 1,
    name: 'GreenField Turf',
    location: 'Downtown City',
    pricePerHour: 1500,
    availableSlots: ['9:00 AM - 10:00 AM', '4:00 PM - 5:00 PM'],
    imageUrl: 'https://images.unsplash.com/photo-1473075109809-7a17d327bdf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHR1cmZ8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 2,
    name: 'Sunny Sports ',
    location: 'Suburb Area',
    pricePerHour: 1200,
    availableSlots: ['10:00 AM - 11:00 AM', '3:00 PM - 4:00 PM'],
    imageUrl: 'https://images.unsplash.com/photo-1495143881214-47a7d7f2e7fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHR1cmZ8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 3,
    name: 'Siddh Arena ',
    location: ' Greater Ahmedabad Area',
    pricePerHour: 1000,
    availableSlots: ['10:00 AM - 11:00 AM'],
    imageUrl: 'https://images.unsplash.com/photo-1495143881214-47a7d7f2e7fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHR1cmZ8ZW58MHx8MHx8fDA%3D',
  }

];
selectedTurf: any;
selectedSlots : string ='';

onselectTurf(turfData:any){
this.selectedTurf = turfData;
if(this.selectedTurf.availableSlots.length==1){
  this.selectedSlots = this.selectedTurf.availableSlots[0];
}
}
selectSlot(availableSlots: string){
this.selectedSlots = availableSlots;

}




  constructor(private turfService: TurfService, private router: Router) {}

  ngOnInit(): void {
    this.turfService.getTurfs().subscribe(turfs => {
      this.turfs = turfs;
      console.log(this.turfs);
    });
  }

  bookTurf(turfId: number) {
    this.router.navigate(['/book', turfId]);
  }
}
