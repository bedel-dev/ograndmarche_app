import { Component, OnInit,HostListener, Inject, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import cartList from '../../../data/cart.json';
import { UserService } from '../../../services/users/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../../common/global-constants';
import { PanierService } from '../../../services/paniers/panier.service';
import { ProduitService } from '../../../services/produits/produit.service';
import { CommandeService } from 'src/app/services/commandes/commande.service';

@Component({
  selector: 'app-headertwo',
  templateUrl: './headertwo.component.html',
  styleUrls: ['./headertwo.component.css']
})
export class HeadertwoComponent implements OnInit {


  constructor(@Inject(DOCUMENT) private document: Document,
  private router: Router,private Userservice: UserService,private CommndeService:CommandeService,
  public panierService: PanierService, public produitService: ProduitService,private changeDetector: ChangeDetectorRef) {
   // this.panier = this.panierService.getCartCount();
  }
  // Sticky Nav
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    //set up the div "id=nav"
    if (document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150) {
      document.getElementById('can-sticky').classList.add('sticky');
    }
    else {
      document.getElementById('can-sticky').classList.remove('sticky');
    }
  }

  //deconnection
  deconnexion() {
    Swal.fire('Deconnexion!!!')
    Swal.showLoading(Swal.getDenyButton())
    this.Userservice.logout();
    this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => {
          this.router.navigate(['/login']);
    });
    //this.getuser()
    //this.router.navigate(['/']);
    Swal.close();
  }

  // navigation
  navmethod: boolean = true;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }
  // Sidebar Category
  categorymethod: boolean = true;
  categoryToggle() {
    this.categorymethod = !this.categorymethod;
  }
  // Canvas Sidebar
  sidebarmethod: boolean = true;
  sidebarToggle() {
    this.sidebarmethod = !this.sidebarmethod;
  }
  // Cart
 // public cart: { id: number, qty: number, price: number }[] = cartList;
  public cart: { id: number, qty: number, price: number }[] = [];

  public calculateprice() {
    var total;
    total = this.panierService.getTotalAmount();
    //return this.panier.reduce((subtotal, item) => subtotal + item.qty * item.price, 0)
   // console.log(total.totalAmount)

    return total.totalAmount
  };
  getuser(){

    this.CommndeService.GetUser().subscribe((user:any)=>{
      console.log("user :",user.response);
      if(user.response.status == true){
        
      this.userid =  user.response.data.id;
      this.username =  user.response.data.name;
      //this.changeDetector.detectChanges()
      }else{
      


      }
      //console.log("username :",this.username)

    })
   }

  panier = this.panierService.getCartCount();

  userid :any;
  username :any;
  ngOnInit(): void {
    this.getuser();
    setInterval(() => {
      // var cartItems = localStorage.getItem("cartItems");
      // if (cartItems) {
      //  // this.panier = cartItems.length;
      //  // console.log(cartItems);
      // }else{
      //   this.panier = 0
      // }
     this.panier = this.panierService.getCartCount();
    //  console.log("nombre produits dans le panier : ",this.panier);
    }, 200);
  }

  isCheckedConsomable: boolean = true;
  isCheckedIntrant: any;
  isCheckedOutils: any;

  isCheckedConsomableView: boolean = true;
  isCheckedOutilsView:  boolean = false;
  isCheckedIntrantView:  boolean = false;

  checkValue(event: any){
    if(event ==="isCheckedConsomableView"&&this.isCheckedConsomable){
       this.isCheckedIntrantView = false
       this.isCheckedOutilsView = false
    }else if(event ==="isCheckedConsomableView"&& !this.isCheckedConsomable)  {
      this.isCheckedIntrantView = true
      this.isCheckedOutilsView = true
    }
    else if(event ==="isCheckedIntrantView"&& this.isCheckedIntrant)  {
      this.isCheckedConsomableView = false
      this.isCheckedOutilsView = false
    }
    else if(event ==="isCheckedIntrantView"&& !this.isCheckedIntrant)  {
      this.isCheckedConsomableView = true
      this.isCheckedOutilsView = true
    }

    else if(event ==="isCheckedOutilsView"&& this.isCheckedOutils)  {
      this.isCheckedConsomableView = false
      this.isCheckedIntrantView = false
    }
    else if(event ==="isCheckedOutilsView"&& !this.isCheckedOutils)  {
      this.isCheckedConsomableView = true
      this.isCheckedIntrantView = true
    }

 }
  onClickSubmit(data){

  if(data.search==""){
    Swal.fire({
      icon: 'error',
      title: 'Le champs est vide!',
      text: 'Veuillez remplir le champs pour une recherche',
      showConfirmButton: true,
      timer: 2000
    });

  }else{
    if(data.category1){
      var  parameter = data.search+":"+"consommable";
      var newroute = '/shop-v3/'+parameter;
      console.log(data);
    }else if(data.category2){
      var  parameter = data.search+":"+"intrant";
      var newroute = '/shop-v3/'+parameter;
      console.log(data);
    }else if(data.category3){
      var  parameter = data.search+":"+"outils";
      var newroute = '/shop-v3/'+parameter;
      console.log(data);
    }else{
      var  parameter = data.search+":"+"search";
      var newroute = '/shop-v3/'+parameter;
      console.log(data);
    }

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([newroute]);
});

  }
  }
}
