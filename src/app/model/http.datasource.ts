import { from, Observable } from "rxjs";
import { Injectable,Inject,InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MenuItem } from "./MenuItem";
import { MenuItems } from "./MenuItems";

export const URL= new InjectionToken("url");

@Injectable()
export class HttpDataSource {
    constructor(private http: HttpClient, 
        @Inject(URL) private url:string){}
    
    getData(): Observable<MenuItems>{
        return this.http.get<MenuItems>(this.url);
    }
}