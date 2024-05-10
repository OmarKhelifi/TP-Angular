import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FakeSessionItemServiceService } from "../../fake-session-item-service.service";

@Component({
  selector: 'app-session-add-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './session-add-form.component.html',
  styleUrl: './session-add-form.component.css'
})
export class SessionAddFormComponent {

  constructor(private fakesessionitemservice: FakeSessionItemServiceService) { }
  dispaly(f: NgForm) {
    console.log(f.value);
  }
  addSessionItem(f: NgForm) {
    this.fakesessionitemservice.add(f.value)
    for (let i = 0; i < this.fakesessionitemservice.get().length; i++) {
      console.log("TEST DISPLAY DATA" + this.fakesessionitemservice.get()[i].name);
    }
    console.log("TEST Add");
  }
}
