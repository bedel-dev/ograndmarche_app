import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // Instagram
  instaclassname = "secondary-bg";
  // Footer style
  classname = "";
  ftlogo = "assets/img/logo_ready.png"

  constructor() { }

  ngOnInit(): void {
  }

}
