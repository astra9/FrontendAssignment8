import { Component } from '@angular/core';
import { MenuRepo } from './model/menu.repository.model';
import { MenuItem } from './model/MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontendAssignment8';
  searchValue:string = "";
  found: MenuItem[]=[];

  constructor(private menuRepo: MenuRepo){
  }

  search(searchValue: string){
      this.found=this.menuRepo.getMatchedMenuItems(searchValue);
  }

  getSearchedItems(): MenuItem[] {
    return this.found;
  }

  removeMenuItem(id:number){
    let index = this.found.findIndex(p => p.id===id);
    if (index > -1) {
        this.found.splice(index, 1);
    }
  }  
}
