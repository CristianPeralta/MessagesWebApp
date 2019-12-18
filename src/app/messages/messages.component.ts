import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/messages/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: any = [];
  constructor(
    private messageService: MessageService,
  ) { }

  async ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    return this.messageService.getMessages().subscribe((data) => {
      this.messages = data;
    });
  }
}
