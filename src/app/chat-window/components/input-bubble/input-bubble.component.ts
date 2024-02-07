import { Component } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'input-bubble',
  standalone: true,
  imports: [NgFor],
  templateUrl: './input-bubble.component.html',
  styleUrl: './input-bubble.component.css'
})

export class InputBubbleComponent {

  constructor(public servicesService: ServicesService) {}

  getMessages() {
    return this.servicesService.getMessages();
  }
}
