import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SessionItemComponent } from "./session-item/session-item.component";
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { FormproductComponent } from './formproduct/formproduct.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SessionItemComponent, SessionItemListComponent, FormproductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP5';

  nameParent: String = "Formation Web"

  firstSession = {
    id: 1,
    name: "Formation Web",
    track: "MEAN Stack",
    date: new Date('2018-06-13'),
    duree: 3,
    local: "Lyon",
    participants: 0
  }
}
