import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  // Instagram
  instaclassname = "secondary-bg";
  // Footer style
  classname = "";
  ftlogo = "assets/img/logo_ready.png"

  constructor() { }

  ngOnInit(): void {
  }

}
