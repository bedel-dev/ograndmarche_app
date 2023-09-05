import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import shoppost from '../../../../data/shop.json'
import Swal from 'sweetalert2';
import { Prodruit } from '../../../../data/prodruits';
import { ProduitService } from '../../../../services/produits/produit.service';
import { GlobalConstants } from '../../../../common/global-constants';
import { PanierService } from '../../../../services/paniers/panier.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Categorie } from 'src/app/data/categerie';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // pagination
  isLaoder = true

  page: number = 1;
  closeResult: string;
  modalContent: any;
  public imagurl  = GlobalConstants.host+"/img/produit_image/"
  constructor(private router: ActivatedRoute,private modalService: NgbModal,private produitService: ProduitService,public panierService: PanierService,) { }
  open(content: any, item: any) {
    this.montantcommande = 1;
    this.counter = 1
    this.modalContent = item
    this.modalService.open(content, { centered: true, size: "lg", windowClass: 'andro_quick-view-modal p-0' });
  }
  // Increment decrement
  public counter: number = 1
  public montantcommande:number=1;
  increment(quantite,prix) {
    this.montantcommande = prix;
    if(this.counter <= quantite-1){
       this.counter += 1;
       this.montantcommande =this.montantcommande*this.counter
    }

  }
  decrement(quantite,prix) {
    this.montantcommande = prix;
    this.counter -= 1;
    this.montantcommande =this.montantcommande*this.counter
  }
  public shopbox: { img: string }[] = shoppost;

  ngOnInit(): void {
    this.getAllcommande();

  }
  addtopanier(quantite,description,id,urlimage,montantunitaire,idproducteur,typeVente,categorie){

    if(this.montantcommande == 1){
      this.montantcommande = montantunitaire
    }
    this.modalService.dismissAll();
    if(this.counter > quantite){
      Swal.fire({
        icon: 'error',
        title: 'Ajout echoué!',
        text: "La quantité doit etre inferieur a celui de produit",
        showConfirmButton: true,
        timer: 2000
      });
    }else{
      console.log(id,description,quantite,urlimage,this.montantcommande)
      this.panierService.addItemsToCart(description,this.counter,id,urlimage,this.montantcommande,idproducteur,montantunitaire,typeVente,categorie)
    }

  }
  public  produits: Prodruit;
  //public allproduct:any[] = [];
  public allproduct:any[] = [];
  public allcategorie:any[] = [];
  param_search = this.router.snapshot.params.variable;
  public produitrecent: any[] = [];
  today = new Date();
  typesearch = "";
  public oncommande:any = [
   { 
    "createdAt": "2022-10-20T11:32:51",
   "montant": "9000",
   "montantlivraison":null,
   "numero_commande":"1200",
   "quantite":"3",
   "statut":"true",
   "updatedAt":"2022-10-20T11:32:51",
   "userId":"49",
   "vendeurId": "36",
   "venteId": "2"
  }
  ];

  public allcommande:any = [];


  getAllcommande(){
    this.getallcategory()
    this.getAllProduitVente()
    this.produitService.GetAllCommande().subscribe((res:Prodruit)=>{

      res.data.forEach(element => {
        this.allcommande.push(element);
      });
    },
    error => {
      console.log(error)
        // this is not called. Ok!
    },
    () => { 
      this.getAllproduct();
    });
    
  }

  ProduitVente:any[]=[]
  getAllProduitVente(){

    this.produitService.GetAllProduitVente().subscribe((prod:any)=>{
      prod.data.forEach(element => {
        this.ProduitVente.push(element);
      });
     
        console.log("prod :",this.ProduitVente)
    })
  }
  spinner:boolean=true
  getallcategory(){
    this.produitService.GetAllcategorie().subscribe((res:any)=>{
     
    // console.log(res.data)


    },error=>{


    },()=>{


    })
  }
 // getAllproduct
 vide:boolean
 getAllproduct(){
  // console.log('all :',this.allcommande)
  //console.log('all :',this.allcommande.data.length)
  //console.log("new parameter is : ",this.param_search)
  this.produitService.GetAllcategorie().subscribe((res:Categorie)=>{
    res.data.forEach(elements=>{
      this.allcategorie.push(elements)
    });

  })
  console.log("category :",this.allcategorie)

this.produitService.GetAllProduit().subscribe((res : Prodruit)=>{
    if(this.param_search.includes(":")){
      var newparam = this.param_search.split(":")
      this.param_search = newparam[0]
      this.typesearch = newparam[1]
    }

  //  console.log("parametre : ",this.param_search,this.typesearch)
   //console.log("parametre recent : ",res.data) categorieProduitId

    this.produits = res;
  //  console.log(this.produits)

    this.produits.data.forEach(element => {
      
      for(let prod of this.ProduitVente){

        if(element.idProduit===prod.id.toString()){
          element.urlImageVentePrincipal = prod.urlimage
          element.label = prod.label
          element.categorieProduitId = prod.categorie
        //  console.log(element.urlImageVentePrincipal)
        }
      }

      this.allcategorie.forEach(cate => {

        if(String(cate.id) == element.categorieProduitId){
          element.categorie = cate.label
        }
      });
      console.log(element)
      // console.log("parametre recent : ",element)
      if(this.param_search ==="recent"){
       // console.log("parametre recent : ",element)
        var todayjour = this.today.getDate();
        var datecreateprod = new Date(element['created_at']);
        var produitjour = datecreateprod.getDate();
        if(produitjour >= (todayjour - 20)&& produitjour <= todayjour){
          this.allproduct.push(element);
        //    this.produitrecent.push(element);
        }else{
          // get all products in contraints
          this.allproduct.push(element);
        }
       // this.allproduct = this.produitrecent  
      }
      if(this.param_search ==="all"){
       // console.log("parametre all : ",this.param_search)
        this.allproduct.push(element);
        this.allproduct.reverse()
      }
      if(this.typesearch ==="consommable"){
        if(element.description.toLowerCase().includes(this.param_search.toLowerCase())&& element.typeVente==="Produit consommable"){
        //  console.log("parametre consommable : ",element)
          this.allproduct.push(element);
          this.allproduct.reverse()
        }
      }
      if(this.typesearch ==="intrant"){
        if(element.description.toLowerCase().includes(this.param_search.toLowerCase())&& element.typeVente==="Intrant"){
        //  console.log("parametre intrant : ",element)
          this.allproduct.push(element);
          this.allproduct.reverse()
        }
      }
      if(this.typesearch ==="outils"){
        if(element.description.toLowerCase().includes(this.param_search.toLowerCase())&& element.typeVente==="Outils"){
        //  console.log("parametre outils : ",element)
          this.allproduct.push(element);
          this.allproduct.reverse()
        }
      }
      if(this.typesearch ==="category"&& element.categorieProduitId ===this.param_search){
       // console.log("parametre category : ",element)
      // if(element.categorieProduitId ===this.param_search){
        this.allproduct.push(element);
        this.allproduct.reverse()
      }
      if(this.typesearch=="search"&& element.description.toLowerCase().includes(this.param_search.toLowerCase())){
        this.allproduct.push(element);
        this.allproduct.reverse()
      }
      if(this.param_search ==="pluscommander"){
        const result = this.allcommande.filter(com => com.venteId ==String(element.id));
        //console.log("commande :",result.length);
        if(result.length >= 10){
          this.allproduct.push(element);
          this.allproduct.reverse()
        }
      }
      });
    },error=>{

    },()=>{
      this.spinner = false
      if(this.allproduct.length ==0){
        this.vide = true
      }
    });

    console.log("allproduct :",this.allproduct)
  //  this.allproduct.reverse()
    this.isLaoder = false;
   // console.log("commande :",this.allcommande)
    // if(this.param_search =="recent"){ pluscommander

    //   this.produitService.GetAllProduit().subscribe((res : Prodruit)=>{
    //   this.produits = res;
    //   this.produits.data.forEach(element => {
    //      var datecreateprod = new Date(element['created_at']);
    //      var produitjour = datecreateprod.getDate();

    //      if(produitjour >= (todayjour - 20)&& produitjour <= todayjour){
    //       this.produitrecent.push(element);
    //       this.allproduct = this.produitrecent
    //      }else{

    //      }

    //     });
    //   });
   // }
    // if(this.param_search == "all"){
    //  // var todayjour = this.today.getDate();
    //   this.produitService.GetAllProduit().subscribe((res : Prodruit)=>{
    //   this.produits = res;
    //   this.produits.data.forEach(element => {
    //     this.allproduct.push(element);
    //     });
    //   });

    // }

  }

  
}
