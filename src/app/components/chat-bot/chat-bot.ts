import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.html',
  styleUrls: ['./chat-bot.css']
})
export class ChatBotComponent {
  userInput = '';
  messages: { text: string, isUser: boolean }[] = [];

  sendMessage(): void {
    if (!this.userInput.trim()) return;

    this.messages.push({ text: this.userInput, isUser: true });

    // TODO: Replace with actual backend call
    setTimeout(() => {
      this.messages.push({ text: 'Mock response from AI', isUser: false });
    }, 500);

    this.userInput = '';
  }
}
