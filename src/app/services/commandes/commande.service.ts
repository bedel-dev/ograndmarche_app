import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { GlobalConstants } from '../../common/global-constants';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PanierService } from '../paniers/panier.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(public http:HttpClient,public router:Router,public panierService: PanierService) { }
  token =  localStorage.getItem('token')
  iduser = localStorage.getItem('iduser');

 testvar:any = []

 GetAllcategorieProduit(){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
})
 //console.log("user token: " + user.token);
 return this.http.get(GlobalConstants.apiURL+'/categorieproduits/getAllgorieproduit.json?espace=ecommerce',{headers: headers})
 }


  // var commandeGenerale = {
  //   "quantitetotalCommande":quantitetotalCommande,
  //   "montantTotaCommande":montantTotaCommande,
  //   "montantlivraison":montantlivraison,
  //   "statut":statut,
  //   "numero_commande":numero_commande,
  //   "vendeurID":vendeurID,
  //   "userId":iduser
  //  }

  GetCommandeByuser(){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
  
  console.log("this.iduser :"+this.iduser)
   return this.http.get(GlobalConstants.apiURL+"/commandes/getuserIdcommande/"+this.iduser+".json",{ headers: headers })
  }

  public GetAllCourse() {
    // var hauth =  localStorage.getItem(this.authLocalStorageToken)
    //  const user = JSON.parse(hauth!)
     const headers = new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${localStorage.getItem('token')}`
   })
    //console.log("user token: " + user.token);
    return this.http.get(GlobalConstants.apiURL+'/courses/listCourses.json',{headers: headers})
  }

  GetProduitBycomamnde(){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
   return this.http.get(GlobalConstants.apiURL+"/produitcommande/listProduitcommande.json",{ headers: headers })
  }

  terminate =false
     AddCommande(data,listprod){
    console.log("data : ",data)
    let  re =  false;
    Swal.fire('Patientez svp!!!')
    Swal.showLoading(Swal.getDenyButton())
    var idcommande = 0;
    let commande = {
    "venteId":data.venteId,
    "userId": data.userId,
    "vendeurId":data.vendeurID,
    "quantite":data.quantitetotalCommande,
    "montant":data.montantTotaCommande,
    "statut":"en attente",
    "numero_commande":String(Math.floor(100000 + Math.random() * 900000)),
    "montantlivraison":data.montantlivraison,
    "lieuLivraison":data.lieuLivraison
    }
    this.token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    const body=JSON.stringify(commande);
   // console.log(this.token);
    // console.log("voici le token dans commande : ",this.token)
    // console.log("voici le token dans commande : ",this.iduser)

    this.http
     .post(GlobalConstants.apiURL+'/commandes/addCommandes.json', body, {
       headers: headers,
     })
    .subscribe((res) =>{


  //  console.log(res);

    if(res['message']==="authentication failed Token not valide"){
      
        Swal.fire({
          icon: 'error',
          title: 'Commande refusé',
          text: 'Votre session a expiré!',
          showConfirmButton: true,
          timer: 2000
        });
        this.router.navigate(['/login']);
         re = false
     }
    else if(res['response']['code'] === "200"){
      
    //  Swal.fire({
    //   icon: 'success',
    //   title: 'Commande effectuée',
    //   text: 'Merci pour votre commande!',
    //   showConfirmButton: true,
    //   timer: 2000
    //  });
     idcommande = res['response']['idcommande']
     var number =listprod.length
     for(const item of listprod) {
       number -= 1;
      // console.log(item)
        this.AddProduitCommande(item,number,idcommande)

        // add notification
        
     }
     //this.panierService.removePanier();
     //this.cart = []
    // console.log(idcommande)
   //this.panierService.removePanier()
    //this.router.navigate(['/login']);
    
     re = true  
    }
    else if(res['response']['code'] === "404"){

      Swal.fire({
        icon: 'error',
        title: 'Commande refusé!',
        text: 'Veuillez contactez le service client!',
        showConfirmButton: true,
        timer: 2000
      });
      re = false
    }else{
     //this.alertConfirmation()
     Swal.fire({
      icon: 'error',
      title: 'Commande refusé!',
      text: 'veuillez verifier votre connexion internet!',
      showConfirmButton: true,
      timer: 2000
    });
    re =false
     }
    }
   );
   return re;
  }
  CreateNotification(datas){
    let iduser = localStorage.getItem('iduser');

    console.log(this.token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })

    var data = {
      "message":"nouvelle commande",
      "Idemetteur":iduser,
      "Idrecepteur":datas.idprod,
      "typenotif":"commande",
      "etat":"non lu"
    }
    const body=JSON.stringify(data);
    //console.log("body :",body)
    this.http.post(GlobalConstants.apiURL+'/notification/addNotification.json', body, {
       headers: headers,
     }).subscribe((d:any)=>{
      console.log("result : ",d)
     })
  }
  AddProduitCommande(data,listenumer:number,idcommande){
    
    //Swal.fire('Patientez svp!!!')
    //Swal.showLoading(Swal.getDenyButton())
    console.log(listenumer)
    let produitcommande = {
      "idcommande":idcommande,
      "titre":data.title,
      "prixunitaire":data.price,
      "quantite":data.qty,
      "Idvendeur":data.idprod,
      "idvente":data.id,
      "state":"en attente"
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    const body=JSON.stringify(produitcommande);
    var alert= true;
    console.log(this.token);
    this.http.post(GlobalConstants.apiURL+'/produitcommande/addProduitcommande.json', body, {
       headers: headers,
     })

    .subscribe((res) =>{
    console.log(res);
    
    if(res['message']==="authentication failed Token not valide"){
      if(listenumer ===0){
        Swal.fire({
          icon: 'error',
          title: 'Commande refusé',
          text: 'Votre session a expiré!',
          showConfirmButton: true,
          timer: 2000
        });
        this.router.navigate(['/login']);
      }

     }
    else if(res['response']['code'] === "200"){
      this.CreateNotification(data);
      if(listenumer ===0){
        this.testvar.push("1");
        console.log("this.testvar :",this.testvar);
      Swal.fire({
        icon: 'success',
        title: 'Commande effectuée',
        text: 'Merci pour votre commande!',
        showConfirmButton: true,
        timer: 2000
      });
    }
    console.log('after')
    //update vente
    var  newquantite ;
    this.http.get(GlobalConstants.apiURL+'/ventes/getVentesbyID/'+data.id+'.json',{
      headers: headers,
    }).subscribe((vente: any)=>{
     //+data.id+'.json')

      console.log("produit vente: "+vente['response'].data)
      newquantite = vente['response'].data.quantite - data.qty
    },(error) =>{

    },()=>{
       
      let ventes = {
        "quantite":newquantite,
      }
      const body=JSON.stringify(ventes);
      this.http.post(GlobalConstants.apiURL+'/ventes/updateVentes/'+data.id+'.json',body,{
        headers: headers,
      }).subscribe((rep:any)=>{
        console.log("updating vente",rep['response'])
      })

    })
   //update produit vente
   //this.panierService.removePanier()
    //this.router.navigate(['/login']);
    }else if(res['response']['code'] === "404"){
      if(listenumer ===0){
      Swal.fire({
        icon: 'error',
        title: 'Commande refusé!',
        text: 'Veuillez contactez le service client!',
        showConfirmButton: true,
        timer: 2000
      });
      return true
    //  localStorage.setItem('commaandeOK',"false")
    }
    }else{
     //this.alertConfirmation()
     if(listenumer ===0){
     Swal.fire({
      icon: 'error',
      title: 'Inscription refusé!',
      text: 'veuillez verifier votre connexion internet!',
      showConfirmButton: true,
      timer: 2000
    });
    localStorage.setItem('commaandeOK',"false")
      }
    }
    }
   );
  }
  GetUser(){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
   })
   return this.http.get(GlobalConstants.api_auth+"/getuser/"+ localStorage.getItem('iduser')+".json",{ headers: headers })
  }
  getloc(text:String,tokensession:String){
    var body = 
    //JSON.stringify(
      {
        "text": text,
        "tokensession":tokensession
      }
    //);
   //return this.http.get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+text+"&language=fr&components=country:ci&key=AIzaSyCucatgvP-JcsWSFdofdqQ_nbgyimkVpMo&sessiontoken="+tokensession,{ headers: headers })
   return this.http.post(GlobalConstants.apiURL+"/prixmarcher/getplace.json?espace=ecommerce",body)

  }

  async fetchData(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('La requête a échoué.');
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur de la requête:', error);
      throw error;
    }
  }
}
