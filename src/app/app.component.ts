import { Component } from '@angular/core';
import { Message } from '@app/models';
//import * as p5 from 'p5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Hi names Lisa the Listening Agent, whats yours?', 'assets/images/bot.png', new Date()),
      new Message('I am a friendly conversational agent, I provide an anonymous listening post for you to interact with if you need someone to talk to', 'assets/images/bot.png', new Date()),
      new Message('To do this I use IBM Watson™ tone analyser to better understand the tone of the conversation with the individual', 'assets/images/bot.png', new Date()),
      new Message('Bare with me when conversing as I am currently in beta mode so some interactions maybe not be in my databank', 'assets/images/bot.png', new Date())
    ];
  }
}
