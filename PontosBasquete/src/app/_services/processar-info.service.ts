import { Injectable } from '@angular/core';
import { Partida } from '../Entities/Partida';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ProcessarInfoService {

    constructor() { }

    public GetMenorDia(partidas : Partida[]): string{
        try{
            let menor = this.dataAtualFormatada(partidas[0].Dia)
            partidas.forEach(element => {
                if(menor.getTime() > this.dataAtualFormatada(element.Dia).getTime())
                menor = this.dataAtualFormatada(element.Dia);
            });
            return menor.toLocaleDateString("pt-BR");
        }catch(erro){
            alert(erro)
        }
    }

    public GetMaiorDia(partidas : Partida[]): string{
        try{
            let maior = this.dataAtualFormatada(partidas[0].Dia)
            partidas.forEach(element => {
                if(maior.getTime() < this.dataAtualFormatada(element.Dia).getTime())
                maior = this.dataAtualFormatada(element.Dia);
            });
            return maior.toLocaleDateString("pt-BR");
        }catch(erro){
            alert(erro)
        }
    }

    public GetNumJogosDisputados(partidas : Partida[]): number{
        return partidas.length;
    }

    public GetTotalPontos(partidas : Partida[]): number{
        let pontos = 0;
        partidas.forEach(element => {
            pontos = pontos + element.Pontos;
        });
        return pontos;
    }

    public GetMediaPontos(partidas: Partida[]): number{
        return this.GetTotalPontos(partidas) / this.GetNumJogosDisputados(partidas);
    }

    public GetMenorPontuacao(partidas : Partida[]): number{
        let menor = partidas[0].Pontos;
        partidas.forEach(element => {
            if(menor > element.Pontos)
                menor = element.Pontos;
        });
        return menor;
    }

    public GetMaiorPontuacao(partidas : Partida[]): number{
        let maior = partidas[0].Pontos;
        partidas.forEach(element => {
            if(maior < element.Pontos)
                maior = element.Pontos;
        });
        return maior;
    }

    public GetQtdBateuRecorde(partidas : Partida[]): number{
        let maior = partidas[0].Pontos;
        let qtd = 0;
        partidas.forEach(element => {
            if(element.Pontos > maior){
                maior = element.Pontos;
                qtd = qtd + 1;
            }
        });
        return qtd;
    }

    dataAtualFormatada(data){
        return moment(data, "DD/MM/YYYY").toDate();
    }



}
