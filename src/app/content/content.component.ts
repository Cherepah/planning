import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(event: any) {
    let items = event.target.parentElement.children;
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('tabs__item_active');
    }
    event.target.classList.add('tabs__item_active');
  }
  closeEditbar() {
    let editbar = document.querySelector('.editbar');
    editbar?.classList.remove('editbar_visible');
  }

}
