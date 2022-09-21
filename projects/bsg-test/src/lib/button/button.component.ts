import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bsg-test-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnColor:string = '';
  @Input() minWidth: string = 'auto';
  @Input() btnText: string = '';
  @Input() disabled: boolean = false;
  @Output() onAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitAction(){
    this.onAction.emit();
  }

}
