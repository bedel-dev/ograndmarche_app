import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import shoppost from '../../../../data/shop.json';
import blogcategory from '../../../../data/blogcategory.json';
import blogtags from '../../../../data/blogtags.json';
import { ProduitService } from '../../../../services/produits/produit.service';
import { PanierService } from '../../../../services/paniers/panier.service';

import { GlobalConstants } from 'src/app/common/global-constants';
import { Prodruit } from 'src/app/data/prodruits';
import Swal from 'sweetalert2';
import { Categorie } from 'src/app/data/categerie';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute,private navigate:Router ,public produitService:ProduitService,public panierService:PanierService) { }
  public shopbox: any = {};
  public tags: { title: string, id: number }[] = blogtags;
  public category: { title: string, id: number }[] = blogcategory;
  public imagurl  = GlobalConstants.host+"img/produit_image"


  public montantcommande:number=1;
  currentItem = 'init';
  public allcategorie:any[] = [];
  public setProduct(id: any) {
    this.produitService.GetAllcategorie().subscribe((res:Categorie)=>{
      res.data.forEach(elements=>{
        this.allcategorie.push(elements)
      });
  
    })
    this.produitService.GetProduitByID(id).subscribe((res : Prodruit)=>{
      this.shopbox = res['response'].data;
      this.currentItem =  this.shopbox.typeVente;
      console.log("this.shopbox",this.shopbox)
      
      this.allcategorie.forEach(cate => {

        if(String(cate.id) == this.shopbox.categorieProduitId){
          this.shopbox.categorie = cate.label
        }
      });
   });

  }

  addtopanier(quantite,description,id,urlimage,montantunitaire,idproducteur,typeVente,categorie){

    if(this.montantcommande == 1){
      this.montantcommande = montantunitaire
    }

    if(this.counter > quantite){
      Swal.fire({
        icon: 'error',
        title: 'Ajout echoué!',
        text: "La quantité doit etre inferieur a celui de produit",
        showConfirmButton: true,
        timer: 2000
      });
    }else{
    //  console.log(id,description,quantite,urlimage,this.montantcommande)
      this.panierService.addItemsToCart(description,this.counter,id,urlimage,this.montantcommande,idproducteur,montantunitaire,typeVente,categorie)
      this.navigate.navigate(['/cart']);
    }
  }
  public getBlogTags(items: string | any[]) {
    var elems = blogtags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  public getBlogCategory(items: string | any[]) {
    var elems = blogcategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Increment decrement
  public counter: number = 1
  increment(quantite,prix) {
    this.montantcommande = prix;
    if(this.counter <= quantite-1){
       this.counter += 1;
       this.montantcommande =this.montantcommande*this.counter
    }

  }
  CalculeChange(data,prix){
    this.montantcommande = prix;
    this.counter = parseInt(data.target.value);
    console.log(this.montantcommande,this.counter);
    this.montantcommande =this.montantcommande*this.counter
    }
  addItem(newItem: string) {
    this.setProduct(newItem);
  }
  decrement(quantite,prix) {
    this.montantcommande = prix;
    this.counter -= 1;
    this.montantcommande =this.montantcommande*this.counter
  }

  ngAfterContentInit(): void {

    this.setProduct(this.router.snapshot.params.id);
    //console.log(this.router.snapshot.params.id,"atse");
  }
  ngOnInit(): void {
    this.setProduct(this.router.snapshot.params.id);
  }
}
