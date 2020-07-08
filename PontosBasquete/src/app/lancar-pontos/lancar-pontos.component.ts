import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RequestsService } from '../_services/requests.service'
import { Partida } from '../Entities/Partida';

@Component({
  selector: 'app-lancar-pontos',
  templateUrl: './lancar-pontos.component.html',
  styleUrls: ['./lancar-pontos.component.css']
})
export class LancarPontosComponent implements OnInit {
  constructor(public req: RequestsService) { }

  @ViewChild('Data') Data: ElementRef;
  @ViewChild('Pontos') Pontos: ElementRef;
  
  sendPontos(){
      let part: Partida = new Partida();
      part.ID = 0;
      part.Dia = this.Data.nativeElement.value;
      part.Pontos = this.Pontos.nativeElement.value;
      try {
          this.req.SetPartida(part);
      } catch (error) {
          console.log("DEU RUIM: " + error);
      }
  }

  ngOnInit(): void {
      
  }

  

}
