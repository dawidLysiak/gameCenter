System.register(["angular2/core", "angular2/router", "../admin.service"], function(exports_1, context_1) {
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
    var core_1, router_1, admin_service_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (admin_service_1_1) {
                admin_service_1 = admin_service_1_1;
            }],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent(_httpService, _appRouter) {
                    var _this = this;
                    this._httpService = _httpService;
                    this._appRouter = _appRouter;
                    this.selectedUser = {};
                    this._httpService.getAllUsers()
                        .subscribe(function (data) { _this.users = data; }),
                        function (error) { return alert("error"); },
                        function () { return console.log("finish"); };
                }
                AdminComponent.prototype.onSelect = function (user) {
                    this.selectedUser = user;
                    // if (this.selectedBook.status == ""){
                    //
                    // }
                };
                AdminComponent.prototype.updateUser = function (id, login, name, surname, password, date, email) {
                    var _this = this;
                    this._httpService.updateUser(id, login, name, surname, password, date, email)
                        .subscribe(function (data) { return _this.status = "Zaktualizowano"; }, function (error) { return _this.status = "Niepoprawne dane"; }, function () { return console.log("Finished"); });
                };
                AdminComponent.prototype.deleteUser = function (id) {
                    var _this = this;
                    this._httpService.deleteUser(id)
                        .subscribe(function (data) { return _this.status = "Usunięto"; }, function (error) { return _this.status = "Coś poszło nie tak"; }, function () { return console.log("Finished"); });
                };
                AdminComponent = __decorate([
                    core_1.Component({
                        selector: "admin",
                        templateUrl: 'dev/admin.component/admin.component.html',
                        styleUrls: ['dev/admin.component/admin.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [admin_service_1.AdminService]
                    }), 
                    __metadata('design:paramtypes', [admin_service_1.AdminService, router_1.Router])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC9hZG1pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBSUUsd0JBQXNCLFlBQTBCLEVBQVUsVUFBa0I7b0JBSjlFLGlCQXFDQztvQkFqQ3VCLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUFVLGVBQVUsR0FBVixVQUFVLENBQVE7b0JBRnJFLGlCQUFZLEdBQUUsRUFBRSxDQUFDO29CQUd0QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTt5QkFDMUIsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFLLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBLENBQUEsQ0FBQyxDQUFDO3dCQUNoQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBZCxDQUFjO3dCQUN2QixjQUFPLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFHekIsdUNBQXVDO29CQUN2QyxFQUFFO29CQUNGLElBQUk7Z0JBQ04sQ0FBQztnQkFFRCxtQ0FBVSxHQUFWLFVBQVcsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSztvQkFBekQsaUJBTUQ7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO3lCQUN2RSxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUE5QixDQUE4QixFQUN0QyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLEVBQWhDLENBQWdDLEVBQ3pDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBR0MsbUNBQVUsR0FBVixVQUFXLEVBQUU7b0JBQWIsaUJBTUM7b0JBTEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO3lCQUMzQixTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsRUFBeEIsQ0FBd0IsRUFDaEMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQixFQUFsQyxDQUFrQyxFQUMzQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQTVDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxPQUFPO3dCQUNqQixXQUFXLEVBQUUsMENBQTBDO3dCQUN2RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQzt3QkFDdEQsVUFBVSxFQUFDLENBQUMsMEJBQWlCLENBQUM7d0JBQzlCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7cUJBQzFCLENBQUM7O2tDQUFBO2dCQXVDRixxQkFBQztZQUFELENBckNBLEFBcUNDLElBQUE7WUFyQ0QsMkNBcUNDLENBQUEiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50L2FkbWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBkYXdpZCBvbiAzMS4wNS4xNy5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCJcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5pbXBvcnQge0xpYnJhcmlhblNlcnZpY2V9IGZyb20gXCIuLi9saWJyYXJpYW4uc2VydmljZVwiO1xuaW1wb3J0IHtSZWFkZXJTZXJ2aWNlfSBmcm9tIFwiLi4vcmVhZGVyLmNvbXBvbmVudC9yZWFkZXIuc2VydmljZVwiO1xuaW1wb3J0IHtBZG1pblNlcnZpY2V9IGZyb20gXCIuLi9hZG1pbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhZG1pblwiLFxuICB0ZW1wbGF0ZVVybDogJ2Rldi9hZG1pbi5jb21wb25lbnQvYWRtaW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGV2L2FkbWluLmNvbXBvbmVudC9hZG1pbi5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbQWRtaW5TZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50e1xuICBwdWJsaWMgdXNlcnM7XG4gIHB1YmxpYyBzZWxlY3RlZFVzZXIgPXt9O1xuICBwdWJsaWMgc3RhdHVzO1xuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSAgX2h0dHBTZXJ2aWNlOiBBZG1pblNlcnZpY2UsIHByaXZhdGUgX2FwcFJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0QWxsVXNlcnMoKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PnsgdGhpcy51c2VycyA9IGRhdGF9KSxcbiAgICAgICAgZXJyb3IgPT4gYWxlcnQoXCJlcnJvclwiKSxcbiAgICAgICAgKCkgPT4gIGNvbnNvbGUubG9nKFwiZmluaXNoXCIpO1xuICB9XG5cbiAgb25TZWxlY3QodXNlcil7XG4gICAgdGhpcy5zZWxlY3RlZFVzZXIgPSB1c2VyO1xuXG5cbiAgICAvLyBpZiAodGhpcy5zZWxlY3RlZEJvb2suc3RhdHVzID09IFwiXCIpe1xuICAgIC8vXG4gICAgLy8gfVxuICB9XG5cbiAgdXBkYXRlVXNlcihpZCxsb2dpbiwgbmFtZSwgc3VybmFtZSwgcGFzc3dvcmQsIGRhdGUsIGVtYWlsKXtcbiAgICB0aGlzLl9odHRwU2VydmljZS51cGRhdGVVc2VyKGlkLGxvZ2luLCBuYW1lLCBzdXJuYW1lLCBwYXNzd29yZCwgZGF0ZSwgZW1haWwpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMuc3RhdHVzID0gXCJaYWt0dWFsaXpvd2Fub1wiLFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5zdGF0dXMgPSBcIk5pZXBvcHJhd25lIGRhbmVcIixcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiRmluaXNoZWRcIikpO1xufVxuXG5cbiAgZGVsZXRlVXNlcihpZCkge1xuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmRlbGV0ZVVzZXIoaWQpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMuc3RhdHVzID0gXCJVc3VuacSZdG9cIixcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuc3RhdHVzID0gXCJDb8WbIHBvc3rFgm8gbmllIHRha1wiLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJGaW5pc2hlZFwiKSk7XG4gIH1cbn1cbiJdfQ==
