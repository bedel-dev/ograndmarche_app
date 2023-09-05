import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { GlobalConstants } from '../../common/global-constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

 // private http: HttpClient
  constructor(private httpClient: HttpClient,private router: Router) { }
  token =  localStorage.getItem('token')
  apiUrl  =  GlobalConstants.apiURL+"/categorieproduits/getAllgorieproduit.json?espace=ecommerce"
  public panier: any[] = [];
  public productsearch:[] = [];
  GetAllcategorie(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
    return this.httpClient.get(this.apiUrl,{ headers: headers });
  }
  public GetAllmontantCourse() {

     const headers = new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.token}`
   })
   console.log("user token: " + this.token);
    return this.httpClient.get(GlobalConstants.apiURL+'/montantlivraison/listMontantlivraison.json?espace=ecommerce',{headers: headers})
  }

  GetAllProduit(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })

   return this.httpClient.get(GlobalConstants.apiURL+"/ventes/listVentes.json?espace=ecommerce",{ headers: headers })
  }

  GetAllProduitPrix(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })

   return this.httpClient.get(GlobalConstants.apiURL+"/prixmarcher/listprixmarcher.json?espace=ecommerce",{ headers: headers }) 
  }
  GetAllCommande(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })

   return this.httpClient.get(GlobalConstants.apiURL+"/commandes/listCommandes.json?espace=ecommerce",{ headers: headers })
  }
  GetAllProduitVente(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })

   return this.httpClient.get(GlobalConstants.apiURL+"/produitventes/listProduitventes.json?espace=ecommerce",{ headers: headers })
  }
  //GetAllProduitBysearch(){
  //  this.productsearch = [];
  //  / this.router.navigate(["/shop-v3/all"])
   // this.router.navigateByUrl("/shop-v3/all")
  //   console.log("je suis ici")
  //   var url = "/shop-v3/all";
  //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
  //     this.router.navigate([url]);
  // });
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.token}`
  // })

  //  return this.httpClient.get(GlobalConstants.apiURL+"/ventes/listVentes.json?espace=ecommerce",{ headers: headers })
  //}

  GetProduitByID(id){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
    return this.httpClient.get(GlobalConstants.apiURL+"/ventes/getVentesbyID/"+id+".json?espace=ecommerce",{ headers: headers });
  }
  GetAllPublicite(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.token}`
  })
 
   return this.httpClient.get(GlobalConstants.apiURL+"/publicites/listPublicites.json?espace=ecommerce",{ headers: headers })
  }
}
