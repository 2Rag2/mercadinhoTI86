import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  valor:number=7;
  alimento:number=10;

  produtos:any[]=[];
  constructor() {}
  async salvar(){}
}
