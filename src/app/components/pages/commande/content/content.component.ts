import { Component, OnInit } from '@angular/core';
import wishlistPost from '../../../../data/wishlist.json';
import { CommandeService } from 'src/app/services/commandes/commande.service';
import { Prodruit } from 'src/app/data/prodruits';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public wishlist: { img: string }[] = wishlistPost;
  title  = "pagination"
  Commandes:any[]=[];
  page = 1;
  count:number =0
  tableSize:number = 10
  tableSizes:any =[5,10,15,20]

  constructor(public commandeService:CommandeService,public router:Router) { }
  orders = [];
  Product:any = []
  ngOnInit(): void {
    
    this.getDetailofcommande()
  }
  getDetailofcommande(){

    this.commandeService.GetProduitBycomamnde().subscribe((res:Prodruit)=>{
      if(res['message']=="authentication failed Token not valide"){
        this.router.navigate(['/login']);

        Swal.fire({
          icon: 'error',
          title: 'votre session a expiré',
          text: 'veuillez vous reconnectez!',
          showConfirmButton: true,
          timer: 2000
        });
      }
      else if(res['status']===true){
       res.data.forEach((element)=>{
        console.log(element);
        this.Product.push(element)
       })
     //  this.Product = res.data.filter((item) => item.idcommande == this.idcommande);
       // console.log(this.Product)
      }
    },
    error => {
      console.log(error)
        // this is not called. Ok!
    },
    () => { 
      this.GetCommande()
      this.getAllCourse()
    });
  }

  Course:any[]=[]
  getAllCourse(){
    this.commandeService.GetAllCourse().subscribe((res:any) =>{
      res.data.forEach((course:any) => {
        this.Course.push(course);
      })
      //console.log("res :",res)

    })
  }
  pipe = new DatePipe('en-US');
  date:any;
  spinner:boolean = true
  videCommande:boolean = false
   GetCommande(){
    this.commandeService.GetCommandeByuser().subscribe((res:Prodruit)=>{
      if(res['message']=="authentication failed Token not valide"){
      //  this.router.navigate(['/login']);
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/login']);
    });

      }
      else if(res['response'].code==="200"){
        for(const item of res['response'].data){
            console.log(item);
          // take course state
          var coursecommande = this.Course.filter((course:any)=>{
            return course.produit.toString() == item.id.toString()
          });

          if(coursecommande.length > 0){
            if(coursecommande[0] === "initier"||coursecommande[0] === "accepter"){

            }else{
             // item.statut =coursecommande[0].statut
            }
          }
          console.log("commande statut :",item.statut)
          const now =  new Date(item.createdAt);
          const myFormattedDate = this.pipe.transform(now, 'short');
          var d = myFormattedDate.split(",")[0].split('/');
          var daynow = d[1];
          var month = d[0];
          var year = d[2];
          this.date = daynow+"/"+month+"/"+year
          item.createdAt = this.date;
          var count =  this.Product.filter((items) => items.idcommande == item.id);
          item.quantite = count.length;
          
          if(item.statut != "livraison"){
            var prodc = this.Product.filter((produit:any) => {
              return produit.idcommande.toString() == item.id.toString();
            })
            console.log("prod",prodc)
              if(prodc.length > 1){
  
                var acceptedata =  prodc.filter((p:any) => {
                  return p.state == "accepter";
                })
                if(acceptedata.length ==prodc.length){
                  item.statut = acceptedata[0].state
                }
  
              }else{
                item.statut = prodc[0].state
              }
          }
          if(item.montantlivraison==null){
            item.montantlivraison = 1000
            this.Commandes.push(item)
          }else{
            this.Commandes.push(item)
          }
        }
        this.Commandes.reverse()
        console.log("commandes",this.Commandes)
      }

    },error =>{

    },()=>{
      this.spinner = false
     // this.Commandes.length = 0
      if(this.Commandes.length == 0){
        this.videCommande = true
      }
    })
  }
  onTableDataChange(event:any){
    this.page=event
  //  this.GetCommande()
  }
  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value
    this.page=1
    this.GetCommande()
  }
}
