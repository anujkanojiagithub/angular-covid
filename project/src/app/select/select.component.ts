import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AllService } from '../all.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  alldata: Object = {};
  days: number = 7;
  slug = 'india';

  constructor(private all: AllService) {}

  ngOnInit(): void {
    this.all.getRecord().subscribe((m) => (this.alldata['data'] = m));
    console.log(this.alldata);
  }

  onchange() {
    this.all.selectChanged.next(this.slug);
  }
}
