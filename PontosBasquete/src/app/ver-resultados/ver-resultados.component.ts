import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../_services/requests.service'
import { ProcessarInfoService } from '../_services/processar-info.service'
import { Partida } from '../Entities/Partida';

@Component({
  selector: 'app-ver-resultados',
  templateUrl: './ver-resultados.component.html',
  styleUrls: ['./ver-resultados.component.css']
})
export class VerResultadosComponent implements OnInit {
  public Partidas: Partida[];
  public menorDia;
  public maiorDia;
  public jogosDisputados;
  public totalPontos = 0;
  public mediaPontos = 0;
  public maiorPontuacao;
  public menorPontuacao;
  public qtdeBateuRecorde = 0;


  constructor(public req: RequestsService, public proc: ProcessarInfoService) {

  }

  ngOnInit(): void {
      var teste = this.req.GetPartidas().subscribe(result => { this.PreencherDados(result.data); })
  }

  PreencherDados(partidas:Partida[]) {
      this.menorDia = this.proc.GetMenorDia(partidas);
      this.maiorDia = this.proc.GetMaiorDia(partidas);
      this.jogosDisputados = this.proc.GetNumJogosDisputados(partidas);
      this.totalPontos = this.proc.GetTotalPontos(partidas);
      this.mediaPontos = this.proc.GetMediaPontos(partidas);
      this.maiorPontuacao = this.proc.GetMaiorPontuacao(partidas);
      this.menorPontuacao = this.proc.GetMenorPontuacao(partidas);
      this.qtdeBateuRecorde = this.proc.GetQtdBateuRecorde(partidas);
      console.log(this.Partidas)
  }

}
