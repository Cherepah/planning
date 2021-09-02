import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openEditbar(event:any) {
    let editbar = document.querySelector('.editbar');
    editbar?.classList.add('editbar_visible');
  }
}
