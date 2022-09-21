import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bsg-test-bsg-test',
  template: `
    <p>
    <button type="button">{{buttonName}}</button>
    </p>
  `,
  styles: [
  ]
})
export class BsgTestComponent implements OnInit {

  @Input() buttonName = "";
  constructor() { }

  ngOnInit(): void {
  }

}
