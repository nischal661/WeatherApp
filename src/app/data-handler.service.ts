import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  public static weatherdata: any;
  public static temp: any;

  constructor() { }
}
