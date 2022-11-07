import { Injectable } from "@angular/core";
import { MenuItem } from "./MenuItem";
import { HttpDataSource } from "./http.datasource";

@Injectable()
export class MenuRepo{
    private menuItems: MenuItem[]=Array<MenuItem>();
    constructor(private dataSource: HttpDataSource){
        this.dataSource.getData().subscribe(data => this.menuItems=data.menu_items);
    }

    getMatchedMenuItems(searchValue: string): MenuItem[]{
        return this.menuItems.filter(item => {
            return item.description?.includes(searchValue); 
        });
    }
}