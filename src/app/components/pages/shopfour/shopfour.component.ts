import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopfour',
  templateUrl: './shopfour.component.html',
  styleUrls: ['./shopfour.component.css']
})
export class ShopfourComponent implements OnInit {
  // Instagram
  instaclassname = "secondary-bg";
  // Footer style
  classname = "";
  ftlogo = "assets/img/logo_ready.png"

  constructor() { }

  ngOnInit(): void {
  }

}
