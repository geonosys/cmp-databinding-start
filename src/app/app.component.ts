import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test server' }];

    onServerAdded(serverData: {serverName: string, serverContent: string }) {
      console.log('Server created ' + serverData.serverName );
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(bluePrintData: {serverName: string, serverContent: string }) {
    console.log('bluePrint created ' + bluePrintData.serverName + ' ' + bluePrintData.serverContent );
    this.serverElements.push({
      type: 'bluePrint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

}


