import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Partida } from '../Entities/Partida';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequestsService {
    obj: Partida[];
    constructor(public http: HttpClient) { }

    public GetPartidas(): Observable<any>{
        return this.http.get<any>('https://localhost:44338/api/Pontuacao/getjogos');

    }




    public SetPartida(partida : Partida){
        let result = this.http.post('https://localhost:44338/api/Pontuacao/postjogos', '{"Pontos": '+ partida.pontos +', "Dia": "'+ partida.dia +'"}', {headers: {'Content-Type':'application/json; charset=utf-8'}});
        console.log(result);
        result.subscribe((res: any) => {
        console.log(res)
        }, (err) => console.log(err));



    }
}
