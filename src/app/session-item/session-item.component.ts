import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-session-item',
  standalone: true,
  imports: [NgStyle, NgIf, CommonModule],
  templateUrl: './session-item.component.html',
  styleUrl: './session-item.component.css'
})
export class SessionItemComponent {
  @Input() name!: String
  @Input() FIRSTSESSION!: any
  @Input() isCompleted: boolean = false;

  color: String = "red"

  @Output()
  filsevent = new EventEmitter();
  event() {
    // this.FIRSTSESSION.isCompleted = true;
    this.FIRSTSESSION.participants++
    console.log("Nouvelle Inscription");
    console.log(this.FIRSTSESSION.participants + " Participants");
  }
  sessionType!: String
  ngOnInit() {
    console.log('Session Type:', this.FIRSTSESSION.name);
    this.sessionType = this.FIRSTSESSION.name.toLowerCase() === 'web' ? 'web' : 'mobile';
  }

}
