System.register(['angular2/core', "angular2/router", "./login.component/login.component", "./listGames.component/listGames.component", "./addGame.component/addGame.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, login_component_1, listGames_component_1, addGame_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (listGames_component_1_1) {
                listGames_component_1 = listGames_component_1_1;
            },
            function (addGame_component_1_1) {
                addGame_component_1 = addGame_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <div class=\"main\">\n        <router-outlet></router-outlet>\n      </div>  \n      ",
                        directives: [login_component_1.LoginComponent, router_2.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: true },
                        { path: '/listGames', name: 'ListGames', component: listGames_component_1.ListGamesComponent },
                        { path: '/addGame', name: 'AddGame', component: addGame_component_1.AddGameComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBO2dCQUFBO2dCQUVBLENBQUM7Z0JBbkJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSwrRkFJUDt3QkFDSCxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFDLDBCQUFpQixDQUFDO3FCQUNqRCxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1gsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUUsWUFBWSxFQUFDLElBQUksRUFBQzt3QkFDN0UsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFDO3dCQUN0RSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUM7cUJBRWpFLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL2xvZ2luLmNvbXBvbmVudC9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7TGlzdEdhbWVzQ29tcG9uZW50fSBmcm9tIFwiLi9saXN0R2FtZXMuY29tcG9uZW50L2xpc3RHYW1lcy5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRkR2FtZUNvbXBvbmVudH0gZnJvbSBcIi4vYWRkR2FtZS5jb21wb25lbnQvYWRkR2FtZS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICA8L2Rpdj4gIFxuICAgICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTG9naW5Db21wb25lbnQsUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICB7cGF0aDogJy9sb2dpbicsIG5hbWU6ICdMb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsIHVzZUFzRGVmYXVsdDp0cnVlfSxcbiAge3BhdGg6ICcvbGlzdEdhbWVzJywgbmFtZTogJ0xpc3RHYW1lcycsIGNvbXBvbmVudDogTGlzdEdhbWVzQ29tcG9uZW50fSxcbiAge3BhdGg6ICcvYWRkR2FtZScsIG5hbWU6ICdBZGRHYW1lJywgY29tcG9uZW50OiBBZGRHYW1lQ29tcG9uZW50fSxcblxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdfQ==
