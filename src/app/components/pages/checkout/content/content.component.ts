import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import intlTelInput from 'intl-tel-input';
import { GlobalConstants } from 'src/app/common/global-constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public http:HttpClient,private router: Router) { 
    
  }
  typeVente:string = "prod";
  titles:Array<Object> = [
    {name: "Produit consommable"},
    {name: "Intrant"},
    {name: "Outils"}
];
// fileUplaod()
typePers:string = "null";
file_cni:any =null
namefile_cni:string
file_data_cni:any = null

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
  typeTransporteur:boolean = false
  EnginVide:boolean=false
  PoidVide:boolean=false

  isLivreur:boolean = false
  isTransporteur:boolean = false
 Listengin:any[]=[];
  SelectType(data){

    if(data.target.value =="Livreur"){
      this.isLivreur = true;
      this.isTransporteur = false
    }
    if(data.target.value =="Transporteur"){
      this.isLivreur = false;
      this.isTransporteur = true
    }
  }
  ismoto:boolean = false;
  isvoiture:boolean = false;
  iscamion:boolean = false;
  isremorque:boolean = false;
  isfourgonette:boolean = false;
  ListPoid:any[] = [];
  choicePoids(data){
    console.log(data.target.value)
    if(data.target.checked){
      this.ListPoid.push(data.target.value);
    }else{
      this.ListPoid =   this.ListPoid.filter((item) =>  {return item !==data.target.value});
  
    }
    console.log(this.ListPoid)

  }

  choice(data){
  console.log(data.target.value)
  if(data.target.checked){
    this.Listengin.push(data.target.value);
    if(data.target.value == "Camion"){
      this.iscamion=true
    }
    if(data.target.value == "Remorque"){
      this.isremorque=true
    }
    if(data.target.value == "Fourgonnette"){
      this.isfourgonette=true
    }
  }else{
    this.Listengin =   this.Listengin.filter((item) =>  {return item !==data.target.value});
    if(data.target.value == "Camion"){
      this.iscamion=false
    }
    if(data.target.value == "Remorque"){
      this.isremorque=false
    }
    if(data.target.value == "Fourgonnette"){
      this.isfourgonette=false
    }
  }

  console.log(this.isremorque)
  console.log(this.Listengin)
  }
  // save fournisseur




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
   typeTransport :any
  onClickSubmit(data) {
  
    var match = true;
    console.log(data)
    if(this.step ==1){
      this.nom = data.lname;
      this.prenom = data.fname;
      this.phone = data.phone;
      this.email = data.email;
      this.ville = data.ville;
      //this.gerantphone = data.phoneChauffeur; 
      this.gerantphone = "null";
      this.habitiation = data.habitation;
      console.log("phone : ",this.gerantphone.length);
    if(this.phone){
      if(this.phone.length === 10){
        this.phone = "+"+this.selectedCountryCode+' '+this.phoneNumber
        if(match == true){
          if(this.file_cni!==null){
            match = true;
          }else{
            this.namefile_cni = "null"
            console.log(match); 
            Swal.fire({ 
              icon: 'warning',
              title: 'Sélectionnez votre pièce didentité',
              text:  "Erreur sur le champs 'Sélectionnez votre pièce d'identité'",
              showConfirmButton: true,
              timer: 2000
            });
            //if(match){
            match = false;
           // }
          }
        }
        if(match == true){
          if(this.typePers!=="null"){ 
            if(this.typePers=='Morale'){
              if(this.file_registre!==null){
                match = true;
              } else{
                this.namefile_registre = "null"
                if(match == true){
                  match = false;
                }
                Swal.fire({
                  icon: 'warning',
                  title: 'Sélectionnez votre régistre de commerce',
                  text:  "Erreur sur le champs 'Sélectionnez votre régistre de commerce'",
                  showConfirmButton: true,
                  timer: 2000
                });
              } 
            }else{
              this.namefile_registre = "null"
            }
          }else{
           // if(match == true){
              match = false;
            //}
            Swal.fire({
              icon: 'warning',
              title: 'Type de société',
              text:  "Erreur sur le champs 'Type de société'",
              showConfirmButton: true,
              timer: 2000
            });
          } 
        }  
        if(match == true){
        if(data.engin !==''){
          this.typeTransport = data.engin
          match = true; 
        }else{
          //if(match == true){
            match = false;
          //}
          Swal.fire({
            icon: 'warning',
            title: 'Type de transporteur',
            text:  "Erreur sur le champs 'Type de transporteur'",
            showConfirmButton: true,
            timer: 2000
          });
        }
        }      

        
        // if(this.gerantphone.length === 10){
        //   match = true;
        //   this.gerantphone = "+"+this.selectedCountryCode+' '+this.phoneNumberchauffeur

        // }else{
        //   
        //   Swal.fire({
        //     icon: 'warning',
        //     title: 'Entrez un contact de 10 chiffre!',
        //     text:  "Erreur sur le champs 'numero de telephone du chauffeur'",
        //     showConfirmButton: true,
        //     timer: 2000
        //   });
        // }


      }else{
        //match = false;
        Swal.fire({
          icon: 'warning',
          title: 'Entrez un contact de 10 chiffre!',
          text:  'Erreur sur le champ numero de telephone',
          showConfirmButton: true,
          timer: 2000
        });
      }
    }else{
      match = false;
      Swal.fire({
        icon: 'warning',
        title: 'Entrez un numero!',
        text:  'Entrez un numero!',
        showConfirmButton: true,
        timer: 2000
      });
    }
    }

    // if(this.step==2){
    //  // console.log(data.engin.length)
    //   if(data.engin.length ==0){
    //     this.typeTransporteur = true
    //    // console.log(this.typeTransporteur)
    //     setTimeout(() => {
    //       this.typeTransporteur = false;
    //     }, 2500);
    //   }else{
    //     this.typeTransporteur = false;
    //   }
    //   if(this.Listengin.length == 0){
    //     this.EnginVide = true;
    //     setTimeout(() => {
    //       this.EnginVide = false;
    //     }, 2500);
    //   }else{
    //     this.EnginVide = false;
    //     if(this.ListPoid.length==0&&this.isTransporteur){
    //       this.PoidVide = true
    //       setTimeout(() => {
    //         this.PoidVide = false;
    //       }, 2500);
    //     }else{
    //       this.PoidVide = false
    //       this.namegerant = data.nomConducteur
    //       this.prenomgerant = data.prenomConducteur
    //       this.typeTransport = data.engin
    //       this.typePers = data.typePers
    //       this.typedeVente  = this.Listengin.toString()
    //       this.categorie =this.ListPoid.toString()
    //     }
    //   }
    // }


    if(match){
    //   console.log("je suis la ")
    // if(this.step<=2){
    //   this.step= this.step+1;
    // }
    if(this.step==1){
    Swal.fire('Patientez svp!!!')
    Swal.showLoading(Swal.getDenyButton())
     let user = {
      "nom":this.nom===""?"null":this.nom,
      "prenom":this.prenom===""?"null":this.prenom,
      "email":this.email===""?"lidardefaultmail@lidar.ci":this.email,
      "numero":this.phone===""?"null":this.phone,
      "statut_demande":"initie",
      "ville":this.ville===""?"null":this.ville,
      "lieuHabitation":this.habitiation===""?"null":this.habitiation,
      "urlCni":this.namefile_cni,
      "urlRegistre":this.namefile_registre,
      "typeDemande":"Transporteur",
      "engin":this.typeTransport,
      "typerPersonne":this.typePers===null?"null":this.typePers,
      "nomGerant":this.namegerant===null?"null":this.namegerant,
      "prenomGerant":this.prenomgerant===""?"null":this.prenom,
      "typeVente": this.typedeVente===null?"null":this.typedeVente,
      "CategorieProduit":this.categorie===null?"null":this.categorie,
      "numeroGerant":this.gerantphone===""?"null":this.gerantphone
      }
       const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
      const body=JSON.stringify(user);
       console.log("body :",user);
     this.http
       .post(GlobalConstants.apiURL+'/demandefournisseur/addDemandefournisseur.json?espace=ecommerce', body, {
         headers: headers,
       })
      .subscribe((res) =>{
      console.log(res);
      if(res['response']['code'] === "200"){
       Swal.fire({
        icon: 'success',
        title: 'Reussie',
        text: 'Demande reussie!',
        showConfirmButton: true,
        timer: 2000
      });
    var  isUplaod = false
      if(this.file_registre!=null &&this.file_cni!=null){
        this.UplaodIamge(this.file_registre).subscribe((res:any)=>{
          console.log(res)
          if(res.response.result === true){
            isUplaod = true
          }else{
            isUplaod = false
          }
        },
        error=>{
  
        },
  
        ()=>{
          this.UplaodIamge(this.file_cni).subscribe((res:any)=>{
            console.log(res)
            if(res.response.result === true){
              isUplaod = true
              this.router.navigate(['/']);
            }else{
              isUplaod = false
            }
          },error=>{},
          ()=>{
            // setTimeout(() => {
  
            //   }, 1500);
          })
        });
      }else{
        
      }

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
    this.typeVente = this.titles[0]['name'];
  }




  iti:any;
  iti2:any;

  selectedCountryCode;
  @ViewChild('telInput') telInput;
  //@ViewChild('telInputdeux') telInput2;

  @Input() phoneNumber:any = '';
  @Input() phoneNumberchauffeur:any = '';

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


    ////////////////////////////////////////////
  //   this.iti2 = intlTelInput(this.telInput2.nativeElement, {
  //     utilsScript: "assets/scripts/utils.js",
  //     // initialCountry: "auto",
  //     nationalMode: false,
  //     formatOnDisplay: true,
  //     initialCountry:'ci',
  //     separateDialCode:true


  // });
  // this.selectedCountryCode = this.iti2.getSelectedCountryData().dialCode;
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
    if(this.phoneNumber == undefined || this.phoneNumber == ""){
        var getCode = this.iti.getSelectedCountryData().dialCode;
       // this.phoneNumber = "+" + getCode;
        this.phoneNumberchauffeur = "";
  
    }
  }
  isInvalid2 = false;
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
    this.isInvalid2 = false;
    if(this.phoneNumberchauffeur != undefined && this.phoneNumberchauffeur.trim()){
        if(this.iti.isValidNumber()){
            this.isInvalid2 = false;
        }
        else{
            this.isInvalid2 = true;
        }
    }
  }
  
  onInputKeyPress:any = (event: KeyboardEvent) =>{
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
  onInputKeyPress2:any = (event: KeyboardEvent) =>{
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
  onPhoneNumberChange2 = () =>{
    this.selectedCountryCode = this.iti.getSelectedCountryData().dialCode;
    // this.formatIntlTelInput();
    this.phoneNumberChange.emit(this.phoneNumberchauffeur);
  }
  step:any =1;
  retour(){
    if(this.step<=4){
      this.step= this.step -1;
      console.log("retour step est :",this.step)
    }
  }
}
