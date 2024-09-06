import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TurfService, Turf } from '../../services/turf.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-turf-details',
  standalone: true,
  templateUrl: './turf-details.component.html',
  styleUrls: ['./turf-details.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
})
export class TurfDetailsComponent implements OnInit {
  turf?: Turf;
  slotControl = new FormControl('', Validators.required);
  bookingSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private turfService: TurfService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const turfId = +this.route.snapshot.params['id'];
    this.turfService.getTurfById(turfId).subscribe(turf => {
      this.turf = turf;
    });
  }

  bookTurf(): void {
    if (this.turf && this.slotControl.valid) {
      const slot = this.slotControl.value as string;  // Safely assert the value as a string
      if (slot) {
        this.turfService.bookTurf(this.turf.id, slot).subscribe(success => {
          if (success) {
            this.bookingSuccess = true;
            setTimeout(() => this.router.navigate(['/']), 2000);
          }
        });
      }
    }
  }
}
