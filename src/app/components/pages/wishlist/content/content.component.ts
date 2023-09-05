import { Component, OnInit } from '@angular/core';
import wishlistPost from '../../../../data/wishlist.json';
import { ActivatedRoute,Router } from '@angular/router';
import { CommandeService } from '../../../../services/commandes/commande.service';
import { Prodruit } from '../../../../data/prodruits';
import { ProduitService } from '../../../../services/produits/produit.service';
import { Categorie } from 'src/app/data/categerie';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private produitService:ProduitService,private router: ActivatedRoute,private otherroute:Router,private commandeService:CommandeService) { }
  public wishlist: { img: string }[] = wishlistPost;
  idcommande = this.router.snapshot.params.id
  Product:any = []
  vente:any = []
  ngOnInit(): void {
    this.GetAllVente()
   // console.log(this.idcommande);

  }
  public allcategorie:any[] = [];

  GetAllVente(){
    this.produitService.GetAllcategorie().subscribe((res:Categorie)=>{
      res.data.forEach(elements=>{
        this.allcategorie.push(elements)
      });
  
    })
    this.produitService.GetAllProduit().subscribe((res:Prodruit)=>{
      this.vente  = res.data

    },error=>({

    }),()=>{ 
      this.getDetailofcommande()
    }
    );
  }
  getDetailofcommande(){
    this.commandeService.GetProduitBycomamnde().subscribe((res:Prodruit)=>{
      if(res['message']=="authentication failed Token not valide"){
        this.otherroute.navigate(['/login']);

        Swal.fire({
          icon: 'error',
          title: 'votre session a expiré',
          text: 'veuillez vous reconnectez!',
          showConfirmButton: true,
          timer: 2000
        });
      }
      else if(res['status']===true){
       this.Product = res.data.filter((item) => item.idcommande == this.idcommande);
       console.log("vente :",this.vente)
       console.log("produit :",this.Product)
       for(const i of this.Product){
        for(const a of this.vente){
          if(a.id ==i.idvente){
            i.typeVente =  a.typeVente
            this.allcategorie.forEach(cate => {

              if(String(cate.id) == a.categorieProduitId){
                i.categorie = cate.label
              }
            });
            if(i.categorie =="animal"){
              i.typeVente="null"
            }
            console.log(i)
          }
        }


       }
      }
    });
  }

}
