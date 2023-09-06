import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import shoppost from '../../../../data/shop.json'
import categorypost from '../../../../data/category.json'
import blogcategory from '../../../../data/blogcategory.json';
import blogpost from '../../../../data/blog.json';
import blogtags from '../../../../data/blogtags.json';
import testimonialpost from '../../../../data/testimonial.json';
import Swal from 'sweetalert2';
import { Prodruit } from '../../../../data/prodruits';
import { ProduitService } from '../../../../services/produits/produit.service';
import { GlobalConstants } from '../../../../common/global-constants';
import { PanierService } from '../../../../services/paniers/panier.service';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/data/categerie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public  produits: Prodruit;
  public imagurl  = GlobalConstants.host+"/img/produit_image/"
  public produitrecent: any[] = [];
  public produitconsommable:number = 0
  public intrants:number = 0
  public outils:number = 0
  public allproductionconso:any[]=[]
  public innerWidth: any;
  view = true;
  spinner:boolean = true
  isLaoder = true
  today = new Date();
  ngOnInit(): void {
    this.getAllProduitVente()
    this.innerWidth = window.innerWidth;
      this.stopModale()
      
      
  }

  public allcategorie:any[] = [];
  ProduitVente:any[]=[]
  Vente:any[]=[]
  User:any[]=[]
  Engrais = 0
  getAllProduitVente(){
    this.produitService.GetAllProduitVente().subscribe((prod:any)=>{
      console.log("prod",prod);
      prod.data.forEach(element => {
        this.ProduitVente.push(element);
      });
        console.log("prod :",this.ProduitVente)
    },error=>{},
    ()=>{
      this.getProductRecent();
    });
  }
  // get recente product
  getProductRecent(){
    // if(this.innerWidth<=1389){
    //   this.view = false
    // }else{
    // }
    this.produitService.GetAllcategorie().subscribe((res:Categorie)=>{
      res.data.forEach(elements=>{
        this.allcategorie.push(elements)
      });
  
    })
    //console.log("category :",this.allcategorie)
    var todayjour = this.today.getDate();
    this.produitService.GetAllProduit().subscribe((res : Prodruit)=>{
    this.produits = res;
    var conso : any[] = [];
    var intr : any[] = [];
    var out: any[] = [];
    this.GetAllPub()

    this.produits.data.forEach(element => {

      this.Vente.push(element);
      console.log(element)

      for(let prod of this.ProduitVente){

        if(element.idProduit===prod.id.toString()){
          element.urlImageVentePrincipal = prod.urlimage
          element.label = prod.label
        }
      }
      this.produitrecent.reverse();
      this.allproductionconso.reverse()

      this.allcategorie.forEach(cate => {

        if(String(cate.id) == element.categorieProduitId){
          element.categorie = cate.label
        }
      });
       var datecreateprod = new Date(element['created_at']);
       var produitjour = datecreateprod.getDate();
       this. isLaoder = false
       if(element['typeVente'] === "Produit consommable"){
        conso.push(element);
        this.allproductionconso.push(element);
        this.produitconsommable = conso.length;
       }
       if(element['typeVente'] === "Intrant")
       {
        intr.push(element);
        intr.reverse()
        this.intrants = intr.length;
       }
       if(element['typeVente'] === "engrais")
       {
        intr.push(element);
        intr.reverse()
      //  console.log("intrants: " , intr)
        this.Engrais  = intr.length;
       }
       if(element['typeVente'] === "Outils"){
        out.push(element);
        out.reverse()
        this.outils = out.length;
       }
       if(produitjour >= (todayjour - 20)&& produitjour <= todayjour){
        this.produitrecent.push(element);
        // this.produitrecent.reverse();
       }else{
        this.produitrecent.push(element);
       // this.produitrecent.reverse();
       }
       this.produitrecent.reverse();
       this.allproductionconso.reverse()


      });
    },error=>{

    },()=>{
      this.spinner = false
      
    });
    
    
    console.log('je suis ici :', this.produitrecent)
   
  }

  closeResult: string;
  modalContent: any;
  constructor(public http:HttpClient ,private modalService: NgbModal,private router: Router,private produitService: ProduitService,public panierService: PanierService ) { }
  open(content: any, item: any) {
    this.counter  = 1
    this.montantcommande = 1;
    this.modalContent = item
    this.modalService.open(content, { centered: true, size: "lg", windowClass: 'andro_quick-view-modal p-0'});
  }



  public shopbox: { img: string }[] = shoppost;
  public featuredpost: { img: string }[] = shoppost;
  public category: { icon: string }[] = categorypost;
  public blogcategory: { title: string }[] = blogcategory;
  public testimonial: { photo: string }[] = testimonialpost;
  public blogbox: { title: string, id: number }[] = blogpost;
  public tags: { title: string, id: number }[] = blogtags;
  public getBlogTags(items: string | any[]) {
    var elems = blogtags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Banner
  bannerslider = [
    {
      idproduit:1,
      photo: "tomate1.jpeg",
      user: "Bedel coulibaly",
      title: "Tomate",
      titlespan: "en vente",
      para: "Tomate de la région du Belier, produit dans les meilleures conditions",
    },
    
  ];

  GetAllPub(){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    this.http.get(GlobalConstants.api_auth+"/listUsers.json",{ headers: headers }).subscribe((user:any)=>{

          if(user.status == true){
            user.data.forEach(element => {
              this.User.push(element)

            });
          }
          console.log(this.User)
    },error=>{

    },()=>{
      this.produitService.GetAllPublicite().subscribe((pub:any)=>{

        console.log(pub);
        if(pub.status == true){
          pub.data.forEach(element => {
            this.Vente.forEach((vente:any)=>{
              if(element.idBenef == vente.id.toString()){
                element.idUser = vente.idUser
                element.Idproduit = vente.idProduit
              }
            })
            this.User.forEach((u:any)=>{
              if(element.idUser == u.id.toString()){
                element.benef = u.name
              }
            })

            this.ProduitVente.forEach((prodvente:any)=>{
              if(element.Idproduit == prodvente.id.toString()){
                element.produit = prodvente.label
              }
            })
            var oneday_milisecond = 24 * 3600 * 1000;
            var nbrdejour_milisecond = oneday_milisecond * parseInt(element.delai);

            var dataCreate =  new Date(element.createdAt);
            var date_fin = new Date();
            date_fin.setTime(date_fin.getTime() + nbrdejour_milisecond);
            var today =  new Date();
            
            if(today <= date_fin){
                this.bannerslider.push({
                  idproduit:element.idBenef,
                  photo: element.urlImage,
                  user: element.benef,
                  title: element.produit,
                  titlespan: "en vente",
                  para: element.contenu,
              })
            }
          });
        }else{
          //this.bannerslider = []
        }
        // console.log("Publicite :",pub)
        // console.log("ProduitVente :",this.ProduitVente)
        // console.log("Vente :",this.Vente)
      })
    })
  }

  bannerConfig = {
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
  // Icons
  iconspost = [
    {
      icon: "flaticon-diet",
      title: "Produit consomable",
      para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "flaticon-harvest",
      title: "Intrant",
      para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "flaticon-tag",
      title: "Outils",
      para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  // Fresharrivals
  fresharrConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: '.andro_fresh-arrivals .slider-prev',
    nextArrow: '.andro_fresh-arrivals .slider-next',
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
  };
  // Testimonial
  testiConfig = {
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
    }

   else{
      console.log(id,description,quantite,urlimage,this.montantcommande)
      this.panierService.addItemsToCart(description,this.counter,id,urlimage,this.montantcommande,idproducteur,montantunitaire,typeVente,categorie)
    }
  this.modalService.dismissAll();
  }

  // Increment decrement
  public counter: number = 1
  public montantcommande:number=1;
  increment(quantite,prix) {
    this.montantcommande = prix;
    if(this.counter <= quantite-1){
       this.counter += 1;
       this.montantcommande =this.montantcommande*this.counter
       console.log(this.montantcommande);  
    }

  }
  CalculeChange(data,prix){
    this.montantcommande = prix;
    this.counter = parseInt(data.target.value);
    console.log(this.montantcommande,this.counter);
    this.montantcommande =this.montantcommande*this.counter
    }
  decrement(quantite,prix) {
    this.montantcommande = prix;
    this.counter -= 1;
    this.montantcommande =this.montantcommande*this.counter
  }
  searchProduct(variable){
    var newroute = '/shop-v3/'+variable;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([newroute]);
  });
}
  stopModale(){
    if(Swal.isLoading){
      Swal.close()
    }
  }
}
