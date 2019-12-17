import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages = [];
  constructor(
    private messageService: MessageService,
  ) { }

  async ngOnInit() {
    const messagesResponse = await this.messageService.getMessages();
    this.messages = messagesResponse;
  }
}
