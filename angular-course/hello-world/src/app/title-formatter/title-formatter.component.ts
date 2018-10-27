import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-formatter',
  templateUrl: './title-formatter.component.html',
  styleUrls: ['./title-formatter.component.css']
})
export class TitleFormatterComponent implements OnInit {

  text = '';

  constructor() { }

  ngOnInit() {
  }

}
