import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../shared/messages/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  @Output() onPosted = new EventEmitter();
  constructor(private messageService: MessageService) { }

  message = {
    user: {
      username: 'Luka',
      photo: 'https://picsum.photos/id/87/200/200',
      country: 'Kenya'
    },
    text: ''
  };

  ngOnInit() {
  }
  post() {
    this.messageService.postMessage(this.message).subscribe((data) => {
      this.onPosted.emit(data);
    });
  }

}
