import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { InputBarComponent } from '../components/input-bar/input.component';
import { BotIntroComponent } from '../components/bot-intro/bot-intro.component';
import { InputBubbleComponent } from '../components/input-bubble/input-bubble.component';
import { BotResponseComponent } from '../components/bot-response/bot-response.component';
import { NgFor } from '@angular/common';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-chat-view',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    InputBarComponent,
    BotIntroComponent,
    InputBubbleComponent,
    BotResponseComponent,
    NgFor],
  templateUrl: './chat-view.component.html',
  styleUrl: './chat-view.component.css',
  encapsulation : ViewEncapsulation.None,
})
export class ChatViewComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroll')
  private myScrollContainer!: ElementRef;

  constructor(public dataService: ServicesService) {}

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
      this.scrollToBottom();
  }

  scrollToBottom(): void {
      try {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch(err) { }
  }
}
