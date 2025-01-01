import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f', {static: false}) registerForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  //  On submit click, reset field value
  onSubmit() {
      this.registerForm.reset();
  }
}
