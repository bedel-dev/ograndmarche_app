import { Component, Input, OnInit } from '@angular/core';
import shoppost from '../../../data/shop.json'
import { ProduitService } from '../../../services/produits/produit.service';
import { GlobalConstants } from 'src/app/common/global-constants';
import { Prodruit } from 'src/app/data/prodruits';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-dealslider',
  templateUrl: './dealslider.component.html',
  styleUrls: ['./dealslider.component.css']
})
export class DealsliderComponent implements OnInit {
  @Input() item = '';
  public imagurl  = GlobalConstants.host+"/img/produit_image"
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(public produitService:ProduitService,private navigate:Router) { }
  public shopbox: { img: string }[] = shoppost;
  dealsConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots d-flex",
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  ngOnInit(): void {
    this.getProductRecent();
    
  }
  public allproductionconso:any[]=[]
  public  produits: Prodruit;

  // get recente product
  getProductRecent(){
    this.produitService.GetAllProduit().subscribe((res : Prodruit)=>{
    this.produits = res;
    this.produits.data.forEach(element => {
       if(element['typeVente'] === this.item){

        if( element.description.toString().includes("<=:=>")){
          var splitdescription =  element.description.toString().split("<=:=>");
          element.description = splitdescription[0]
          element.label = splitdescription[1]
          console.log("itemr :",splitdescription)
        }
        this.allproductionconso.push(element);
        console.log("allproductionconso :",this.allproductionconso)
       }
      });
    });
    console.log("item____  :",this.item)
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
