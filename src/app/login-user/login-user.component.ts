import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  myform : FormGroup;
  values : String;

  constructor() { }

  ngOnInit() {
    this.myform = new  FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    console.clear();
    console.debug("Valor del formulario...");
    this.values = JSON.stringify(this.myform.value);
    alert(this.values);
    console.debug(this.values);
  }

}
