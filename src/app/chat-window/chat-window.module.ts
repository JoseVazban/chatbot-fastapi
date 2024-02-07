import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesService } from './services/services.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ChatWindowModule { }
