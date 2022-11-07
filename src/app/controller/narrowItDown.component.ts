import { Component } from '@angular/core';
import { MenuRepo } from '../model/menu.repository.model';
import { MenuItem } from '../model/MenuItem'; 

@Component({
  selector: 'narrow-it-down-controller',
  templateUrl: './narrowItDown.component.html'
})
export class NarrowItDown {
  title = 'FrontendAssignment8';
  searchValue:string = "";
  found: MenuItem[]=[];
  searched: boolean=false;

  constructor(private menuRepo: MenuRepo){
  }

  search(searchValue: string){
      this.searched=true;
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

  isEmpty(): boolean{
    return (this.found.length===0 && this.searched);
  }
}
