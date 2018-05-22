import { Injectable } from '@angular/core';
import AutocompletePrediction = google.maps.places.AutocompletePrediction;
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MapService {

  private autocompletePlacesUrl = 'maps.googleapis.com/maps/api/place/autocomplete/json?&key=YOUR_API_KEY';
  constructor(private http: HttpClient) { }

  getPlaces(searchInput: string): Observable<AutocompletePrediction[]> {
    return this.http.get<AutocompletePrediction[]>(this.autocompletePlacesUrl + '/input=' + searchInput);
  }


}
