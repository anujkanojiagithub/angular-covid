import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AllService {
  today = new Date();
  selectChanged = new Subject<string>();
  // yesterday = new Date(this._today.getTime()-1);
  constructor(private httpObj: HttpClient) {}
  getRecord(): Observable<any> {
    let url = 'https://api.covid19api.com/countries';
    return this.httpObj.get<any>(url);
  }

  getTodayDifference(days: number) {
    // days =days+1;
    this.today.setDate(this.today.getDate() - 1);
    console.log(this.today);
    var dataObj: any = {};
    var last = new Date(this.today.getTime() - days * 24 * 60 * 60 * 1000);
    dataObj.current = this.today.toISOString();
    dataObj.last = last.toISOString();

    return dataObj;
  }
}
