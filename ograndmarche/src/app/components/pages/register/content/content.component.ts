import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../../../common/global-constants';
import intlTelInput from 'intl-tel-input';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  iti;
  selectedCountryCode;
  public imagurl  = GlobalConstants.host+"/img/produit_image/"
  isInvalid = false;
  ngOnInit(): void {
  }
  // do inscription
  onClickSubmit(data) {
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
    if(data.password === data.passwordsecond){
       pass = data.password;
       console.log(phone.length);
      if(this.phoneNumber.length === 10){
        match = true;
        console.log("good nember");
        var getCode = this.iti.getSelectedCountryData().dialCode;
        this.phoneNumber = "+"+getCode+" "+this.phoneNumber
        console.log(this.phoneNumber);

      }else{
        match = false;
        Swal.fire({
          icon: 'warning',
          title: 'Entrez un contact de 10 chiffre!',
          text:  '',
          showConfirmButton: true,
          timer: 2000
        });
      }
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
    "contact":String(this.phoneNumber),
    "email":email,
    "locality":localite,
    "user_type":"AGENCE",
    "username":email,
    "password":pass,
    "role":"gpublic",
    "CoustumerID":"",
    "localisation":"CI",
    "urlprofile":"avatar.png"
    }
    const headers = new HttpHeaders()
   .append(
     'Content-Type',
     'application/json'
   );
   const body=JSON.stringify(user);
   console.log(user)
   this.http
     .post(GlobalConstants.api_auth+'/add.json', body, {
       headers: headers,
     })
    .subscribe((res) =>{
     console.log(res);
    if(res['response']['code'] === "200"){
     Swal.fire({
      icon: 'success',
      title: 'Bienvenue',
      text: 'Inscription reussie!',
      showConfirmButton: true,
      timer: 2000
    });
    this.router.navigate(['/login']);
    }else if(res['response']['code'] === "402"){
      Swal.fire({
        icon: 'error',
        title: 'Inscription refusé!',
        text: 'Cet Numero est deja utilisé!',
        showConfirmButton: true,
        timer: 2000
      });
      this.phoneNumber =""
    }else{
     //this.alertConfirmation()
     Swal.fire({
      icon: 'error',
      title: 'Inscription refusé!',
      text: 'veuillez verifier votre connexion internet!',
      showConfirmButton: true,
      timer: 2000
    });
    this.phoneNumber =""
    }
    }
   );
  }


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
}
