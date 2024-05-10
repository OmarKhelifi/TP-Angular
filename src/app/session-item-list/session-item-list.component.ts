import { Component } from '@angular/core';
import { SessionItemComponent } from '../session-item/session-item.component';
import { NgClass, NgFor } from '@angular/common';
import { SESSIONITEMS, Session } from "../admin/session";
import { FakeSessionItemServiceService } from '../fake-session-item-service.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-session-item-list',
  standalone: true,
  imports: [SessionItemComponent, NgFor, NgClass, RouterLink, RouterLinkActive],
  templateUrl: './session-item-list.component.html',
  styleUrl: './session-item-list.component.css'
})
export class SessionItemListComponent {

  constructor(private fakeService: FakeSessionItemServiceService) {

  }

  sessionItems: Session[] = [];

  ngOnInit(): void {
    this.getSessions()
  }

  getSessions() {
    this.sessionItems = this.fakeService.get()
  }

  // getTotalParticipants(): number {
  //   console.log(this.sessionItems.reduce((total, session) => total + session.participants, 0));
  //   return this.sessionItems.reduce((total, session) => total + session.participants, 0);
  // }


}
