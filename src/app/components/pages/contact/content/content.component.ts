import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import intlTelInput from 'intl-tel-input';
import { GlobalConstants } from 'src/app/common/global-constants';
import { CommandeService } from 'src/app/services/commandes/commande.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public http:HttpClient,private router: Router,public commandeService:CommandeService) { 
    
  }
  typeVente:string = "null";
  typePers:string = "null";
  titles:Array<Object> = [
    {name: "Denré alimantaire"},
    {name: "Intrant"},
    {name: "Outils"}
];
// fileUplaod()
step:any =1;


file_cni:any =null
namefile_cni:string
file_data_cni:any = null
datalistOptions:any[]=[]
LieuMagasin:string = ""
LieuHabitation:string = ""
LieuVide = false
LieuVideAbitation = false
onSearchChange(searchValue: any): void {
  var sessionToken = String(Math.floor(100000 + Math.random() * 900000))
  this.LieuMagasin = searchValue.target.value
  this.commandeService.getloc(searchValue.target.value,sessionToken).subscribe((localite:any)=>{
    this.datalistOptions= []
    localite.predictions.forEach(element => {
      this.datalistOptions.push(element)
    });
  })
}
onSearchChangeAbitation(searchValue: any): void {
  var sessionToken = String(Math.floor(100000 + Math.random() * 900000))
  this.LieuHabitation = searchValue.target.value
  this.commandeService.getloc(searchValue.target.value,sessionToken).subscribe((localite:any)=>{
    this.datalistOptions= []
    localite.predictions.forEach(element => {
      this.datalistOptions.push(element)
    });
  })
}
onFileChangeCni(event:any) {

  if (event.target.files.length > 0) {
    const image = event.target.files[0];
    this.file_cni = image;
   // console.log('finfo',image.name,image.size,image.type);
    this.namefile_cni = event.target.files[0].name;
   // this.namefile = image.size+"_"+String(Math.floor(100000 + Math.random() * 900000))+"."+image.type.split("/")[1]
   // console.log(image.name)
  // console.log("this.namefile :",this.namefile)
    let formData = new FormData();
    let info={id:2,name:'raja'}
    formData.append('image', image, image.name);
    formData.append('id','2');
    formData.append('tz',new Date().toISOString())
    formData.append('update','2')
    formData.append('image',JSON.stringify(info))

    this.file_data_cni=event.target.files;
   console.log(this.file_data_cni)
  }
}


file_registre:any = null
namefile_registre:string
file_data_registre:any = null

