import { Component } from '@angular/core';
import { SessionAddFormComponent } from '../session-add-form/session-add-form.component';
import { FakeSessionItemServiceService } from "../../fake-session-item-service.service";
import { SessionItemListComponent } from "../session-item-list/session-item-list.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  providers: [FakeSessionItemServiceService],
  imports: [SessionAddFormComponent, SessionItemListComponent, RouterOutlet, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
