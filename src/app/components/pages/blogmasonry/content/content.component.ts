import { Component, OnInit } from '@angular/core';
import blogpost from '../../../../data/blog.json';
import blogtags from '../../../../data/blogtags.json';
import { ProduitService } from 'src/app/services/produits/produit.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // pagination
  page: number = 1;
  constructor(public produitServices:ProduitService    ) { }
  public blogbox: { title: string, id: number }[] = blogpost;
  public tags: { title: string, id: number }[] = blogtags;
  public getBlogTags(items: string | any[]) {
    var elems = blogtags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  prix = [
    {
      title: 'Prix',
      id: 1
    },
  ]
  count:number =0
  tableSize:number = 10
  tableSizes:any =[5,10,15,20]
  ngOnInit(): void {
    this.GetAllProduit()
  }
  ListProduits:any[] = []
  LocalListeProduit:any=[]
  cultureliste:any=[]
  villeliste:any=[]
  GetAllProduit(){
    this.produitServices.GetAllProduitPrix().subscribe((result:any)=>{

      result.data.forEach(element => {
        this.ListProduits.push(element);
        this.LocalListeProduit.push(element);
       // console.log(element.libelle)

    var culture =  this.cultureliste.filter(item => {
          return item ===element.libelle
        });
    //  / console.log(culture)
      if(culture.length==0){
        this.cultureliste.push(element.libelle);
      }


      var ville =  this.villeliste.filter(item => {
        return item ===element.ville
      });
  //  / console.log(culture)
    if(ville.length==0){
      this.villeliste.push(element.ville);
    }});
    })
  }
  lastville="";
  lastculture="";
  FilterTable(data,type){
    this.ListProduits  =  [];
    console.log(data.target.value,type)
    this.LocalListeProduit.forEach(element => {
      if(type=="culture"){
      //  console.log(element.libelle,data.target.value)

        if(element.libelle ==data.target.value){
          this.ListProduits.push(element);
        }
        // if(this.lastville ==""){
        //   if(element.libelle ==data.target.value){
        //     this.ListProduits.push(element);
        //   }
        // }else{
        //   this.lastculture == data.target.value
        //   if(element.libelle ==data.target.value&&element.ville ==this.lastville){
        //     this.ListProduits.push(element);
        //   }
        // }
      }

      if(type=="ville"){
        if(element.ville ==data.target.value){
          this.ListProduits.push(element);
        }
        // this.lastville == data.target.value
        // if(this.lastculture  ==""){
        //   if(element.ville ==data.target.value){
        //     this.ListProduits.push(element);
        //   }
        // }else{
        //   if(element.ville ==data.target.value&&element.libelle == this.lastculture) {
        //     this.ListProduits.push(element);
        //   }
        // }
      }
    });
  }
  onTableDataChange(event:any){
    this.page=event
  }
  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value
    this.page=1
    this.GetAllProduit()
  }
}
