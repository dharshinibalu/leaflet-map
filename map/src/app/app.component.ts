import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // map location 
    var map = new L.Map('map').setView([13.0827, 80.27079], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: environment.mapbox.accessToken
}).addTo(map);
  // Polygons and Markers
   // location pointer
   var chennai = L.marker([13.0827, 80.27079]).addTo(map); // chennai
   var tharamani = L.marker([12.9863, 80.2432]).addTo(map); // tharamani
   var Velachery = L.marker([12.9815, 80.218]).addTo(map); // Velachery
   var Guindy = L.marker([13.0067, 80.2206]).addTo(map); //Guindy
   var thiruvanmayur = L.marker([12.983, 80.2594]).addTo(map); // thiruvanmayur
   var cities = L.layerGroup([
     chennai,
     tharamani,
     Velachery,
     Guindy,
     thiruvanmayur,
   ]);

// polygons
var polygon = L.polygon([
  [12.9815, 80.2180],
  [12.9349,80.2137],
  [12.9249,80.1000]
]).addTo(map);
 // circle
 var circle = L.circle([12.9815, 80.2180], {
  color: 'green',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

  }
   title = 'map';
}
