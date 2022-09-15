import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bsg-btn-button',
  template: `
    <button type="button">My Button Test</button>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
