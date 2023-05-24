import { RouterLink } from '@angular/router';
import { HousingLocation } from './../housing-location';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
