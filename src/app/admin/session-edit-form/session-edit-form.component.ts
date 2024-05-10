import { Component } from '@angular/core';
import { Session } from "../session";
import { FakeSessionItemServiceService } from '../../fake-session-item-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-session-edit-form',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './session-edit-form.component.html',
  styleUrl: './session-edit-form.component.css'
})
export class SessionEditFormComponent {

  constructor(private route: ActivatedRoute, private fakeService: FakeSessionItemServiceService) {

  }

  tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Swift', 'Xamarin'];
  // session = new Session(1, 'Web', this.tracks[0], new Date('2021-12-09'), 10,
  //   'Tunis', 0, false);
  session: any;
  id: any;
  private sub: any;

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => { this.id = params['id']; })
    console.log('Session ID ' + this.id.toString());
    this.session = this.fakeService.getSession(this.id);
  }
  editSession(sessionItem: Session) {
    console.log(sessionItem);
  }
}
