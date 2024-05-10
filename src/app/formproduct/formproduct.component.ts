import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formproduct',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './formproduct.component.html',
  styleUrl: './formproduct.component.css'
})
export class FormproductComponent {
  display(form: NgForm) {
    console.log(form.value);
  }
}
