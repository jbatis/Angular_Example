import { Injectable } from "@angular/core";

/**
 * Servicio para la autenticación del usuario.
 */
@Injectable()
export class LoginService {

    /**
     * Funcion que permite realizar la validacion de la autenticacion 
     * NOTA: Por el momento solo es de modo prueba
     * @param user nombre de usuario
     * @param password contraseña del usuario
     */
    autenticaUsuario(user, password) {
        //solo valida si el usuario y el pass es igual.
        return user === password ? true : false;
    }

}

