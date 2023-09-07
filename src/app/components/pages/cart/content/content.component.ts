import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import cartList from '../../../../data/cart.json';
import shoppost from '../../../../data/shop.json'
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commandes/commande.service';
import { PanierService } from 'src/app/services/paniers/panier.service';
import { ProduitService } from 'src/app/services/produits/produit.service';
import { Categorie } from 'src/app/data/categerie';

import { GlobalConstants } from 'src/app/common/global-constants';
import Swal from 'sweetalert2';
import { from } from 'rxjs';
import { Prodruit } from 'src/app/data/prodruits';
import { DatePipe } from '@angular/common';
import { fromEvent, of, Subscription } from 'rxjs';


import { merge, Observable, OperatorFunction, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  networkStatus: boolean = false;
  networkStatus$: Subscription = Subscription.EMPTY;
  datalistOptions:any[]=[]
  step:any =1;
  closeResult: string;
  modalContent: any;
  livraisonAbidjan:any = 5000;
  livraisonHorsAbidjan:any = 7500;

  constructor(private modalService: NgbModal,
    private router: Router,
    public panierService: PanierService,
    public commandeService:CommandeService,
    private cdr: ChangeDetectorRef,
    public produitService: ProduitService) { }
  open(content: any, item: any) {
    this.modalContent = item
    this.modalService.open(content, { centered: true, size: "lg", windowClass: 'andro_quick-view-modal p-0' });
  }
  horsAbidjan :boolean
  Abidjan:boolean = true;

    Lieulivraison:string = ""
  checkValueLivraison(data: string){
    this.transportfrais = parseInt(data);
   // if(data =="horsAbidjan"){
    //   this.Abidjan = false
    //   this.horsAbidjan = true
    //   this.transportfrais = this.livraisonHorsAbidjan;

    // }
    // if(data =="Abidjan"){
    //   this.Abidjan = true
    //   this.horsAbidjan = false
    //   this.transportfrais = this.livraisonAbidjan;
    // }
  }

  TypePaiement(data: string){


    if(data=="LivraisonPaiement"){
      this.modepaiement = "À la livraison"
    }
    if(data == "carte"){
      this.modepaiement = "Carte"
    }
    if(data =="mobilemoney"){
      this.modepaiement = "Mobile monney"
    }
    // if(data =="horsAbidjan"){
    //   this.Abidjan = false
    //   this.horsAbidjan = true
    // }
    // if(data =="Abidjan"){
    //   this.Abidjan = true
    //   this.horsAbidjan = false
    // }
  }
  today:any;
  dateFin:any
  pipe = new DatePipe('en-US');
  getDateLivraison(){
    const now =  new Date();
    const myFormattedDate = this.pipe.transform(now, 'short');
    var d = myFormattedDate.split(",")[0].split('/')
    var daynow = d[1];
    var month = d[0]
    var year = d[2]
    this.today = daynow+"/"+month+"/"+year
    console.log(daynow+"/"+month+"/"+year)


  const dateFinLiv = new Date();
  dateFinLiv.setDate(dateFinLiv.getDate() + 4);
  const myFormattedDateFin = this.pipe.transform(dateFinLiv, 'short');

  var c = myFormattedDateFin.split(",")[0].split('/')
  var daynow2 = c[1];
  var month2 = c[0]
  var year2 = c[2]
  this.dateFin = daynow2+"/"+month2+"/"+year2
  //console.log(daynow+"/"+month+"/"+year)

  //console.log(myFormattedDateFin);
  }
  errormodepaie = false
  submit(data: any){
    console.log("lieu :",this.Lieulivraison)

    if(this.Lieulivraison ==""){
      this.step=1
      localStorage.removeItem('datalivraison');
      this.LieuVide = true
    }else{
      this.LieuVide = false
    }

    if(this.transportfrais == null){
      this.step=1
      localStorage.removeItem('datalivraison');
      this.errormodepaie = true
    }else{
      this.errormodepaie = false
    }



    if(!this.LieuVide&&!this.errormodepaie){
      if(this.step<=2){
        if(this.step===2){
          console.log("step entrant :",this.step)
          console.log("datalivraison entrant: ",this.datalivraison)

          if(this.datalivraison == null){
            var datalivraisonstate = {
              lieulivraison:this.Lieulivraison,
              fraistrans:this.transportfrais,
              modepaiement:this.modepaiement
            }
            localStorage.setItem("datalivraison",JSON.stringify(datalivraisonstate))
            this.datalivraison =  JSON.parse(localStorage.getItem("datalivraison"))
            console.log("trois: ",this.datalivraison)

          }else{

            this.datalivraison = this.datalivraison
          }
        }

        this.step= this.step  + 1;
        console.log("plus step est : :",this.step)
      }else{

        
        if(this.step ==3&&this.cart.length !==0 &&this.datalivraison!== null){
          this.commander()
          console.log("plus step est egale a :",this.step)
        }
      }

    }

    setTimeout(() => {
      this.LieuVide = false
      this.errormodepaie = false
    }, 2500);
  }

  retour(){
    console.log("this step est :",this.step)
    if(this.step<=3){
      this.Lieulivraison=this.Lieulivraison
      this.step= this.step -1;
      console.log("moins step est :",this.step)
    }
  }


  // Increment decrement
  public counter: number = 1
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }
  public shopbox:any[] = [];
  //public cart:any[]  = this.panierService.cartItems;
  public cart:any[]  = this.panierService.getCart();

  public transportfrais:number;
  //{ id: number, qty: number, price: number }[]
  public calculateprice() {
    var total: { totalAmount: any; };
    total = this.panierService.getTotalAmount();
    //return this.panier.reduce((subtotal, item) => subtotal + item.qty * item.price, 0)
   // console.log(total.totalAmount)

    return total.totalAmount
  };
  public allcategorie:any[] = [];

  allCoursermontants:any[] = [];
  GetAllMontantLivraison(){
    this.produitService.GetAllmontantCourse().subscribe((course:any)=>{


      for(let c of course.data){
        this.allCoursermontants.push(c)
      }



      // for(let c of this.allCoursermontants){
      //   console.log(c)
      // }
    })
  }




    // get recente product
    getProductAll(){
      this.produitService.GetAllcategorie().subscribe((res:Categorie)=>{
        res.data.forEach(elements=>{
          this.allcategorie.push(elements)
        });
    
      })
      console.log(this.cart)
      this.produitService.GetAllProduit().subscribe((res : Prodruit)=>{
      this.shopbox = res.data;
    //  console.log(this.shopbox);
      // this.produits.data.forEach(element => {
      //    if(element['typeVente'] === this.item){
      //     this.allproductionconso.push(element);
      //    }
      //   });
      });
      //console.log("item  :",this.item)
    }
  taxPrice = 9.99;
  upsellConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: '.andro_upsells .slider-prev',
    nextArrow: '.andro_upsells .slider-next',

  }
  stopModale(){
    if(Swal.isLoading){
      Swal.close()
    }
  }

  modepaiement:string="À la livraison";
  datalivraison:any
  ngOnInit(): void {

  //  localStorage.removeItem("datalivraison")
    this.GetAllMontantLivraison()

    if(this.cart.length >0){
      this.datalivraison =  JSON.parse(localStorage.getItem("datalivraison"))
     // console.log("this.datalivraison :",this.datalivraison)
      if(this.datalivraison!==null){
        this.step = 3
        this.transportfrais = parseInt(this.datalivraison.fraistrans);
        this.Lieulivraison = this.datalivraison.lieulivraison;
        this.modepaiement = this.datalivraison.modepaiement
      }
    }
    console.log(this.datalivraison)
    this.checkNetworkStatus();
    this.stopModale()
    this.getProductAll()
    this.getDateLivraison()
  }
  ngOnDestroy(): void {
    this.networkStatus$.unsubscribe();
  }