onFileChangeRegistre(event:any) {

  if (event.target.files.length > 0) {
    const image = event.target.files[0];
    this.file_registre = image;
   // console.log('finfo',image.name,image.size,image.type);
    this.namefile_registre = event.target.files[0].name;
   // this.namefile = image.size+"_"+String(Math.floor(100000 + Math.random() * 900000))+"."+image.type.split("/")[1]
   // console.log(image.name)
  // console.log("this.namefile :",this.namefile)
    let formData = new FormData();
    let info={id:2,name:'raja'}
    formData.append('image', image, image.name);
    formData.append('id','2');
    formData.append('tz',new Date().toISOString())
    formData.append('update','2')
    formData.append('image',JSON.stringify(info))

   this.file_data_registre=event.target.files;
   console.log(this.file_data_registre)
  }
}
namefile_dfe
file_dfe:any = null
file_data_dfe
onFileChangeDFE(event:any) {

  if (event.target.files.length > 0) {
    const image = event.target.files[0];
    this.file_dfe = image;
   // console.log('finfo',image.name,image.size,image.type);
    this.namefile_dfe = event.target.files[0].name;
   // this.namefile = image.size+"_"+String(Math.floor(100000 + Math.random() * 900000))+"."+image.type.split("/")[1]
   // console.log(image.name)
  // console.log("this.namefile :",this.namefile)
    let formData = new FormData();
    let info={id:2,name:'raja'}
    formData.append('image', image, image.name);
    formData.append('id','2');
    formData.append('tz',new Date().toISOString())
    formData.append('update','2')
    formData.append('image',JSON.stringify(info))

   this.file_data_dfe=event.target.files;
   console.log(this.file_data_dfe)
  }
}

  // Locations
  locationbox = [
    {
      photo: "assets/img/locations/1.jpg",
      title: "Find Us In",
      titlespan: "Greece",
      para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
    },
    {
      photo: "assets/img/locations/2.jpg",
      title: "Find Us In",
      titlespan: "New York",
      para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
    },
  ];
  // Info
  contactinfo = [
    {
      icon: "flaticon-call",
      title: "Call Center",
      para: "Pour le service client appelez au +225 07 69 42 43 74.",
      url:""
    },
    {
      icon: "flaticon-email",
      title: "Mail",
      para: "Vous pouvez nous contactez par mail au serviceleplanteur@lidar.ci",
      url:""
    },
    {
      icon: "flaticon-location",
      title: "Geolocalisation",
      para: "Cliques ici  pour voire notre situation geographique",
      url:"https://www.google.com/maps/place/Fa+%26+Fa/@6.8132187,-5.262649,15z/data=!4m5!3m4!1s0x0:0x28d521cd46c5b931!8m2!3d6.8131872!4d-5.2626763"
    },
  ]
  token =  localStorage.getItem('token')


  denreselect = false
  intrantselect = false
  outilsselect = false


  TypeVenteChoisi:any[]=[]
  choice(data){
    this.Categorie = []
  // console.log(data.target.checked)
   //console.log(data.target.value)
      if(data.target.checked === true){
        this.TypeVenteChoisi.push(data.target.value)
      }else if(data.target.checked === false){
        this.TypeVenteChoisi =   this.TypeVenteChoisi.filter((item) =>  {return item !==data.target.value});
        if(this.TypeVenteChoisi.length==0){
          this.LocalCategorie.forEach((item:any)=>{
            this.Categorie.push(item)
        })
        }
      }
     // console.log(this.TypeVenteChoisi)
      for(let d of this.TypeVenteChoisi){
      //  console.log(d)
        if(d=="Denrée alimantaire"){
          this.LocalCategorie.forEach((item:any)=>{
            if(item.type_produit=="Produit consommable"){
            //  console.log(item);
              this.Categorie.push(item)
            }
          })
        }
        if(d=="Intrant"){
          this.LocalCategorie.forEach((item:any)=>{
            if(item.type_produit=="Intrant"){
            //  console.log(item);
              this.Categorie.push(item)
            }
          })
        }
        if(d=="engrais"){
          this.LocalCategorie.forEach((item:any)=>{
            if(item.type_produit=="engrais"){
            //  console.log(item);
              this.Categorie.push(item)
            }
          })
        }
        if(d=="Outils"){
          this.LocalCategorie.forEach((item:any)=>{
            if(item.type_produit=="Outils"){
            //  console.log(item);
              this.Categorie.push(item)
            }
          })
        }
        console.log(this.Categorie)
      }

  }


  ChoixCategorie:any[]=[]
  choiceCategorie(data){
    if(data.target.checked){
      this.ChoixCategorie.push(data.target.value)
    }else{
      this.ChoixCategorie =   this.ChoixCategorie.filter((item) =>{return item!==data.target.value});

    }
    // console.log(data.target.checked)
    // console.log(this.ChoixCategorie)
 
   }



  Categorie:any[] = []
  LocalCategorie:any[] = []
  GetallCategorieProduit(){
    this.commandeService.GetAllcategorieProduit().subscribe((data:any) =>{
      data.data.forEach(element => {
        this.Categorie.push(element)
        this.LocalCategorie.push(element)
      });
    },error =>{

    },()=>{
      console.log(this.Categorie)
    })
  }

  retour(){
    if(this.step<=4){
      this.step= this.step -1;
      console.log("retour step est :",this.step)
    }
  }
  suivant(){
    if(this.step<=3){
      this.step= this.step  + 1;
    }
  }
  // save fournisseur
  TypeVide = false
  CateVide = false





   nom :any
   prenom :any
   phone :any
   email :any
   ville :any
   gerantphone :any
   typePersonne :any
    dfe :any
    namegerant :any
    prenomgerant :any
    typedeVente  :any
    categorie :any
    Numerocompte:any
    namebank:any
    habitiation:any
    lieuboutique:any
  onClickSubmit(data) {

    var match = true;
    // console.log("cni : ",this.file_cni);
    // console.log("registre : ",this.file_registre);
    // console.log("dfe : ",this.file_dfe);
  
    if(this.step  ==1){
      console.log("data is :",data);
      this.nom = data.lname;
      this.prenom = data.fname;
      this.phone = data.phone;
      this.email = data.email;
      this.ville = data.ville;
      this.gerantphone = data.gerantphone;
      this.typePersonne = data.typePers;
      this.habitiation = data.habitiation;
      this.lieuboutique = data.lieuboutique

    if(this.phone){
      console.log("phone : ",this.phone.length)
       //pass = data.password;

      if(this.phone.length === 10){
        this.phone = "+"+this.selectedCountryCode+' '+this.phoneNumber
        console.log(this.file_cni);
        if(this.file_cni!==null){
       
        }else{
          this.namefile_cni = "null"
          
          // match = false;
          // Swal.fire({
          //   icon: 'warning',
          //   title: 'Choisissez une Cni!',
          //   text:  'Choisissez une Cni!',
          //   showConfirmButton: true,
          //   timer: 2000
          // });
        }
        if(this.file_registre!==null){
          //  match = true; 

          }else{
            this.namefile_registre = "null"
            // match = false;
            // Swal.fire({
            //   icon: 'warning',
            //   title: 'Choisissez un registre de commerce!',
            //   text:  'Choisissez un registre de commerce!',
            //   showConfirmButton: true,
            //   timer: 2000
            // });
          } 
          if(this.file_dfe !== null){

          }else{
            this.namefile_dfe = "null"

          }
        if(this.gerantphone.length === 10){
          this.gerantphone =  "+"+this.selectedCountryCode+' '+this.phoneNumbergerant
        }else{
          match = false;
          Swal.fire({
            icon: 'warning',
            title: 'Entrez un contact de 10 chiffre!',
            text:  'le champ numero de telephone du gerant doit contenir de 10 chiffre!',
            showConfirmButton: true,
            timer: 3000
          });
        }
      }else{
        match = false;
        Swal.fire({
          icon: 'warning',
          title: 'Entrez un contact de 10 chiffre!',
          text:  'le champ numero de telephone doit contenir de 10 chiffre!',
          showConfirmButton: true,
          timer: 3000
        });
      }
    }else{
      match = false;
      Swal.fire({
        icon: 'warning',
        title: 'Entrez un numero!',
        text: 'Entrez un numero!',
        showConfirmButton: true,
        timer: 2000
      });
    }
    //  if(!match) return;
    }

    if(this.step == 2){
      if(this.TypeVenteChoisi.length == 0){
        this.TypeVide = true;
        setTimeout(() => {
          this.TypeVide = false;
        }, 2500);
      }else{
        this.TypeVide = false;

        if(this.ChoixCategorie.length==0){
          this.CateVide = true
          setTimeout(() => {
            this.CateVide = false;
          }, 2500);
        }else{
          this.CateVide = false
          this.namegerant = data.namegerant
          this.prenomgerant = data.prenomgerant
          this.typedeVente  = this.TypeVenteChoisi.toString()
          this.categorie =this.ChoixCategorie.toString()
        }
      }
    }

    if(this.step==3||this.step == 4){
      this.Numerocompte = data.Numerocompte 
      this.namebank = data.namebank
    }
    if(!this.TypeVide&&!this.CateVide&&match){
      if(this.step<=3){
        this.step= this.step  + 1;
      }
      if(this.step==4){
    Swal.fire('Patientez svp!!!')
    Swal.showLoading(Swal.getDenyButton())
    console.log("final step is:",this.step);
     let user = {
      "nom":this.nom==''?"null":this.nom,
      "prenom":this.prenom==''?"null":this.prenom,
      "email":this.email==''?"defaultmail@ld.ci":this.email,
      "numero":this.phone==''?"null":this.phone,
      "statut_demande":"initie",
      "ville":this.ville==''?"null":this.ville,
      "lieuHabitation":this.LieuHabitation==''?"null":this.LieuHabitation,
      "urlCni":this.namefile_cni,
      "urlRegistre":this.namefile_registre,
      "urlDfe":this.namefile_dfe,
      "typeVente":this.typedeVente,
      "boutiquelieu":this.LieuMagasin==''?"null":this.LieuMagasin,
      "numeroGerant":this.gerantphone==''?"null":this.gerantphone,
      "nomGerant":this.namegerant==''?"null":this.namegerant,
      "prenomGerant":this.prenomgerant==''?"null":this.prenomgerant,
      "CategorieProduit":this.categorie,
      "typerPersonne":this.typePersonne==null?"null":this.typePersonne,
      "nomBanque":this.namebank==''?"null":this.namebank,
      "numeroBancaire":this.Numerocompte==''?"null":this.Numerocompte,
      "typeDemande":"fournisseur",
      "engin":"null"
       }
       console.log("body :",user);
       const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
      const body =JSON.stringify(user);
     // console.log("body :",user);
     this.http
       .post(GlobalConstants.apiURL+'/demandefournisseur/addDemandefournisseur.json?espace=ecommerce', body, {
         headers: headers,
       })
      .subscribe((res) =>{
      console.log(res);
      if(res['response']['code'] === "200"){
       Swal.fire({
        icon: 'success',
        title: 'Bienvenue',
        text: 'Demande reussie!',
        showConfirmButton: true,
        timer: 2000
      });
    var  isUplaod = false
      this.UplaodIamge(this.file_registre).subscribe((res:any)=>{
        console.log(res)
        if(res.response.result === true){
          isUplaod = true
        }else{
          isUplaod = false
        }
      },
      error=>{

      },()=>{
        console.log(this.file_cni,this.file_registre,this.file_dfe)
        if(this.file_cni !== null &&  this.file_registre!==null&&this.file_dfe!==null){
          this.UplaodIamge(this.file_cni).subscribe((res:any)=>{
            console.log(res)
            if(res.response.result === true){
              isUplaod = true
            }else{
              isUplaod = false
            }
          },error=>{},
          ()=>{
            this.UplaodIamge(this.file_dfe).subscribe((res:any)=>{
              console.log(res)
              if(res.response.result === true){
                isUplaod = true
                this.router.navigate(['/']);
              }else{
                isUplaod = false
              }
            })
          })
        }else{
          this.router.navigate(['/']);
        }

      });
      }else if(res['response']['code'] === "402"){
        Swal.fire({
          icon: 'error',
          title: 'Demande refusé!',
          text: 'Cet Numero est deja utilié!',
          showConfirmButton: true,
          timer: 2500
        });

      }else{
       //this.alertConfirmation()
       Swal.fire({
        icon: 'error',
        title: 'Demande refusé!',
        text: 'veuillez reessayer!',
        showConfirmButton: true,
        timer: 2500
      });
      }
      }
     );
      }
    }
   }

   UplaodIamge(Formadata:any){
      const headers = new HttpHeaders({
       'Authorization': `Bearer ${this.token}`,
     //  'Content-Type': 'multipart/form-data'
   })
   let formParams = new FormData();
   formParams.append('image', Formadata)
   return this.http.post(GlobalConstants.apiURL+'/uploads/saveImage.json?espace=ecommerce',formParams,{headers: headers})
   
   }
  ngOnInit(): void {
    this.GetallCategorieProduit()
    this.typeVente = this.titles[0]['name'];
  }




  iti:any;
  iti2:any;

  selectedCountryCode;
  selectedCountryCode2;

  @ViewChild('telInput') telInput;
  @ViewChild('telInput2') telInput2;
  @Input() phoneNumber = '';
  @Input() phoneNumbergerant = '';

  @Input() cssClass = 'form-control';
  @Output() phoneNumberChange = new EventEmitter<string>();
  ngAfterViewInit(){
    // const input = document.querySelector("#" + this.inputId);
    this.iti = intlTelInput(this.telInput.nativeElement, {
        utilsScript: "assets/scripts/utils.js",
        // initialCountry: "auto",
        nationalMode: false,
        formatOnDisplay: true,
        initialCountry:'ci',
        separateDialCode:true


    });
    this.selectedCountryCode = this.iti.getSelectedCountryData().dialCode;
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    this.iti2 = intlTelInput(this.telInput2.nativeElement, {
      utilsScript: "assets/scripts/utils.js",
      // initialCountry: "auto",
      nationalMode: false,
      formatOnDisplay: true,
      initialCountry:'ci',
      separateDialCode:true


  });
  this.selectedCountryCode2 = this.iti2.getSelectedCountryData().dialCode;
}

  ngOnChanges(changes: SimpleChanges) {

  }
  ngOnDestroy(){
      this.iti.destroy();
  }
  
  onFocus = () =>{
    if(this.phoneNumber == undefined || this.phoneNumber == ""){
        var getCode = this.iti.getSelectedCountryData().dialCode;
       // this.phoneNumber = "+" + getCode;
        this.phoneNumber = "";
  
    }
  }

  onFocus2 = () =>{
    if(this.phoneNumbergerant == undefined || this.phoneNumbergerant == ""){
        var getCode = this.iti.getSelectedCountryData().dialCode;
       // this.phoneNumber = "+" + getCode;
        this.phoneNumbergerant = "";
  
    }
  }
  isInvalid = false;
  onBlur = ()=>{
    this.isInvalid = false;
    if(this.phoneNumber != undefined && this.phoneNumber.trim()){
        if(this.iti.isValidNumber()){
            this.isInvalid = false;
        }
        else{
            this.isInvalid = true;
        }
    }
  }
  onBlur2 = ()=>{
    this.isInvalid = false;
    if(this.phoneNumbergerant != undefined && this.phoneNumbergerant.trim()){
        if(this.iti.isValidNumber()){
            this.isInvalid = false;
        }
        else{
            this.isInvalid = true;
        }
    }
  }
  onInputKeyPress = (event: KeyboardEvent) =>{
    const allowedChars = /[0-9\+\-\ ]/;
  const allowedCtrlChars = /[axcv]/; // Allows copy-pasting
  const allowedOtherKeys = [
  'ArrowLeft',
  'ArrowUp',
  'ArrowRight',
  'ArrowDown',
  'Home',
  'End',
  'Insert',
  'Delete',
  'Backspace',
  ];
  
  if (
  !allowedChars.test(event.key) &&
  !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
  !allowedOtherKeys.includes(event.key)
  ) {
  event.preventDefault();
  }
  }

  onInputKeyPress2 = (event: KeyboardEvent) =>{
    const allowedChars = /[0-9\+\-\ ]/;
  const allowedCtrlChars = /[axcv]/; // Allows copy-pasting
  const allowedOtherKeys = [
  'ArrowLeft',
  'ArrowUp',
  'ArrowRight',
  'ArrowDown',
  'Home',
  'End',
  'Insert',
  'Delete',
  'Backspace',
  ];
  
  if (
  !allowedChars.test(event.key) &&
  !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
  !allowedOtherKeys.includes(event.key)
  ) {
  event.preventDefault();
  }
  }
  
  formatIntlTelInput() {
    if (typeof intlTelInputUtils !== 'undefined') { // utils are lazy loaded, so must check
        var currentText = this.iti.getNumber(intlTelInputUtils.numberFormat.E164);
        if (typeof currentText === 'string') { // sometimes the currentText is an object :)
            this.iti.setNumber(currentText); // will autoformat because of formatOnDisplay=true
        }
    }
  }
  
  onPhoneNumberChange = () =>{
    this.selectedCountryCode = this.iti.getSelectedCountryData().dialCode;
    // this.formatIntlTelInput();
    this.phoneNumberChange.emit(this.phoneNumber);
  }
}
