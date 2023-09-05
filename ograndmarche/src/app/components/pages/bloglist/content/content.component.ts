import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import blogpost from '../../../../data/blog.json';
import blogtags from '../../../../data/blogtags.json';
import { CommandeService } from 'src/app/services/commandes/commande.service';
import { Prodruit } from 'src/app/data/prodruits';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import intlTelInput from 'intl-tel-input';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../../../../common/global-constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // pagination
  page: number = 1;
  constructor(private http: HttpClient,private changeDetector: ChangeDetectorRef,private commandeService:CommandeService,public router:Router,private modalService: NgbModal) { }
  userprofile = true;
  updateUser = false;
  modalContent: any;

  User:any={}
  ngOnInit(): void {
     this.GetUserById()

  }
  display = false;
  dynamicContent = '';
  @ViewChild('telInput',{ static: false }) telInput: ElementRef;

  onButtonClick() {
    this.display = true;
    this.changeDetector.detectChanges();
   // this.telInput.nativeElement.textContent = 'This is the dynamic content';
    //console.log(this.telInput.nativeElement)
      this.iti = intlTelInput(this.telInput.nativeElement, {
      utilsScript: "assets/scripts/utils.js",
      // initialCountry: "auto",
      nationalMode: false,
      formatOnDisplay: true,
      initialCountry:'ci',
      separateDialCode:true
  });
  this.selectedCountryCode = this.iti.getSelectedCountryData().dialCode;
  console.log("code pays :",this.selectedCountryCode)

  }

  test:any;
  open(content: any, item: any) {
    this.modalContent = item
    this.modalService.open(content, { centered: true, size: "lg", windowClass: 'andro_quick-view-modal p-0' });
  }
  iti;
  selectedCountryCode;

  isInvalid = false;
  pipe = new DatePipe('en-US');
  date:any;
  name:any
  email:any
  localite:any
  public imagurl  = GlobalConstants.host+"/img/produit_image/"

  GetUserById(){

    try{
      this.commandeService.GetUser().subscribe((res:Prodruit)=>{

        console.log("response est :",res)
        if(res['message']=="authentication failed Token not valide"){
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/login']);
          });

          Swal.fire({
            icon: 'error',
            title: 'votre session a expiré',
            text: 'veuillez vous reconnectez!',
            showConfirmButton: true,
            timer: 2000
          });
        }
        else if(res['response']['status']===true){
          const now =  new Date(res['response']['data'].created_at);
          const myFormattedDate = this.pipe.transform(now, 'short');
          var d = myFormattedDate.split(",")[0].split('/')
          var daynow = d[1];
          var month = d[0]
          var year = d[2]
          this.date = daynow+"/"+month+"/"+year
          res['response']['data'].created_at = this.date;


          this.User = res['response']['data']
          localStorage.setItem('userdata', JSON.stringify(this.User));
          console.log("user : ",JSON.parse(localStorage.getItem('userdata')))
          this.name = this.User.name
          if(this.User.name == "lidardefaultmail@lidar.ci"){
            this.email  == ""
          }else{
            this.email = this.User.email
          }

          this.localite  = this.User.locality
           var newnember = this.User.contact.split(" ")
          this.phoneNumber  =  newnember[1]
           console.log(this.phoneNumber)
        }
      },(error)=>{
        console.log("errors :",error)
        if(error['error']['message']=="Authentication is required to continue"){
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/login']);
          });

          Swal.fire({
            icon: 'error',
            title: 'votre session a expiré',
            text: 'veuillez vous reconnectez!',
            showConfirmButton: true,
            timer: 2500
          });

        }
      });

    }catch(e){

    }

  }
  UpdateUser(){
    // this.userprofile = false;
    // this.updateUser = true;
  }



onClickSubmit(data){



if(this.phoneNumber.includes(this.iti.getSelectedCountryData().dialCode)){


}else{
  console.log('pas dedans')
  data.phone = "+"+this.iti.getSelectedCountryData().dialCode+" "+this.phoneNumber
}
console.log("user :",data)
this.onClickUpdateUser(data)

}

onClickUpdateUser(data) {
  Swal.fire('Patientez svp!!!')
  Swal.showLoading(Swal.getDenyButton())
  var pass = '123';
  var name = data.name;
  var phone = data.phone;
  var email = data.email;
  var localite = data.localite;
  var match = true;
  if(email ==''){
    email='lidardefaultmail@lidar.ci'
  }
  console.log("phone: ",data.phone)
  if(phone.length !== 0){
    // pass = data.pass1;
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

 if(!match) return;
 let user = {
  "name":name,
  "contact":phone,
  "email":email,
  "locality":localite,
  "user_type":"AGENCE",
  "username":email,
  "role":this.User.role,
  "CoustumerID":this.User.CoustumerID
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
    title: 'Mise à jour réussi',
    text: 'Mise à jour réussi',
    showConfirmButton: true,
    timer: 2000
  });
  this.GetUserById();
  localStorage.setItem('iduser',res['response']['data']['id'])
  localStorage.setItem('name',res['response']['data']['name'])
  console.log(res['response']['data'])
//   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
//     this.router.navigate(["login"]);
// });
  }else{
   //this.alertConfirmation()
   Swal.fire({
    icon: 'error',
    title: 'Mise a jour refusé!',
    text: 'Mise a jour refusé!',
    showConfirmButton: true,
    timer: 2000
  });
  }
  }
 );
}


@Input() phoneNumber = '';
@Input() cssClass = 'form-control';
@Output() phoneNumberChange = new EventEmitter<string>();
ngAfterViewInit(){
  // const input = document.querySelector("#" + this.inputId);

}
ngOnChanges(changes: SimpleChanges) {

}
ngOnDestroy(){
  //this.iti.destroy();
}

onFocus = () =>{
  if(this.phoneNumber == undefined || this.phoneNumber == ""){
      var getCode = this.iti.getSelectedCountryData().dialCode;
     // this.phoneNumber = "+" + getCode;
      this.phoneNumber = "";

  }
}

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
Reset(){
  this.forgotpass = true
  this.display = false;
}
verificateCompte = false;
validationcode = "";
changePass = false;
forgotpass = false

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
  this.http
    .post(GlobalConstants.api_auth+'/forgetPass.json', body, {
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

onClickSaveUpdateUser(data) {
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
}
