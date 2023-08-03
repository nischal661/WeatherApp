import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';
import { DataHandlerService } from './data-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Data:any ={};
  temp:any;
  min_temp:any;
  max_temp:any;
  humidity:any;
  wind:any;
  CityName:any = 'Bengaluru';
  cloud:any;
  displayname:any;
  constructor(private service :ServiceService){
    this.displayname = this.CityName.toUpperCase();
    setTimeout(() => {
      this.Data = DataHandlerService.weatherdata;
     
      this.temp = this.Data.temp;
      this.wind = this.Data.wind_speed;
      this.min_temp = this.Data.min_temp;
      this.max_temp = this.Data.max_temp;
      this.humidity = this.Data.humidity;
      this.cloud = this.Data.cloud_pct;
       this.getweatherdata(this.CityName);
    }, 2000);
     
  }

  OnSubmit(){
   setTimeout(() => {
    this.Data = DataHandlerService.weatherdata;
   
    this.temp = this.Data.temp;
    this.wind = this.Data.wind_speed;
    this.min_temp = this.Data.min_temp;
    this.max_temp = this.Data.max_temp;
    this.humidity = this.Data.humidity;
     this.getweatherdata(this.CityName);
     this.displayname = this.CityName.toUpperCase();
  }, 2000);
  }

  ngOnInit(): void {
    this.getweatherdata(this.CityName);
    this.displayname = this.CityName.toUpperCase();
  } 
  
  getweatherdata(cityname:any){
    this.service.new(cityname);
    this.displayname = this.CityName.toUpperCase();
    
  }
}
  
