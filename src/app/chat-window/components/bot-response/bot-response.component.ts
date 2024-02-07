import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'bot-response',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './bot-response.component.html',
  styleUrl: './bot-response.component.css'
})
export class BotResponseComponent {
  resGPT: string = '';
  conversation: { role: string, content: string }[] = [];

  constructor (private dataService: ServicesService) {}

  ngOnInit(): void {
    this.dataService.submitEvent$.subscribe(() => {
      const lastMessage = this.dataService.getMessages();
      this.conversation = lastMessage
    });
  }
}

