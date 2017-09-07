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
    var ReturnBookComponent;
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
            ReturnBookComponent = (function () {
                function ReturnBookComponent(_httpService) {
                    var _this = this;
                    this._httpService = _httpService;
                    this._httpService.getLoanBooks()
                        .subscribe(function (data) { _this.loanBooks = data; }),
                        function (error) { return alert("error"); },
                        function () { return console.log("finish"); };
                }
                ReturnBookComponent.prototype.onSelectBook = function (book) {
                    this.selectedBook = book;
                };
                ReturnBookComponent.prototype.onReturn = function () {
                    var _this = this;
                    var bookKeys = Object.keys(this.selectedBook);
                    var bookID = this.selectedBook[bookKeys[0]];
                    this._httpService.returnBook(bookID)
                        .subscribe(function (data) { _this.response = data; }),
                        function (error) { return alert("error"); },
                        function () { return _this.refreshView(); };
                };
                ReturnBookComponent.prototype.refreshView = function () {
                    var _this = this;
                    this._httpService.getLoanBooks()
                        .subscribe(function (data) { _this.loanBooks = data; }),
                        function (error) { return alert("error"); },
                        function () { return console.log("finish"); };
                };
                ReturnBookComponent = __decorate([
                    core_1.Component({
                        selector: "loan",
                        templateUrl: 'dev/returnBook.component/returnBook.component.html',
                        styleUrls: ['dev/returnBook.component/returnBook.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [librarian_service_1.LibrarianService]
                    }), 
                    __metadata('design:paramtypes', [librarian_service_1.LibrarianService])
                ], ReturnBookComponent);
                return ReturnBookComponent;
            }());
            exports_1("ReturnBookComponent", ReturnBookComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldHVybkJvb2suY29tcG9uZW50L3JldHVybkJvb2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjSDtnQkFJRSw2QkFBc0IsWUFBOEI7b0JBSnRELGlCQXFDQztvQkFqQ3VCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtvQkFFbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7eUJBQzdCLFNBQVMsQ0FDUixVQUFBLElBQUksSUFBSyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQSxDQUFBLENBQUMsQ0FBQzt3QkFDbEMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQWQsQ0FBYzt3QkFDdkIsY0FBTyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQXJCLENBQXFCLENBQUM7Z0JBRWpDLENBQUM7Z0JBRUQsMENBQVksR0FBWixVQUFhLElBQUk7b0JBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUEsc0NBQVEsR0FBUjtvQkFBQSxpQkFTQztvQkFSQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO3lCQUMvQixTQUFTLENBQ1YsVUFBQSxJQUFJLElBQUssS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUEsQ0FBQSxDQUFDLENBQUM7d0JBQy9CLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFkLENBQWM7d0JBQ3ZCLGNBQU8sT0FBQSxLQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQseUNBQVcsR0FBWDtvQkFBQSxpQkFNQztvQkFMQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTt5QkFDM0IsU0FBUyxDQUNWLFVBQUEsSUFBSSxJQUFLLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBLENBQUEsQ0FBQyxDQUFDO3dCQUNoQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBZCxDQUFjO3dCQUN2QixjQUFPLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsQ0FBQztnQkFDbkMsQ0FBQztnQkExQ0o7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsTUFBTTt3QkFDaEIsV0FBVyxFQUFFLG9EQUFvRDt3QkFDakUsU0FBUyxFQUFFLENBQUMsbURBQW1ELENBQUM7d0JBQ2hFLFVBQVUsRUFBQyxDQUFDLDBCQUFpQixDQUFDO3dCQUM5QixTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztxQkFDOUIsQ0FBQzs7dUNBQUE7Z0JBc0NGLDBCQUFDO1lBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtZQXJDRCxxREFxQ0MsQ0FBQSIsImZpbGUiOiJyZXR1cm5Cb29rLmNvbXBvbmVudC9yZXR1cm5Cb29rLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBkYXdpZCBvbiAwNS4wNi4xNy5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIlxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtMaWJyYXJpYW5TZXJ2aWNlfSBmcm9tIFwiLi4vbGlicmFyaWFuLnNlcnZpY2VcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsb2FuXCIsXG4gIHRlbXBsYXRlVXJsOiAnZGV2L3JldHVybkJvb2suY29tcG9uZW50L3JldHVybkJvb2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGV2L3JldHVybkJvb2suY29tcG9uZW50L3JldHVybkJvb2suY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFU10sXG4gIHByb3ZpZGVyczogW0xpYnJhcmlhblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFJldHVybkJvb2tDb21wb25lbnR7XG4gIHB1YmxpYyBsb2FuQm9va3NcbiAgcHVibGljIHNlbGVjdGVkQm9vaztcbiAgcHVibGljIHJlc3BvbnNlO1xuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSAgX2h0dHBTZXJ2aWNlOiBMaWJyYXJpYW5TZXJ2aWNlKSB7XG5cbiAgICB0aGlzLl9odHRwU2VydmljZS5nZXRMb2FuQm9va3MoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PnsgdGhpcy5sb2FuQm9va3MgPSBkYXRhfSksXG4gICAgICBlcnJvciA9PiBhbGVydChcImVycm9yXCIpLFxuICAgICAgKCkgPT4gIGNvbnNvbGUubG9nKFwiZmluaXNoXCIpO1xuXG4gIH1cblxuICBvblNlbGVjdEJvb2soYm9vaykge1xuICAgIHRoaXMuc2VsZWN0ZWRCb29rID0gYm9vaztcbiAgfVxuXG4gICBvblJldHVybigpe1xuICAgICBsZXQgYm9va0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNlbGVjdGVkQm9vayk7XG4gICAgIHZhciBib29rSUQgPSB0aGlzLnNlbGVjdGVkQm9va1tib29rS2V5c1swXV07XG5cbiAgICAgdGhpcy5faHR0cFNlcnZpY2UucmV0dXJuQm9vayhib29rSUQpXG4gICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgZGF0YSA9PnsgdGhpcy5yZXNwb25zZSA9IGRhdGF9KSxcbiAgICAgICAgIGVycm9yID0+IGFsZXJ0KFwiZXJyb3JcIiksXG4gICAgICAgICAoKSA9PiAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgfVxuXG4gICByZWZyZXNoVmlldygpe1xuICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRMb2FuQm9va3MoKVxuICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgIGRhdGEgPT57IHRoaXMubG9hbkJvb2tzID0gZGF0YX0pLFxuICAgICAgICAgZXJyb3IgPT4gYWxlcnQoXCJlcnJvclwiKSxcbiAgICAgICAgICgpID0+ICBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcbiAgIH1cblxufVxuIl19
