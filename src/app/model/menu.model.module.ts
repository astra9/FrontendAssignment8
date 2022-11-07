import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpDataSource, URL } from "./http.datasource";
import { MenuRepo } from './menu.repository.model';

@NgModule({
    imports: [HttpClientModule],
    providers: [HttpDataSource, MenuRepo,
        {
            provide: URL, 
            useValue: "https://davids-restaurant.herokuapp.com/menu_items.json"
        }
    ]

})
export class MenuModel{}