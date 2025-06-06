import { Component } from '@angular/core';
import { AiChatService } from '../../services/ai-chat.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.html',
  styleUrls: ['./chat-bot.css']
})
export class ChatBotComponent {
  userInput = '';
  messages: { text: string, isUser: boolean }[] = [];

  constructor(private aiService: AiChatService) {}

  sendMessage(): void {
    if (!this.userInput.trim()) return;

    const input = this.userInput;
    this.messages.push({ text: input, isUser: true });
    this.userInput = '';

    this.aiService.generateResponse(input).subscribe({
      next: (res) => {
        const output = res[0]?.generated_text || 'No response.';
        this.messages.push({ text: output, isUser: false });
      },
      error: () => {
        this.messages.push({ text: '⚠️ Error contacting AI.', isUser: false });
      }
    });
  }
}
