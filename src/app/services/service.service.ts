import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { DataHandlerService } from '../data-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  httpClient: any;
  result:any;
  constructor( private http : HttpClient) { 

  }

  // weather_data(place:any){
  //    this.http.get( environment.baseurl ,{
  //   headers: new HttpHeaders()
  //   .set(environment.XRapidAPIHostName ,environment.XRapidAPIHostValue )
  //   .set(environment.XRapidAPIKeyName ,environment.XRapidAPIKeyValue),
  //   params : new HttpParams().set(place,'')
  //   })
  // }
  async new(place:any){
          const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+place;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '756e6b3f9fmsh75af314174d92a7p142ad9jsn9e828d56179d',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        this.result = await response.text();
        var obj = JSON.parse((this.result));
        //console.log(obj.cloud_pct,'hddhdhdh');
        DataHandlerService.weatherdata = obj;
        
      } catch (error) {
        console.error(error);
      }
  }


}
  
