import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AllService } from './../all.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  try : string = '';
  headdata:Object ={} ;
  @Input() countryName:string ;
  constructor(private services:AllService,private httpObj:HttpClient) { 
  }
  ngOnInit(): void {
    
    console.log(this.headdata);
    this.getHead();

  }

  getHead()
  {
    let dates =this.services.getTodayDifference(1);
    this.alldata(dates).subscribe(
      m=>this.headdata['data']= m
    );

  }

  alldata(obj:any):Observable<any>
  {
    let url=`https://api.covid19api.com/country/${this.countryName}?from=${obj.last}&to=${obj.current}`;
    return this.httpObj.get<any>(url);
  }

}
