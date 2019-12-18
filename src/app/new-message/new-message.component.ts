import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  owner = 'John';

  constructor() { }

  ngOnInit() {
  }
  post() {
    console.log('New message');
  }

}
