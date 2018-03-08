import { Component } from '@angular/core';

@Component({
    // selector: '[app-server]',
    //  selector: '.app-server',
     selector: 'app-server',
    templateUrl: 'server.component.html'

})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';

    getServerName(){
        return this.serverStatus;
    }


}
