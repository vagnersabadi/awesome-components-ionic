import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card-ui',
  templateUrl: './list-card-ui.page.html',
  styleUrls: ['./list-card-ui.page.scss'],
})
export class ListCardUiPage implements OnInit {
  menu:string = 'bolos';

  bolos:any;
  doces:any;
  tortas:any;
  salgados:any;
  encomendas:any;
  bebidas:any;

  constructor() {

    
    this.bolos = [
      {preco:"25,00",nome:"Bolo Fofo de Especiarias",imagemUrl:"./assets/yannbf/img/listscards/bolo01.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"22,00",nome:"Bolo de Rolo",imagemUrl:"./assets/yannbf/img/listscards/bolo02.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"20,00",nome:"Bolo Fofo de Limão",imagemUrl:"./assets/yannbf/img/listscards/bolo03.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"23,00",nome:"Bolo Fofo de Especiarias",imagemUrl:"./assets/yannbf/img/listscards/bolo04.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"30,00",nome:"Bolo Fofo de Fubar com Goiaba",imagemUrl:"./assets/yannbf/img/listscards/bolo05.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
    ];

    this.doces = [
      {preco:"30,00",nome:"Chessescake com frutas vermelhas",imagemUrl:"./assets/yannbf/img/listscards/doce01.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"33,00",nome:"Mousse de Chocolate com Frutas Vermelhas",imagemUrl:"./assets/yannbf/img/listscards/doce02.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"39,00",nome:"Bolo Fofo de Limão",imagemUrl:"./assets/yannbf/img/listscards/bolo03.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"43,00",nome:"Bolo Fofo de Especiarias",imagemUrl:"./assets/yannbf/img/listscards/bolo04.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"31,60",nome:"Bolo Fofo de Fubar com Goiaba",imagemUrl:"./assets/yannbf/img/listscards/bolo05.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
    ];

    this.salgados = [
      {preco:"12,50",nome:"TORTINHA DE PALMITO 140 GRAMAS",imagemUrl:"./assets/yannbf/img/listscards/salgado01.jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"33,50",nome:"TORTINHA DE FRANGO 140 GRAMAS",imagemUrl:"./assets/yannbf/img/listscards/salgado02.jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"88,50",nome:"QUICHE 3 QUEIJOS",imagemUrl:"./assets/yannbf/img/listscards/salgado03.jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"55,50",nome:"QUICHE DE ALHO PORÓ",imagemUrl:"./assets/yannbf/img/listscards/salgado01.jpg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
    ];

    this.tortas = [
      {preco:"43,00",nome:"Torta de Maçã com Crumbe de Canela",imagemUrl:"./assets/yannbf/img/listscards/torta01.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"45,00",nome:"Torta de Morango",imagemUrl:"./assets/yannbf/img/listscards/torta02.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"41,00",nome:"Torta de Chocolate com Menta",imagemUrl:"./assets/yannbf/img/listscards/torta03.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
      {preco:"43,00",nome:"Torta de Limão",imagemUrl:"./assets/yannbf/img/listscards/torta04.jpeg",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
    ];

   }

  ngOnInit() {
  }

}
