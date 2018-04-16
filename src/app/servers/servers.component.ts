import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName:string = 'test server';
  allowServer:boolean = false;
  newServerName:string;
  showInfo:boolean = false;

  newServers = ["test server1", "test server2"]
  constructor() { 
    
   setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.newServerName = this.serverName
    this.newServers.push(this.newServerName);
    this.showInfo = true;
  }
}
