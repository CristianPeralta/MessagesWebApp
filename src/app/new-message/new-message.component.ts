import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  message = {
    user: 'John',
    text: ''
  };

  constructor() { }

  ngOnInit() {
  }
  post() {
    console.log(this.message);
  }

}
