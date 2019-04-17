import { Component, OnInit } from '@angular/core';
import { SenhaService } from '../senha.service';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.css']
})
export class SenhaComponent implements OnInit {

  msg = {};
  senha = {};

  constructor(private senhaService: SenhaService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.senhaService.teste()
      .subscribe(resposta => this.msg = <any> resposta)
  }

  validarSenha() {
    this.senhaService.validarSenha(this.senha)
      .subscribe(resposta => this.senha = <any> resposta)
  }
}
