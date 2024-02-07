import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private submitEvent = new Subject<void>();
  conversation: { role: string, content: string }[] = [];
  header = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": " "
  })

  constructor(private http: HttpClient) {}

  sendData(input: string) {
    this.conversation.push({ role: 'user', content: input });
  }

  getMessages() {
    return this.conversation;
  }

  submitEvent$ = this.submitEvent.asObservable();
  emitSubmitEvent() {
    this.submitEvent.next();
  }

  gptTest(message: string) {
    return this.http.post('https://api.openai.com/v1/chat/completions',
    {"model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": message}],
      "temperature": 0.7,
      "max_tokens": 1000,
    },
    {headers: this.header}
    ).pipe(
      tap((response: any) => {
        const botResponse = response?.choices?.[0]?.message?.content || '';
        this.conversation.push({ role: 'bot', content: botResponse });
      })
    );
  }
}
