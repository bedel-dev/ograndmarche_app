import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor() { }
  instaclassname = "primary-bg";
  // Footer style
  classname = "";
  ftlogo = "assets/img/logo_ready.png"
  ngOnInit(): void {
  }

}
