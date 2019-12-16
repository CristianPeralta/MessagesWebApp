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
      user: {
        username: 'Albert',
        photo: 'https://picsum.photos/id/45/200/200',
        country: 'Australia'
      },
      text: 'This is a message'
    },
    {
      id: 1,
      user: {
        username: 'Rous',
        photo: 'https://picsum.photos/id/15/200/200',
        country: 'Swaziland'
      },
      text: 'Hello guys'
    },
    {
      id: 2,
      user: {
        username: 'Luka',
        photo: 'https://picsum.photos/id/87/200/200',
        country: 'Kenya'
      },
      text: 'Hi, I\'m Luka'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
