import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId:number = 10;
  serverStatus:string = 'offline';
  serverCreationDay:string = "tomorrow";
  enableButton:boolean = false;
  cards:any = [
    {
    id:1,
    name:"Card one",
    description:'Angular is running in the development mode. Call enableProdMode to enable the production mode.',
    img:'../../assets/images/binary.jpg'
  },
  {
    id:2,
    name:"Card two",
    description:'Angular is running in the development mode. Call enableProdMode to enable the production mode.',
    img:'../../assets/images/binary.jpg'
  },{
    id:3,
    name:"Card three",
    description:'Angular is running in the development mode. Call enableProdMode to enable the production mode.',
    img:'../../assets/images/binary.jpg'
  },{
    id:4,
    name:"Card four",
    description:'Angular is running in the development mode. Call enableProdMode to enable the production mode.',
    img:'../../assets/images/binary.jpg'
  },
  {
    id:5,
    name:"Card four",
    description:'Angular is running in the development mode. Call enableProdMode to enable the production mode.',
    img:'../../assets/images/binary.jpg'
  },
  {
    id:6,
    name:"Card four",
    description:'Angular is running in the development mode. Call enableProdMode to enable the production mode.',
    img:'../../assets/images/binary.jpg'
  }
]
  constructor() { 
    setTimeout(()=>{
      this.enableButton = true;
    },2000)
  }

  ngOnInit() {
  }
  setStatus(event){
    console.log(event)
  }
  inputEvent(e){
    this.serverStatus =  e.target.value;
  }
  creationDay(inputVal){
    console.log(inputVal)
  }
  getCardDetail(cardData){
    console.log(cardData)
  }
}

