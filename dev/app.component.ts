import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router"
import {ROUTER_DIRECTIVES} from "angular2/router";
import {LoginComponent} from "./login.component/login.component";
import {ListGamesComponent} from "./listGames.component/listGames.component";
import {AddGameComponent} from "./addGame.component/addGame.component";

@Component({
    selector: 'my-app',
    template: `
      <div class="main">
        <router-outlet></router-outlet>
      </div>  
      `,
    directives: [LoginComponent,ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/login', name: 'Login', component: LoginComponent, useAsDefault:true},
  {path: '/listGames', name: 'ListGames', component: ListGamesComponent},
  {path: '/addGame', name: 'AddGame', component: AddGameComponent},

])

export class AppComponent {

}
