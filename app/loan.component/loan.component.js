/**
 * Created by dawid on 05.06.17.
 */
System.register(["angular2/core", "angular2/router", "../librarian.service"], function(exports_1, context_1) {
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
    var core_1, router_1, librarian_service_1;
    var LoanComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (librarian_service_1_1) {
                librarian_service_1 = librarian_service_1_1;
            }],
        execute: function() {
            LoanComponent = (function () {
                function LoanComponent(_httpService) {
                    this._httpService = _httpService;
                    this.emptyBook = "...";
                    this.emptyUser = "...";
                    this.refreshView();
                    // this._httpService.getAllUsers()
                    //   .subscribe(
                    //     data =>{ this.users = data}),
                    //   error => alert("error"),
                    //   () =>  console.log("finish");
                    //
                    // this._httpService.getFreeBooks()
                    //   .subscribe(
                    //     data =>{ this.freeBooks = data}),
                    //   error => alert("error"),
                    //   () =>  console.log("finish");
                }
                LoanComponent.prototype.onSelectBook = function (book) {
                    this.selectedBook = book;
                    this.emptyBook = "";
                };
                LoanComponent.prototype.onSelectUser = function (user) {
                    this.selectedUser = user;
                    this.emptyUser = "";
                };
                LoanComponent.prototype.onLoan = function () {
                    var _this = this;
                    var bookKeys = Object.keys(this.selectedBook);
                    var userKeys = Object.keys(this.selectedUser);
                    var bookID = this.selectedBook[bookKeys[0]];
                    var userID = this.selectedUser[userKeys[0]];
                    this._httpService.loan(bookID, userID)
                        .subscribe(function (data) { _this.response = data; }),
                        function (error) { return alert("error"); },
                        function () { return _this.refreshView(); };
                };
                LoanComponent.prototype.refreshView = function () {
                    var _this = this;
                    this._httpService.getAllUsers()
                        .subscribe(function (data) {
                        _this.users = data;
                    }),
                        function (error) { return alert("error"); },
                        function () { return console.log("finish"); };
                    this._httpService.getFreeBooks()
                        .subscribe(function (data) {
                        _this.freeBooks = data;
                    }),
                        function (error) { return alert("error"); },
                        function () { return console.log("finish"); };
                };
                LoanComponent = __decorate([
                    core_1.Component({
                        selector: "loan",
                        templateUrl: 'dev/loan.component/loan.component.html',
                        styleUrls: ['dev/loan.component/loan.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [librarian_service_1.LibrarianService]
                    }), 
                    __metadata('design:paramtypes', [librarian_service_1.LibrarianService])
                ], LoanComponent);
                return LoanComponent;
            }());
            exports_1("LoanComponent", LoanComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4uY29tcG9uZW50L2xvYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjSDtnQkFTRSx1QkFBc0IsWUFBOEI7b0JBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtvQkFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBQyxLQUFLLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFDO29CQUVyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRW5CLGtDQUFrQztvQkFDbEMsZ0JBQWdCO29CQUNoQixvQ0FBb0M7b0JBQ3BDLDZCQUE2QjtvQkFDN0Isa0NBQWtDO29CQUNsQyxFQUFFO29CQUNGLG1DQUFtQztvQkFDbkMsZ0JBQWdCO29CQUNoQix3Q0FBd0M7b0JBQ3hDLDZCQUE2QjtvQkFDN0Isa0NBQWtDO2dCQUVwQyxDQUFDO2dCQUVELG9DQUFZLEdBQVosVUFBYSxJQUFJO29CQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN6QixJQUFJLENBQUMsU0FBUyxHQUFDLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxvQ0FBWSxHQUFaLFVBQWEsSUFBSTtvQkFDZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBQyxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRUEsOEJBQU0sR0FBTjtvQkFBQSxpQkFXQztvQkFWQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzlDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxNQUFNLENBQUM7eUJBQ2hDLFNBQVMsQ0FDVixVQUFBLElBQUksSUFBSyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQSxDQUFBLENBQUMsQ0FBQzt3QkFDL0IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQWQsQ0FBYzt3QkFDdkIsY0FBTyxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRixtQ0FBVyxHQUFYO29CQUFBLGlCQWdCQztvQkFmQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTt5QkFDMUIsU0FBUyxDQUNOLFVBQUEsSUFBSTt3QkFDRixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtvQkFDbkIsQ0FBQyxDQUFDO3dCQUNOLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFkLENBQWM7d0JBQ3ZCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixDQUFDO29CQUVoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTt5QkFDM0IsU0FBUyxDQUNOLFVBQUEsSUFBSTt3QkFDRixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtvQkFDdkIsQ0FBQyxDQUFDO3dCQUNOLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFkLENBQWM7d0JBQ3ZCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixDQUFDO2dCQUNsQyxDQUFDO2dCQTNFSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxNQUFNO3dCQUNkLFdBQVcsRUFBRSx3Q0FBd0M7d0JBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO3dCQUV0RCxVQUFVLEVBQUMsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQzlCLENBQUM7O2lDQUFBO2dCQXFFRixvQkFBQztZQUFELENBcEVBLEFBb0VDLElBQUE7WUFwRUQseUNBb0VDLENBQUEiLCJmaWxlIjoibG9hbi5jb21wb25lbnQvbG9hbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgZGF3aWQgb24gMDUuMDYuMTcuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7TGlicmFyaWFuU2VydmljZX0gZnJvbSBcIi4uL2xpYnJhcmlhbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsb2FuXCIsXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvbG9hbi5jb21wb25lbnQvbG9hbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2Rldi9sb2FuLmNvbXBvbmVudC9sb2FuLmNvbXBvbmVudC5jc3MnXSxcblxuICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFU10sXG4gIHByb3ZpZGVyczogW0xpYnJhcmlhblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExvYW5Db21wb25lbnR7XG4gIHB1YmxpYyB1c2VycztcbiAgcHVibGljIHNlbGVjdGVkVXNlcjtcbiAgcHVibGljIGZyZWVCb29rc1xuICBwdWJsaWMgc2VsZWN0ZWRCb29rO1xuICBwdWJsaWMgcmVzcG9uc2U7XG4gIHB1YmxpYyBlbXB0eUJvb2s7XG4gIHB1YmxpYyBlbXB0eVVzZXI7XG5cbiAgY29uc3RydWN0b3IgKHByaXZhdGUgIF9odHRwU2VydmljZTogTGlicmFyaWFuU2VydmljZSkge1xuICAgIHRoaXMuZW1wdHlCb29rPVwiLi4uXCI7XG4gICAgdGhpcy5lbXB0eVVzZXI9XCIuLi5cIjtcblxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcblxuICAgIC8vIHRoaXMuX2h0dHBTZXJ2aWNlLmdldEFsbFVzZXJzKClcbiAgICAvLyAgIC5zdWJzY3JpYmUoXG4gICAgLy8gICAgIGRhdGEgPT57IHRoaXMudXNlcnMgPSBkYXRhfSksXG4gICAgLy8gICBlcnJvciA9PiBhbGVydChcImVycm9yXCIpLFxuICAgIC8vICAgKCkgPT4gIGNvbnNvbGUubG9nKFwiZmluaXNoXCIpO1xuICAgIC8vXG4gICAgLy8gdGhpcy5faHR0cFNlcnZpY2UuZ2V0RnJlZUJvb2tzKClcbiAgICAvLyAgIC5zdWJzY3JpYmUoXG4gICAgLy8gICAgIGRhdGEgPT57IHRoaXMuZnJlZUJvb2tzID0gZGF0YX0pLFxuICAgIC8vICAgZXJyb3IgPT4gYWxlcnQoXCJlcnJvclwiKSxcbiAgICAvLyAgICgpID0+ICBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcblxuICB9XG5cbiAgb25TZWxlY3RCb29rKGJvb2spIHtcbiAgICB0aGlzLnNlbGVjdGVkQm9vayA9IGJvb2s7XG4gICAgdGhpcy5lbXB0eUJvb2s9XCJcIjtcbiAgfVxuICBvblNlbGVjdFVzZXIodXNlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRVc2VyID0gdXNlcjtcbiAgICB0aGlzLmVtcHR5VXNlcj1cIlwiO1xuICB9XG5cbiAgIG9uTG9hbigpe1xuICAgICBsZXQgYm9va0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNlbGVjdGVkQm9vayk7XG4gICAgIGxldCB1c2VyS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2VsZWN0ZWRVc2VyKTtcbiAgICAgdmFyIGJvb2tJRCA9IHRoaXMuc2VsZWN0ZWRCb29rW2Jvb2tLZXlzWzBdXTtcbiAgICAgdmFyIHVzZXJJRCA9IHRoaXMuc2VsZWN0ZWRVc2VyW3VzZXJLZXlzWzBdXTtcblxuICAgICB0aGlzLl9odHRwU2VydmljZS5sb2FuKGJvb2tJRCx1c2VySUQpXG4gICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgZGF0YSA9PnsgdGhpcy5yZXNwb25zZSA9IGRhdGF9KSxcbiAgICAgICAgIGVycm9yID0+IGFsZXJ0KFwiZXJyb3JcIiksXG4gICAgICAgICAoKSA9PiAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgfVxuXG4gIHJlZnJlc2hWaWV3KCkge1xuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldEFsbFVzZXJzKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gZGF0YVxuICAgICAgICAgICAgfSksXG4gICAgICAgIGVycm9yID0+IGFsZXJ0KFwiZXJyb3JcIiksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiZmluaXNoXCIpO1xuXG4gICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0RnJlZUJvb2tzKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmZyZWVCb29rcyA9IGRhdGFcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBlcnJvciA9PiBhbGVydChcImVycm9yXCIpLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcbiAgfVxufVxuIl19
