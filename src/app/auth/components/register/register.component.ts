import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() onPost: EventEmitter<User> = new EventEmitter();
  username: string;
  password: string;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const newUser = {
      username: this.username,
      password: this.password,
    };
    console.log(this.username);
    this.onPost.emit(newUser);

    this.username = '';
    this.password = '';
  }
}
