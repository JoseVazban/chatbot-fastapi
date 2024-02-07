import { Routes } from '@angular/router';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { ChatViewComponent } from './chat-window/pages/chat-view.component';

export const routes: Routes = [

  {path: '', component: WelcomeViewComponent},
  {path: 'chat', component: ChatViewComponent},

];
