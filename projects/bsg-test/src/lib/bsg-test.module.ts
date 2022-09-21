import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsgTestComponent } from './bsg-test.component';
import { ButtonComponent } from './button/button.component';
import { MsgInfoComponent } from './msg-info/msg-info.component';

@NgModule({
  declarations: [
    BsgTestComponent,
    ButtonComponent,
    MsgInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BsgTestComponent,
    ButtonComponent,
    MsgInfoComponent
  ]
})
export class BsgTestModule { }
