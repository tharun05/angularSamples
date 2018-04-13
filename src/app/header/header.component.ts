import {Component} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent{

    header:string = 'Digital-lync technologies'

    companies:any = [{
        name:'digitallync',
        location:'gachibowli'
    },
    {
        name:'IBM',
        location:'gachibowli'
    },
    {
        name:'HCL',
        location:'gachibowli'
    }]
    companylist:any = [{
        name:'digitallync',
        location:'gachibowli'
    }]
    constructor(){
        
    }
}