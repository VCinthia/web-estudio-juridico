import { Component, OnInit } from '@angular/core';
import list from '../../../../assets/json/list.json';


@Component({
  selector: 'app-abogados',
  templateUrl: './abogados.component.html',
  styleUrls: ['./abogados.component.css']
})
export class AbogadosComponent implements OnInit {
  abogados: any[] = [];
  contadores: any[] = [];
  psicologos: any[] = [];

  constructor() {
  }

  ngOnInit()/* : void */ {
      this.abogados = list.abogados;
      this.contadores = list.contadores;
      this.psicologos = list.psicologos;
  }
}
