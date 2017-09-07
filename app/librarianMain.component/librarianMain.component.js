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
    var LibrarianMainComponent;
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
            LibrarianMainComponent = (function () {
                function LibrarianMainComponent(_httpService, _appRouter) {
                    var _this = this;
                    this._httpService = _httpService;
                    this._appRouter = _appRouter;
                    this.selectedGame = {};
                    this.download = "";
                    this.comments = [];
                    this.status = "";
                    this._httpService.getAllGame()
                        .subscribe(function (data) { _this.games = data; }),
                        function (error) { return alert("error"); },
                        function () { return console.log("finish"); };
                    this.selectedGame.ico_path = "default.png";
                }
                LibrarianMainComponent.prototype.getComments = function (id) {
                    var _this = this;
                    this._httpService.getComment(id)
                        .subscribe(function (data) { _this.comments = data; }),
                        function (error) { return _this.comments = null; },
                        function () { return console.log("Finished"); };
                };
                LibrarianMainComponent.prototype.onSelect = function (game) {
                    this.selectedGame = game;
                    this.download = "Pobierz";
                    // this.comments = "";
                    this.getComments(this.selectedGame.id);
                };
                LibrarianMainComponent.prototype.addComment = function (rate, comment, id) {
                    var _this = this;
                    this._httpService.addComment(rate, comment, id)
                        .subscribe(function (data) { return _this.status = "Dodano"; }, function (error) { return _this.status = "Niepoprawne dane"; }, function () { return console.log("Finished"); });
                    alert("Dodano Opinię");
                };
                LibrarianMainComponent.prototype.updateList = function (order) {
                    var _this = this;
                    if (order == 1) {
                        this._httpService.getAllGame()
                            .subscribe(function (data) {
                            _this.games = data;
                        }),
                            function (error) { return alert("error"); },
                            function () { return console.log("finish"); };
                    }
                    else {
                        this._httpService.getAllGameDesc()
                            .subscribe(function (data) {
                            _this.games = data;
                        }),
                            function (error) { return alert("error"); },
                            function () { return console.log("finish"); };
                    }
                };
                LibrarianMainComponent.prototype.findGame = function (text) {
                    var _this = this;
                    this._httpService.findGame(text)
                        .subscribe(function (data) {
                        if (data == "") {
                            _this.games = [];
                            _this.comments = [];
                            _this.selectedGame = {};
                            _this.selectedGame.ico_path = "default.png";
                        }
                        else {
                            _this.games = data;
                        }
                    }),
                        function (error) { return _this.games = []; },
                        function () { return console.log("finish"); };
                };
                LibrarianMainComponent = __decorate([
                    core_1.Component({
                        selector: "librarian-main",
                        templateUrl: 'dev/librarianMain.component/listGames.component.html',
                        styleUrls: ['dev/librarianMain.component/listGames.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [librarian_service_1.LibrarianService]
                    }), 
                    __metadata('design:paramtypes', [librarian_service_1.LibrarianService, router_1.Router])
                ], LibrarianMainComponent);
                return LibrarianMainComponent;
            }());
            exports_1("LibrarianMainComponent", LibrarianMainComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnJhcmlhbk1haW4uY29tcG9uZW50L2xpYnJhcmlhbk1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBT0ksZ0NBQXNCLFlBQThCLEVBQVUsVUFBa0I7b0JBUHBGLGlCQTZFQztvQkF0RXlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtvQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFRO29CQUwzRSxpQkFBWSxHQUFFLEVBQUUsQ0FBQztvQkFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDZCxhQUFRLEdBQUUsRUFBRSxDQUFDO29CQUNiLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBR2pCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO3lCQUN6QixTQUFTLENBQ1YsVUFBQSxJQUFJLElBQUssS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUEsQ0FBQSxDQUFDLENBQUM7d0JBQzVCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFkLENBQWM7d0JBQ3ZCLGNBQU8sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixDQUFDO29CQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7Z0JBQy9DLENBQUM7Z0JBQ0MsNENBQVcsR0FBWCxVQUFZLEVBQUU7b0JBQWQsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO3lCQUMzQixTQUFTLENBQ04sVUFBQSxJQUFJLElBQUssS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUEsQ0FBQSxDQUFDLENBQUM7d0JBQ25DLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQXBCLENBQW9CO3dCQUM3QixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFV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d0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLDBEQUEwRDt3QkFDdkUsU0FBUyxFQUFFLENBQUMseURBQXlELENBQUM7d0JBQ3RFLFVBQVUsRUFBQyxDQUFDLDBCQUFpQixDQUFDO3dCQUM5QixTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztxQkFDOUIsQ0FBQzs7MENBQUE7Z0JBK0VGLDZCQUFDO1lBQUQsQ0E3RUEsQUE2RUMsSUFBQTtZQTdFRCwyREE2RUMsQ0FBQSIsImZpbGUiOiJsaWJyYXJpYW5NYWluLmNvbXBvbmVudC9saWJyYXJpYW5NYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBkYXdpZCBvbiAzMS4wNS4xNy5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCJcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5pbXBvcnQge0xpYnJhcmlhblNlcnZpY2V9IGZyb20gXCIuLi9saWJyYXJpYW4uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGlicmFyaWFuLW1haW5cIixcbiAgdGVtcGxhdGVVcmw6ICdkZXYvbGlicmFyaWFuTWFpbi5jb21wb25lbnQvbGlicmFyaWFuTWFpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkZXYvbGlicmFyaWFuTWFpbi5jb21wb25lbnQvbGlicmFyaWFuTWFpbi5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbTGlicmFyaWFuU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaWJyYXJpYW5NYWluQ29tcG9uZW50e1xuICBwdWJsaWMgZ2FtZXM7XG4gIHB1YmxpYyBzZWxlY3RlZEdhbWUgPXt9O1xuICBwdWJsaWMgZG93bmxvYWQgPSBcIlwiO1xuICBwdWJsaWMgY29tbWVudHMgPVtdO1xuICBwdWJsaWMgc3RhdHVzID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlICBfaHR0cFNlcnZpY2U6IExpYnJhcmlhblNlcnZpY2UsIHByaXZhdGUgX2FwcFJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0QWxsR2FtZSgpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT57IHRoaXMuZ2FtZXMgPSBkYXRhfSksXG4gICAgICAgIGVycm9yID0+IGFsZXJ0KFwiZXJyb3JcIiksXG4gICAgICAgICgpID0+ICBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRHYW1lLmljb19wYXRoID0gXCJkZWZhdWx0LnBuZ1wiO1xuICB9XG4gICAgZ2V0Q29tbWVudHMoaWQpe1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRDb21tZW50KGlkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+eyB0aGlzLmNvbW1lbnRzID0gZGF0YX0pLFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5jb21tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkZpbmlzaGVkXCIpO1xuICAgIH1cbiAgb25TZWxlY3QoZ2FtZSl7XG4gICAgdGhpcy5zZWxlY3RlZEdhbWUgPSBnYW1lO1xuICAgIHRoaXMuZG93bmxvYWQgPSBcIlBvYmllcnpcIjtcbiAgICAvLyB0aGlzLmNvbW1lbnRzID0gXCJcIjtcbiAgICB0aGlzLmdldENvbW1lbnRzKHRoaXMuc2VsZWN0ZWRHYW1lLmlkKTtcbiAgfVxuXG4gICAgYWRkQ29tbWVudChyYXRlICwgY29tbWVudCwgaWQpe1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5hZGRDb21tZW50KHJhdGUgLCBjb21tZW50LCBpZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnN0YXR1cyA9IFwiRG9kYW5vXCIsXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5zdGF0dXMgPSBcIk5pZXBvcHJhd25lIGRhbmVcIixcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkZpbmlzaGVkXCIpKTtcbiAgICAgICAgYWxlcnQoXCJEb2Rhbm8gT3BpbmnEmVwiKTtcbiAgICB9XG4gICAgdXBkYXRlTGlzdChvcmRlcikge1xuICAgICAgICBpZiAob3JkZXIgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0QWxsR2FtZSgpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVzID0gZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBhbGVydChcImVycm9yXCIpLFxuICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiZmluaXNoXCIpO1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0QWxsR2FtZURlc2MoKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lcyA9IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoXCJlcnJvclwiKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaW5kR2FtZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmZpbmRHYW1lKHRleHQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PSBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVzID1bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRHYW1lID17fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRHYW1lLmljb19wYXRoID0gXCJkZWZhdWx0LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lcyA9IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5nYW1lcyA9IFtdLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJmaW5pc2hcIik7XG59XG5cblxufVxuIl19
