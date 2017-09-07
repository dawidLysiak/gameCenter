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
    var AddGameComponent;
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
            AddGameComponent = (function () {
                function AddGameComponent(_httpService, _appRouter) {
                    this._httpService = _httpService;
                    this._appRouter = _appRouter;
                    // this._httpService.getAllBooks()
                    //   .subscribe(
                    //     data =>{ this.books = data}),
                    //   error => alert("error"),
                    //   () =>  console.log("finish");
                }
                AddGameComponent.prototype.addGame = function (name, desc, category, image, file) {
                    var _this = this;
                    this._httpService.addGame(name, desc, category, image, file)
                        .subscribe(function (data) { return _this.status = "Dodano"; }, function (error) { return _this.status = "Niepoprawne dane"; }, function () { return console.log("Finished"); });
                    // this.selectedBook = book;
                    // if (this.selectedBook.status == ""){
                    //
                    // }
                };
                AddGameComponent = __decorate([
                    core_1.Component({
                        selector: "update-book",
                        templateUrl: 'dev/addGame.component/addGame.component.html',
                        styleUrls: ['dev/addGame.component/addGame.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [librarian_service_1.LibrarianService]
                    }), 
                    __metadata('design:paramtypes', [librarian_service_1.LibrarianService, router_1.Router])
                ], AddGameComponent);
                return AddGameComponent;
            }());
            exports_1("AddGameComponent", AddGameComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZEJvb2suY29tcG9uZW50L2FkZEdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNIO2dCQUVFLDBCQUFzQixZQUE4QixFQUFVLFVBQWtCO29CQUExRCxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7b0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFDOUUsa0NBQWtDO29CQUNsQyxnQkFBZ0I7b0JBQ2hCLG9DQUFvQztvQkFDcEMsNkJBQTZCO29CQUM3QixrQ0FBa0M7Z0JBQ3BDLENBQUM7Z0JBRUMsa0NBQU8sR0FBUCxVQUFRLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJO29CQUF6QyxpQkFXRDtvQkFWQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO3lCQUN6RCxTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsRUFBdEIsQ0FBc0IsRUFDOUIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLGtCQUFrQixFQUFoQyxDQUFnQyxFQUN6QyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO29CQUNwQyw0QkFBNEI7b0JBRTNCLHVDQUF1QztvQkFDdkMsRUFBRTtvQkFDRixJQUFJO2dCQUNOLENBQUM7Z0JBN0JIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFdBQVcsRUFBQyw4Q0FBOEM7d0JBQzFELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO3dCQUMxRCxVQUFVLEVBQUMsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQzlCLENBQUM7O29DQUFBO2dCQXdCRix1QkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsK0NBc0JDLENBQUEiLCJmaWxlIjoiYWRkQm9vay5jb21wb25lbnQvYWRkR2FtZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgZGF3aWQgb24gMDYuMDYuMTcuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkYXdpZCBvbiAwNi4wNi4xNy5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIlxuaW1wb3J0IHtMaWJyYXJpYW5TZXJ2aWNlfSBmcm9tIFwiLi4vbGlicmFyaWFuLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ1cGRhdGUtYm9va1wiLFxuICB0ZW1wbGF0ZVVybDonZGV2L2FkZEdhbWUuY29tcG9uZW50L2FkZEdhbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGV2L2FkZEdhbWUuY29tcG9uZW50L2FkZEdhbWUuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFU10sXG4gIHByb3ZpZGVyczogW0xpYnJhcmlhblNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkR2FtZUNvbXBvbmVudHtcbiAgcHVibGljIHN0YXR1cztcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgIF9odHRwU2VydmljZTogTGlicmFyaWFuU2VydmljZSwgcHJpdmF0ZSBfYXBwUm91dGVyOiBSb3V0ZXIpIHtcbiAgICAvLyB0aGlzLl9odHRwU2VydmljZS5nZXRBbGxCb29rcygpXG4gICAgLy8gICAuc3Vic2NyaWJlKFxuICAgIC8vICAgICBkYXRhID0+eyB0aGlzLmJvb2tzID0gZGF0YX0pLFxuICAgIC8vICAgZXJyb3IgPT4gYWxlcnQoXCJlcnJvclwiKSxcbiAgICAvLyAgICgpID0+ICBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcbiAgfVxuXG4gICAgYWRkR2FtZShuYW1lLCBkZXNjLCBjYXRlZ29yeSwgaW1hZ2UsIGZpbGUpe1xuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmFkZEdhbWUobmFtZSwgZGVzYywgY2F0ZWdvcnksIGltYWdlLCBmaWxlKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB0aGlzLnN0YXR1cyA9IFwiRG9kYW5vXCIsXG4gICAgICAgIGVycm9yID0+IHRoaXMuc3RhdHVzID0gXCJOaWVwb3ByYXduZSBkYW5lXCIsXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiRmluaXNoZWRcIikpO1xuICAgLy8gdGhpcy5zZWxlY3RlZEJvb2sgPSBib29rO1xuXG4gICAgLy8gaWYgKHRoaXMuc2VsZWN0ZWRCb29rLnN0YXR1cyA9PSBcIlwiKXtcbiAgICAvL1xuICAgIC8vIH1cbiAgfVxufVxuIl19
