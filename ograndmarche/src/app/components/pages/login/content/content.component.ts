import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from '../../../../common/global-constants';
import { PanierService } from '../../../../services/paniers/panier.service';
import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private paramsroute: ActivatedRoute,private http: HttpClient,private router: Router,public panierService:PanierService) { }

  ngOnInit(): void {
   var  param_search = this.paramsroute.snapshot.params.variable;
   if (param_search =="initialise") {
    this.forgotpass = true;
   }
//console.log("reset :",param_search)
    if(localStorage.getItem('cartItems')){
    }else{
      localStorage.clear();
    }
  }
  public imagurl  = GlobalConstants.host+"/img/produit_image/"

  iti;
  selectedCountryCode;
  @ViewChild('telInput') telInput;
  @Input() phoneNumber = '';
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
}

forgetPass(){
  this.forgotpass = true
}

back(){ 
  this.forgotpass = false ;
  this.verificateCompte = false;
   this.changePass = false;
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
  alertConfirmation() {

    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
  // do connexion
  onClickSubmit(data) {
    //localStorage.clear();
    Swal.fire('Patientez svp!!!')
    Swal.showLoading(Swal.getDenyButton())
     var email = data.username;
     var pass = data.password;
    if(this.phoneNumber.length == 0){
      Swal.fire({
        icon: 'warning',
        title: 'Entrez un contact de 10 chiffre!',
        text:  '',
        showConfirmButton: true,
        timer: 2000
      });

    }else if(this.phoneNumber.length == 10){
      var getCode = this.iti.getSelectedCountryData().dialCode;
      this.phoneNumber = "+"+getCode+" "+this.phoneNumber
      console.log(this.phoneNumber);
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Entrez un contact de 10 chiffre!',
        text:  '',
        showConfirmButton: true,
        timer: 2000
      });
    }
    let user = {
      "contact":this.phoneNumber,
      "password":pass
    }
     const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );
     const body=JSON.stringify(user);
    // console.log("voici : ",body)
    this.http
      .post(GlobalConstants.api_auth+'/login.json', body, {
        headers: headers,
      })
     .subscribe((res) =>{
     // console.log("resultat: ",res);
     if(res['code'] === 200){

      localStorage.removeItem('iduser');
      localStorage.removeItem('token');
      localStorage.removeItem('name');

      localStorage.setItem('iduser',res['data']['id'])
      localStorage.setItem('token',res['token'])
      localStorage.setItem('name',res['data']['name'])
      console.log("voici le token connexion: ",res['token'])
      if(this.panierService.getCart().length>0){
        this.router.navigate(['/cart']);
        console.log('je suis ici')
      }else{
        this.router.navigate(['/']);
      }

     }else{
      this.phoneNumber =""
      //this.alertConfirmation()
      //Swal.fire('Connexion echoué!', 'Email ou mot de passe incorrecte.', 'error');
      Swal.fire({
        icon: 'error',
        title: 'Connexion echoué!',
        text: 'Email ou mot de passe incorrecte',
        showConfirmButton: true,
        timer: 1000
      });
     }
    }
   );
    //Swal.close();
    //console.log(Swal.isLoading());
 }
 verificateCompte = false;
 validationcode = "";
 changePass = false;
 forgotpass = false

 validatecode(data){
  Swal.fire('Patientez svp!!!')
  Swal.showLoading(Swal.getDenyButton())
  if(data.code == this.validationcode){
    this.changePass = true;
    this.forgotpass  = false;
    this.verificateCompte = false
    Swal.fire({
      icon: 'success',
      title: 'Code verifié!',
      text: 'Veuillez confirmer le code de validation',
      showConfirmButton: true,
      timer:2000
    });
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Impossible de valider!',
      text: 'Entrez un bon code de validation',
      showConfirmButton: true,
      timer: 2500
    });
  }

 }

 User:any;
 onClickUpdateUser(data) {
  Swal.fire('Patientez svp!!!')
  Swal.showLoading(Swal.getDenyButton())
  var pass = '123';
  var name = this.User.name;
  var phone = this.User.contact;
  var email = this.User.email;
  var localite = this.User.locality;
  var match = true;
  if(email ==''){
    email='lidardefaultmail@lidar.ci'
  }
  if(data.pass1 === data.pass2){
     pass = data.pass1;
  }else{
    match = false;
    Swal.fire({
      icon: 'warning',
      title: 'Entrez le meme mot de passe!',
      text: 'Entrez le meme mot de passe!',
      showConfirmButton: true,
      timer: 2000
    });
  }

 if(!match) return;
 let user = {
  "name":name,
  "contact":phone,
  "email":email,
  "locality":localite,
  "user_type":"AGENCE",
  "username":this.User.username,
  "password":pass,
  "role":"gpublic",
  "CoustumerID":"0"
  }
  const headers = new HttpHeaders()
 .append(
   'Content-Type',
   'application/json'
 );
 const body=JSON.stringify(user);
 console.log(user)
 this.http
   .post(GlobalConstants.api_auth+'/edituser/'+this.User.id+'.json', body, {
     headers: headers,
   })
  .subscribe((res) =>{
  // console.log(res);
  if(res['response']['code'] === 200){
   Swal.fire({
    icon: 'success',
    title: 'Changement de mot de passe reuissi',
    text: 'votre mot de passe a été changé',
    showConfirmButton: true,
    timer: 2000
  });
  this.forgotpass =false
  this.verificateCompte = false
  this.changePass = false
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate(["login"]);
});
  }else{
   //this.alertConfirmation()
   Swal.fire({
    icon: 'error',
    title: 'Changement de mot de passe echoué!',
    text: 'verifier votre connexion internet!',
    showConfirmButton: true,
    timer: 2000
  });
  }
  }
 );
}
 onClickValidateCompte(data) {
  this.validationcode = String(Math.floor(100000 + Math.random() * 900000))
  //localStorage.clear();
  Swal.fire('Patientez svp!!!')
  Swal.showLoading(Swal.getDenyButton())
   var email = data.email;

  let user = {
    "email":email,
    "codevalidation":this.validationcode
  }
   const headers = new HttpHeaders()
  .append(
    'Content-Type',
    'application/json'
  );
   const body=JSON.stringify(user);
  this.http.post(GlobalConstants.api_auth+'/forgetPass.json', body, {
      headers: headers,
    })
   .subscribe((res) =>{
    console.log(res['response'])
   if(res['response']['code'] === '200'){
    Swal.fire({
      icon: 'success',
      title: 'Code de validation envoyer!',
      text: 'Veuillez confirmer le code de validation',
      showConfirmButton: true,
      timer:2000
    });
   this.verificateCompte = true
   this.forgotpass = true
   this.User = res['response']['user']
    console.log(res['response']['user'])

   }else{
    this.validationcode = "";
    this.verificateCompte = false
  //  this.forgotpass = false
    //this.alertConfirmation()
    //Swal.fire('Connexion echoué!', 'Email ou mot de passe incorrecte.', 'error');
    Swal.fire({
      icon: 'error',
      title: 'Verification echoué!',
      text: 'Impossible de valider ce compte',
      showConfirmButton: true,
      timer: 2000
    });
   }
  }
 );

}

}
