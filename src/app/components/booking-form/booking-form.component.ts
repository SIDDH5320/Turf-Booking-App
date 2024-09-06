import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { TurfService } from '../../services/turf.service';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule
  ]
})
export class BookingFormComponent implements OnInit {
  bookingForm!: FormGroup;
availableSlots: any;

  constructor(private turfService: TurfService) {}

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      slot: new FormControl('', [Validators.required]),
      // Add more controls if needed
    });
  }

  get slot() {
    return this.bookingForm.get('slot');
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      // Handle form submission
    }
  }
}
