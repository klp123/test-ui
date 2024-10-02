import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { SharedService } from '../../service/shared.service';
declare var google: any; 

@Component({
  selector: 'app-google-location',
  templateUrl: './google-location.component.html',
  styles: [],
  standalone: true
})
export class GoogleLocationComponent implements OnInit {
  @ViewChild('mapContainer', { static: false }) mapElement!: ElementRef;
  @ViewChild('searchBox', { static: false }) searchBoxElement!: ElementRef;
  map!: google.maps.Map;
  searchBox!: google.maps.places.SearchBox;

  constructor(private sharedSvc: SharedService) {}

  ngOnInit(): void {
    this.sharedSvc.loadGoogleMaps().then(() => {
      this.initializeMap();
    }).catch((error: any) => {
      console.error('Error loading Google Maps API:', error);
    });
  }

  initializeMap(): void {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 40.712776, lng: -74.005974 }, // Default to NYC
      zoom: 12,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // Initialize the Search Box
    this.searchBox = new google.maps.places.SearchBox(this.searchBoxElement.nativeElement);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.searchBoxElement.nativeElement);

    // Listen for place changes
    this.searchBox.addListener('places_changed', () => {
      const places = this.searchBox.getPlaces();
      if (!places || places.length === 0) return;

      const bounds = new google.maps.LatLngBounds();

      places.forEach((place: any) => {
        if (!place.geometry || !place.geometry.location) return;
        bounds.extend(place.geometry.location);
      });

      this.map.fitBounds(bounds);
    });
  }
}