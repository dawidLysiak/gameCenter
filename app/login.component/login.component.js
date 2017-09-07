System.register(["angular2/core", "../login.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, login_service_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_loginService, _router) {
                    this._loginService = _loginService;
                    this._router = _router;
                }
                LoginComponent.prototype.onLogin = function (login, password) {
                    var _this = this;
                    this._loginService.login(login, password)
                        .subscribe(function (data) { return _this.user = data; }, function (error) { return _this.response = "Niepoprawne dane"; }, function () { return _this.checkIfLogin(); });
                };
                LoginComponent.prototype.checkIfLogin = function () {
                    if (this.response != "Niepoprawne dane") {
                        this.userKeys = Object.keys(this.user);
                        this.userID = this.user[this.userKeys[0]];
                        var url = '';
                        if (this.userID != '') {
                            this._router.navigate(["ListGames", { id: this.userID }]);
                        }
                        else {
                            this.response = "Niepoprawne dane";
                        }
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: "login",
                        templateUrl: 'dev/login.component/login.component.html',
                        styleUrls: ['dev/login.component/login.component.css'],
                        providers: [login_service_1.LoginService]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFNSSx3QkFBc0IsYUFBMkIsRUFBVSxPQUFlO29CQUFwRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUFFLENBQUM7Z0JBRTdFLGdDQUFPLEdBQVAsVUFBUSxLQUFLLEVBQUMsUUFBUTtvQkFBdEIsaUJBTUM7b0JBTEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLFFBQVEsQ0FBQzt5QkFDbkMsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLEVBQ3hCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsRUFBbEMsQ0FBa0MsRUFDM0MsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUNELHFDQUFZLEdBQVo7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRXhDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNDLElBQUksR0FBRyxHQUFFLEVBQUUsQ0FBQzt3QkFFWixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7NEJBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFDLEVBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFELENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQzt3QkFDdkMsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBbkNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFdBQVcsRUFBQywwQ0FBMEM7d0JBQ3RELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO3dCQUN0RCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO3FCQUMxQixDQUFDOztrQ0FBQTtnQkErQkYscUJBQUM7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELDJDQThCQyxDQUFBIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgZGF3aWQgb24gMzEuMDUuMTcuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiXG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4uL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsb2dpblwiLFxuICB0ZW1wbGF0ZVVybDonZGV2L2xvZ2luLmNvbXBvbmVudC9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkZXYvbG9naW4uY29tcG9uZW50L2xvZ2luLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudHtcbiAgICBwdWJsaWMgdXNlcklEO1xuICAgIHB1YmxpYyB1c2VyVHlwZTtcbiAgICByZXNwb25zZSA6IHN0cmluZztcbiAgICBwdWJsaWMgdXNlcjtcbiAgICBwdWJsaWMgdXNlcktleXM7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpe31cblxuICAgIG9uTG9naW4obG9naW4scGFzc3dvcmQpIHtcbiAgICAgIHRoaXMuX2xvZ2luU2VydmljZS5sb2dpbihsb2dpbixwYXNzd29yZClcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnVzZXIgPSBkYXRhLFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5yZXNwb25zZSA9IFwiTmllcG9wcmF3bmUgZGFuZVwiLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5jaGVja0lmTG9naW4oKSk7XG4gICAgfVxuICAgIGNoZWNrSWZMb2dpbigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzcG9uc2UgIT0gXCJOaWVwb3ByYXduZSBkYW5lXCIpIHtcbiAgICAgICAgICAgICB0aGlzLnVzZXJLZXlzID0gT2JqZWN0LmtleXModGhpcy51c2VyKTtcblxuICAgICAgICAgICAgdGhpcy51c2VySUQgPSB0aGlzLnVzZXJbIHRoaXMudXNlcktleXNbMF1dO1xuICAgICAgICAgICAgdmFyIHVybCA9Jyc7XG5cbiAgICAgICAgICAgIGlmKHRoaXMudXNlcklEICE9ICcnKXtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiTGlzdEdhbWVzXCIse2lkOnRoaXMudXNlcklEfV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IFwiTmllcG9wcmF3bmUgZGFuZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
