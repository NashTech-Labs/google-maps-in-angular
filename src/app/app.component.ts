import { Component, ViewChild } from '@angular/core';
import { MapAnchorPoint, MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maps-in-angular';
  @ViewChild(MapInfoWindow) markerWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
      lat: 23,
      lng: 81
  };
  markers: google.maps.LatLngLiteral[] = [
    {
		  lat: 28.679079,
		  lng: 77.069710,
	  },
	  {
		  lat: 	30.525005,
		  lng: 75.890121,
	  },
    {
      lat: 24.794500,
      lng: 73.055000,
    },
    {
      lat: 26.850000,
      lng: 80.949997,
    }
  ];
  zoom = 5;
  
  openMarkerWindow(marker: MapAnchorPoint) {
      if (this.markerWindow != undefined){
        this.markerWindow.open(marker);
      }
  }
}
