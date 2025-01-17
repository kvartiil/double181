import { Component } from '@angular/core';
import { xtee } from '../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabel2-component',
  templateUrl: './tabel2.component.html',
  styleUrls: ['./tabel2.component.scss'],
  standalone: true
})
export class Tabel2Component {

liqpsect: number;  
liqnsect: number;
liqpsize: number;
liqnsize: number;
liqpcount: number;
liqncount: number;
aasta: string;
aastax: string;

  constructor() { 
    this.liqpsect = (xtee.LiqpSect)*100;
    this.liqnsect = xtee.Liq_n_Sect;
    this.liqpsize = Math.round((xtee.LiqpSize)*100*10)/10;
    this.liqnsize = xtee.Liq_n_Size;
    this.liqpcount = (xtee.LiqpCount)*100;
    this.liqncount = xtee.Liq_n_Count;
    this.aasta = xtee.prognAasta;
    this.aastax = this.aasta.replaceAll('"', "");
  }
  
  //Math.round(params.value * 10) / 10


}