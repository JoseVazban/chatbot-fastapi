import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'input-bar',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputBarComponent {

  userMessage: string = '';

  constructor(public dataService: ServicesService) {}

  onSubmit(userMessage: string) {
    this.dataService.sendData(userMessage);
    this.dataService.gptTest(userMessage).subscribe((res: any) => {
      console.log('Respuesta de API:', res);
      this.dataService.emitSubmitEvent();
    });
  }
}
