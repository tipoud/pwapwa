import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MapsAPILoader} from '@agm/core';
import {} from 'googlemaps';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: 'app-geoloc',
  templateUrl: './geoloc.component.html',
  styleUrls: ['./geoloc.component.scss']
})
export class GeolocComponent implements OnInit {
  title = 'Geoloc'
  lat = 51.678418;
  lng = 7.809007;
  isLoaderHidden = true;
  public searchControl: FormControl;

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  @ViewChild('search')
  public searchElementRef: ElementRef;


  ngOnInit() {
    this.searchControl = new FormControl();

    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: PlaceResult = autocomplete.getPlace();
          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
        });
      });
    });
  }

  toMyPosition() {
    if (navigator.geolocation) {
      this.isLoaderHidden = false;

      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.isLoaderHidden = true;
      }, _ => {
        this.isLoaderHidden = true;
      }
    );
    }
  }
}
