import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from "./login.service";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  providers: [ LoginService ]
})
export class LoginUserComponent implements OnInit {

  /**
   * Funcion que permite exponer los componentes a la  vista.
   */
  public myform : FormGroup;
  /**
   * La utilizó unicamente para detallar la info ingresada al 
   * formulario en formato json.
   */
  values : String;

  constructor(private fb: FormBuilder , private loginService : LoginService ) {  }

  ngOnInit() {

    this.myform = this.fb.group({
      user : ['', Validators.required],
      password : ['', Validators.required]
    });

    /*
    this.myform = new  FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    */
  }

  /**
   * función que permite realizar el login con el usuario.
   */
  login() {
    console.clear();
    console.debug("Valor del formulario...");
    this.values = JSON.stringify(this.myform.value);
    console.debug(this.values);
    let usuario : String;
    let contrasenia : String;
    usuario = this.myform.value.user;
    contrasenia = this.myform.value.password;
    if ( this.loginService.autenticaUsuario(usuario, contrasenia)) {
      alert(`Usuario ${usuario} autenticado.`);
    } else {
      alert(`Error al tratar de autenticar al ${usuario}.`);
    }
  }

}
