import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages = [
    {
      id: 0,
      username: 'Albert',
      text: 'This is a message',
    },
    {
      id: 1,
      username: 'Rous',
      text: 'Hello guys',
    },
    {
      id: 2,
      username: 'Luka',
      text: 'Hi, I\'m Luka',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
