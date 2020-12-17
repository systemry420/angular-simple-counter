import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0
  buttons = [
    {
      text: '-',
      color: 'red'
    },
    {
      text: '0',
      color: 'lightgray'
    },
    {
      text: '+',
      color: 'green'
    },
  ]

  getColor(count) {
    return count > 0? 'green': count < 0? 'red': 'black'
  }

  setCount(ev) {
    // console.log(this.count, ev, typeof ev);

    switch (ev) {
      case '+':
        this.count += 1
        break;
      case '0':
        this.count = 0
        break;
      case '-':
        this.count = this.count - 1
        break;

      default:
        break;
    }

  }
}
