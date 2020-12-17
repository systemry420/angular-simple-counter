import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() public text;
  @Input() public bg;

  @Output() public buttonEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  setCount(ev) {
    this.buttonEvent.emit(ev.target.innerText)
  }

}
