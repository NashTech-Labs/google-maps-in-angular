import { Component } from '@angular/core';

interface MapMarker {
	latitude: number;
	longitude: number;
	label: string;
  place: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maps-in-angular';
  zoom: number = 5;
  centerLatitude: number = 23.173939;
  centerLongitude: number = 81.565125;
  markers: MapMarker[] = [
	  {
		  latitude: 28.679079,
		  longitude: 77.069710,
		  label: 'DL',
      place: 'Delhi'
	  },
	  {
		  latitude: 	30.525005,
		  longitude: 75.890121,
		  label: 'PB',
      place: 'Punjab'
	  },
	  {
		  latitude: 24.794500,
		  longitude: 73.055000,
		  label: 'RJ',
      place: 'Rajasthan'
	  },
    {
      latitude: 26.850000,
      longitude: 80.949997,
      label: 'LW',
      place: 'Lucknow'
    }
  ]
}
