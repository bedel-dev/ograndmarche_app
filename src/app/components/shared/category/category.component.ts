import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { ProduitService } from '../../../services/produits/produit.service';
import { Categorie } from '../../../data/categerie';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private produitService: ProduitService,private router: Router) {

  }
  datas: Categorie;
  public categorie : []
  public imagurl  = GlobalConstants.host+"/img/produit_image/"

  ngOnInit(): void {
    this.getAllcategorie()

  }

  getAllcategorie(){
      this.produitService.GetAllcategorie().subscribe((res : Categorie)=>{
      this.datas = res;
      this.categorie = this.datas.data
    });
  }
  searchProduct(variable){
    var newroute = '/shop-v3/'+variable+":"+"category";
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([newroute]);
  });
}
}
