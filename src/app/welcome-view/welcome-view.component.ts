import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ChatViewComponent } from '../chat-window/pages/chat-view.component';

@Component({
  selector: 'app-welcome-view',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterOutlet, RouterLink],
  templateUrl: './welcome-view.component.html',
  styleUrl: './welcome-view.component.css',
})
export class WelcomeViewComponent {

  constructor(public dialog: MatDialog) {}

  onClick() {
    const dialogRef = this.dialog.open(ChatViewComponent, {
      height: '80%',
      width: '90%',
    });
  }
}
