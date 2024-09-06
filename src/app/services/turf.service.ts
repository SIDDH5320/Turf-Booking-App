import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Turf {
  id: number;
  name: string;
  location: string;
  pricePerHour: number;
  availableSlots: string[];
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class TurfService {
  private turfs: Turf[] = [
    {
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

  getTurfs(): Observable<Turf[]> {
    return of(this.turfs);
  }

  getTurfById(id: number): Observable<Turf | undefined> {
    return of(this.turfs.find(turf => turf.id === id));
  }

  bookTurf(id: number, slot: string): Observable<boolean> {
    const turf = this.turfs.find(t => t.id === id);
    if (turf && turf.availableSlots.includes(slot)) {
      turf.availableSlots = turf.availableSlots.filter(s => s !== slot);
      return of(true);
    }
    return of(false);
  }
}
