import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bsg-test-msg-info',
  templateUrl: './msg-info.component.html',
  styleUrls: ['./msg-info.component.scss']
})
export class MsgInfoComponent implements OnInit {

  @Input() isXSmall: boolean = false;
  @Input() title: string = "";
  @Input() content: string = "";
  @Input() type: string = "";
  @Input() showClose: boolean = false;
  alertVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  cerrar(){
    this.alertVisible = false;
  }

}
