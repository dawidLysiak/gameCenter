/**
 * Created by dawid on 06.06.17.
 */
/**
 * Created by dawid on 06.06.17.
 */
System.register(["angular2/core", "../librarian.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, librarian_service_1, router_1;
    var AddUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (librarian_service_1_1) {
                librarian_service_1 = librarian_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AddUserComponent = (function () {
                //  public selectedBook ={};
                function AddUserComponent(_httpService, _appRouter) {
                    this._httpService = _httpService;
                    this._appRouter = _appRouter;
                    // this._httpService.getAllBooks()
                    //   .subscribe(
                    //     data => {
                    //       this.books = data
                    //     }),
                    //   error => alert("error"),
                    //   () => console.log("finish");
                }
                AddUserComponent.prototype.addReader = function (login, name, surname, password, date, email) {
                    var _this = this;
                    this._httpService.addUser(login, name, surname, password, date, email)
                        .subscribe(function (data) { return _this.status = "Dodano"; }),
                        function (error) { return _this.status = "Niepoprawne dane"; },
                        function () { return console.log("Finished"); };
                    // if (this.selectedBook.status == ""){
                    //
                };
                AddUserComponent = __decorate([
                    core_1.Component({
                        selector: "update-book",
                        templateUrl: 'dev/addUser.component/addUser.component.html',
                        styleUrls: ['dev/addBook.component/addGame.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [librarian_service_1.LibrarianService]
                    }), 
                    __metadata('design:paramtypes', [librarian_service_1.LibrarianService, router_1.Router])
                ], AddUserComponent);
                return AddUserComponent;
            }());
            exports_1("AddUserComponent", AddUserComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFVzZXIuY29tcG9uZW50L2FkZFVzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNIO2dCQUVBLDRCQUE0QjtnQkFDMUIsMEJBQXNCLFlBQThCLEVBQVUsVUFBa0I7b0JBQTFELGlCQUFZLEdBQVosWUFBWSxDQUFrQjtvQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFRO29CQUM5RSxrQ0FBa0M7b0JBQ2xDLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQiwwQkFBMEI7b0JBQzFCLFVBQVU7b0JBQ1YsNkJBQTZCO29CQUM3QixpQ0FBaUM7Z0JBQ25DLENBQUM7Z0JBRUQsb0NBQVMsR0FBVCxVQUFVLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSztvQkFBckQsaUJBU0k7b0JBUkYsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7eUJBQ25FLFNBQVMsQ0FDUixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxFQUF0QixDQUFzQixDQUFDO3dCQUMvQixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLEVBQWhDLENBQWdDO3dCQUN6QyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztvQkFFbEMsdUNBQXVDO29CQUN2QyxFQUFFO2dCQUNELENBQUM7Z0JBOUJOO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFdBQVcsRUFBQyw4Q0FBOEM7d0JBQzFELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO3dCQUMxRCxVQUFVLEVBQUMsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQzlCLENBQUM7O29DQUFBO2dCQTBCRix1QkFBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsK0NBd0JDLENBQUEiLCJmaWxlIjoiYWRkVXNlci5jb21wb25lbnQvYWRkVXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgZGF3aWQgb24gMDYuMDYuMTcuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkYXdpZCBvbiAwNi4wNi4xNy5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIlxuaW1wb3J0IHtMaWJyYXJpYW5TZXJ2aWNlfSBmcm9tIFwiLi4vbGlicmFyaWFuLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ1cGRhdGUtYm9va1wiLFxuICB0ZW1wbGF0ZVVybDonZGV2L2FkZFVzZXIuY29tcG9uZW50L2FkZFVzZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGV2L2FkZEJvb2suY29tcG9uZW50L2FkZEJvb2suY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFU10sXG4gIHByb3ZpZGVyczogW0xpYnJhcmlhblNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkVXNlckNvbXBvbmVudHtcbiAgcHVibGljIHN0YXR1cztcbi8vICBwdWJsaWMgc2VsZWN0ZWRCb29rID17fTtcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgIF9odHRwU2VydmljZTogTGlicmFyaWFuU2VydmljZSwgcHJpdmF0ZSBfYXBwUm91dGVyOiBSb3V0ZXIpIHtcbiAgICAvLyB0aGlzLl9odHRwU2VydmljZS5nZXRBbGxCb29rcygpXG4gICAgLy8gICAuc3Vic2NyaWJlKFxuICAgIC8vICAgICBkYXRhID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmJvb2tzID0gZGF0YVxuICAgIC8vICAgICB9KSxcbiAgICAvLyAgIGVycm9yID0+IGFsZXJ0KFwiZXJyb3JcIiksXG4gICAgLy8gICAoKSA9PiBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcbiAgfVxuXG4gIGFkZFJlYWRlcihsb2dpbiwgbmFtZSwgc3VybmFtZSwgcGFzc3dvcmQsIGRhdGUsIGVtYWlsKXtcbiAgICB0aGlzLl9odHRwU2VydmljZS5hZGRVc2VyKGxvZ2luLCBuYW1lLCBzdXJuYW1lLCBwYXNzd29yZCwgZGF0ZSwgZW1haWwpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHRoaXMuc3RhdHVzID0gXCJEb2Rhbm9cIiksXG4gICAgICAgIGVycm9yID0+IHRoaXMuc3RhdHVzID0gXCJOaWVwb3ByYXduZSBkYW5lXCIsXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiRmluaXNoZWRcIik7XG5cbiAgICAvLyBpZiAodGhpcy5zZWxlY3RlZEJvb2suc3RhdHVzID09IFwiXCIpe1xuICAgIC8vXG4gICAgIH1cblxufVxuIl19
