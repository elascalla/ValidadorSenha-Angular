import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Senha } from './senha.model';

@Injectable({
  providedIn: 'root'
})
export class SenhaService {

  apiUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  teste() {
    return this.httpClient.get(this.apiUrl);
  }
  
  validarSenha(senha: any) {
    return this.httpClient.post(this.apiUrl, senha);
  }
}