LieuVide:boolean = false
onSearchChange(searchValue: any): void {

  var sessionToken = String(Math.floor(100000 + Math.random() * 900000))
  this.Lieulivraison = searchValue.target.value
  this.commandeService.getloc(searchValue.target.value,sessionToken).subscribe((localite:any)=>{
    console.log(localite.response);
    this.datalistOptions= []
    localite.response.predictions.forEach((element: any) => {
    this.datalistOptions.push(element)
    this.cdr.detectChanges();
    });
    console.log(this.datalistOptions);
  })
}




  // To check internet connection stability
  checkNetworkStatus() {
        this.networkStatus = navigator.onLine;
        this.networkStatus$ = merge(
          of(null),
          fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    )
      .pipe(map(() => navigator.onLine))
      .subscribe(status => {
            console.log('status', status);
        this.networkStatus = status;
      });
  }
  commander(){

    let iduser = localStorage.getItem('iduser');
    console.log("iduser :",iduser)
    console.log("cart :",this.cart)
    if(iduser) {

      var vendeurID = "null"
      var quantitetotalCommande  = 0
      var montantTotaCommande =0
      var numero_commande = String(Math.floor(100000 + Math.random() * 900000))
      var statut = "en attente"
      var montantlivraison = this.transportfrais
      var venteID = 0
    for(const item of this.cart){
      quantitetotalCommande  +=item.qty
      montantTotaCommande +=item.price
      venteID = item.id
      vendeurID = item.idprod
    }

    var commandeGenerale = {
      "quantitetotalCommande":quantitetotalCommande,
      "montantTotaCommande":montantTotaCommande,
      "montantlivraison":montantlivraison,
      "statut":statut,
      "numero_commande":numero_commande,
      "vendeurID":"null",
      "userId":iduser,
      "venteId":"null",
      "lieuLivraison":this.Lieulivraison
     }
     console.log("commandeGenerale :",commandeGenerale)

     if(this.networkStatus){
     this.commandeService.AddCommande(commandeGenerale,this.cart);
     this.panierService.removePanier();
     this.cart = []
     localStorage.removeItem("datalivraison")
     }else{
      Swal.fire({
        icon: 'error',
        title: 'Pas de connection internet',
        text:  'Verifier votre connexion internet!',
        showConfirmButton: true,
        timer: 2000
      });
     }

    }else{
      //redirect to the login page if user not logged in
      this.router.navigate(['/login']);
    }


  }
 imagurl = GlobalConstants.host+"/img/produit_image/"
 removeitem(id:any) {

  const filteredItems = this.panierService.getCart().filter(function(item: { id: any; }) {
  return item.id !== id
  })
  this.cart = filteredItems;
  if(this.cart.length ==0){
    localStorage.removeItem('datalivraison')
  }
  this.panierService.removeFromCart(id);
}
}
