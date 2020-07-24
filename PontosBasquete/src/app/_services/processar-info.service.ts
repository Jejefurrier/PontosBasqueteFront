import { Injectable } from '@angular/core';
import { Partida } from '../Entities/Partida';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ProcessarInfoService {

    constructor() { }

    public GetMenorDia(partidas: Partida[]): string{
        try{
            //testes
            var a = this.dataAtualFormatada(new Date(partidas[0].dia)).getTime();
            var b = this.dataAtualFormatada(new Date('2020-07-23')).getTime();
            //endtestes
            let menor = this.dataAtualFormatada(new Date(partidas[0].dia));
            partidas.forEach(element => {
                if (menor.getTime() > this.dataAtualFormatada(new Date(element.dia)).getTime()) {
                    menor = this.dataAtualFormatada(new Date(element.dia));
                }
            });
            return menor.toLocaleDateString('pt-BR');
        }catch (erro){
            alert(erro);
        }
    }

    public GetMaiorDia(partidas: Partida[]): string{
        try{
            let maior = this.dataAtualFormatada(new Date(partidas[0].dia));
            partidas.forEach(element => {
                if (maior.getTime() < this.dataAtualFormatada(new Date(element.dia)).getTime()) {
                    maior = this.dataAtualFormatada(new Date(element.dia));
                }
            });
            return maior.toLocaleDateString('pt-BR');
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
            pontos = pontos + element.pontos;
        });
        return pontos;
    }

    public GetMediaPontos(partidas: Partida[]): number{
        return this.GetTotalPontos(partidas) / this.GetNumJogosDisputados(partidas);
    }

    public GetMenorPontuacao(partidas : Partida[]): number{
        let menor = partidas[0].pontos;
        partidas.forEach(element => {
            if(menor > element.pontos)
                menor = element.pontos;
        });
        return menor;
    }

    public GetMaiorPontuacao(partidas : Partida[]): number{
        let maior = partidas[0].pontos;
        partidas.forEach(element => {
            if(maior < element.pontos)
                maior = element.pontos;
        });
        return maior;
    }

    public GetQtdBateuRecorde(partidas : Partida[]): number{
        let maior = partidas[0].pontos;
        let qtd = 0;
        partidas.forEach(element => {
            if(element.pontos > maior){
                maior = element.pontos;
                qtd = qtd + 1;
            }
        });
        return qtd;
    }

    dataAtualFormatada(data){
        return moment(data, "DD/MM/YYYY").toDate();
    }



}
