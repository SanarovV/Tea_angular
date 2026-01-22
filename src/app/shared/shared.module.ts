import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TruncPipe} from "./pipes/trunc.pipe";
import {RouterModule} from "@angular/router";
import {PopupComponent} from "./components/popup/popup.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    PopupComponent,
    TruncPipe,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    PopupComponent,
    TruncPipe
  ]
})
export class SharedModule { }
