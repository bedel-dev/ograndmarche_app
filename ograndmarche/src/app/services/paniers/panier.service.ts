import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  cartItems = [];
  totalAmount;
  saveCartitem = JSON.parse(localStorage.getItem('cartItems'));

  constructor() { }

  addItemsToCart =(description,quantite,idproduit,urlimage,montantcommande,idproducteur,montantunitaire,typeVente,categorie)=> {
     let productExists = false;
     this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
     if(this.cartItems == null){
      this.cartItems = [];
     }
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === idproduit) {
        this.cartItems[i].quantity++;
        productExists = true;
        this.getTotalAmount();
        //
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({"id": idproduit,"img": urlimage,
      "title": description,"qty": quantite,
      "price": montantcommande,
      "idprod":idproducteur,
      "montantunitaire":montantunitaire,
      "typeVente":typeVente,
      "categorie":categorie
    });
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
     console.log(JSON.parse(localStorage.getItem('cartItems')));
     this.getTotalAmount();
  }

  removeFromCart = (idproduit) => {
    // this.cartItems = this.cartItems.filter((item) => item.id !== idproduit);
    // if (this.cartItems.length === 0) {
    //  // this.router.navigate(['']);
    // }
    var Cartitemdel = JSON.parse(localStorage.getItem('cartItems')).filter((item) => item.id !== idproduit);
    localStorage.setItem('cartItems', JSON.stringify(Cartitemdel));
    console.log("deleted",JSON.parse(localStorage.getItem('cartItems')))
    this.getTotalAmount();
  }

  removePanier(){
    this.cartItems = [];
    this.totalAmount = 0;
    localStorage.removeItem('cartItems');
  }
  getTotalAmount() {
    var saveCartitemthis = JSON.parse(localStorage.getItem('cartItems'));
     this.totalAmount = 0;
     if (saveCartitemthis) {
      this.totalAmount = 0;
      saveCartitemthis.forEach((item) => {
       this.totalAmount += (item.price);
      // console.log(item)
     });
     return {
       totalAmount: this.totalAmount
     };
    }
    return  {
     totalAmount: this.totalAmount
   };

    //  if (this.cartItems) {
    //    this.totalAmount = 0;
    //    this.cartItems.forEach((item) => {
    //     this.totalAmount += (item.price);
    //    // console.log(item)
    //   });
    //   return {
    //     totalAmount: this.totalAmount
    //   };
    //  }
    //  return  {
    //   totalAmount: this.totalAmount
    // };
  }
  getCart(){
    //return this.cartItems;
    var saveCartitemthis = JSON.parse(localStorage.getItem('cartItems'));
    if(localStorage.getItem('cartItems')){
      saveCartitemthis = JSON.parse(localStorage.getItem('cartItems'));
    }else{
      saveCartitemthis = [];
    }
    //console.log("see :",saveCartitemthis);
    return saveCartitemthis;
  }
  getCartCount = () => {
    // if (this.cartItems) {
    //   let cartCount = 0;
    //   // this.cartItems.forEach((item) => {
    //   //   cartCount += item.qty;
    //   // });
    //   cartCount = this.cartItems.length;
    //   return cartCount;
    // }
    var saveCartitemthis = JSON.parse(localStorage.getItem('cartItems'));

    if (saveCartitemthis) {
      let cartCount = 0;
      // this.cartItems.forEach((item) => {
      //   cartCount += item.qty;
      // });
      cartCount = saveCartitemthis.length;

      return cartCount;
    }else{
      return 0;
    }
  }
}
