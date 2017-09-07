System.register(["angular2/core", "angular2/router", "../game.service"], function(exports_1, context_1) {
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
    var core_1, router_1, game_service_1;
    var ListGamesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            }],
        execute: function() {
            ListGamesComponent = (function () {
                function ListGamesComponent(_httpService, _appRouter) {
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
                ListGamesComponent.prototype.getComments = function (id) {
                    var _this = this;
                    this._httpService.getComment(id)
                        .subscribe(function (data) { _this.comments = data; }),
                        function (error) { return _this.comments = null; },
                        function () { return console.log("Finished"); };
                };
                ListGamesComponent.prototype.onSelect = function (game) {
                    this.selectedGame = game;
                    this.download = "Pobierz";
                    // this.comments = "";
                    this.getComments(this.selectedGame.id);
                };
                ListGamesComponent.prototype.addComment = function (rate, comment, id) {
                    var _this = this;
                    this._httpService.addComment(rate, comment, id)
                        .subscribe(function (data) { return _this.status = "Dodano"; }, function (error) { return _this.status = "Niepoprawne dane"; }, function () { return console.log("Finished"); });
                    alert("Dodano Opinię");
                };
                ListGamesComponent.prototype.updateList = function (order) {
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
                ListGamesComponent.prototype.findGame = function (text) {
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
                ListGamesComponent = __decorate([
                    core_1.Component({
                        selector: "librarian-main",
                        templateUrl: 'dev/listGames.component/listGames.component.html',
                        styleUrls: ['dev/listGames.component/listGames.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [game_service_1.GameService]
                    }), 
                    __metadata('design:paramtypes', [game_service_1.GameService, router_1.Router])
                ], ListGamesComponent);
                return ListGamesComponent;
            }());
            exports_1("ListGamesComponent", ListGamesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RHYW1lcy5jb21wb25lbnQvbGlzdEdhbWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQU9JLDRCQUFzQixZQUF5QixFQUFVLFVBQWtCO29CQVAvRSxpQkEyRUM7b0JBcEV5QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFRO29CQUx0RSxpQkFBWSxHQUFFLEVBQUUsQ0FBQztvQkFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDZCxhQUFRLEdBQUUsRUFBRSxDQUFDO29CQUNiLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBR2pCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO3lCQUN6QixTQUFTLENBQ1YsVUFBQSxJQUFJLElBQUssS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUEsQ0FBQSxDQUFDLENBQUM7d0JBQzVCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFkLENBQWM7d0JBQ3ZCLGNBQU8sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixDQUFDO29CQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7Z0JBQy9DLENBQUM7Z0JBQ0Msd0NBQVcsR0FBWCxVQUFZLEVBQUU7b0JBQWQsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO3lCQUMzQixTQUFTLENBQ04sVUFBQSxJQUFJLElBQUssS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUEsQ0FBQSxDQUFDLENBQUM7d0JBQ25DLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQXBCLENBQW9CO3dCQUM3QixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFB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USxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLGtEQUFrRDt3QkFDL0QsU0FBUyxFQUFHLENBQUMsaURBQWlELENBQUM7d0JBQy9ELFVBQVUsRUFBQyxDQUFDLDBCQUFpQixDQUFDO3dCQUM5QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUN6QixDQUFDOztzQ0FBQTtnQkE2RUYseUJBQUM7WUFBRCxDQTNFQSxBQTJFQyxJQUFBO1lBM0VELG1EQTJFQyxDQUFBIiwiZmlsZSI6Imxpc3RHYW1lcy5jb21wb25lbnQvbGlzdEdhbWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBkYXdpZCBvbiAzMS4wNS4xNy5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCJcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5pbXBvcnQge0dhbWVTZXJ2aWNlfSBmcm9tIFwiLi4vZ2FtZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWJyYXJpYW4tbWFpblwiLFxuICB0ZW1wbGF0ZVVybDogJ2Rldi9saXN0R2FtZXMuY29tcG9uZW50L2xpc3RHYW1lcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogIFsnZGV2L2xpc3RHYW1lcy5jb21wb25lbnQvbGlzdEdhbWVzLmNvbXBvbmVudC5jc3MnXSxcbiAgZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVNdLFxuICBwcm92aWRlcnM6IFtHYW1lU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0R2FtZXNDb21wb25lbnR7XG4gIHB1YmxpYyBnYW1lcztcbiAgcHVibGljIHNlbGVjdGVkR2FtZSA9e307XG4gIHB1YmxpYyBkb3dubG9hZCA9IFwiXCI7XG4gIHB1YmxpYyBjb21tZW50cyA9W107XG4gIHB1YmxpYyBzdGF0dXMgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgIF9odHRwU2VydmljZTogR2FtZVNlcnZpY2UsIHByaXZhdGUgX2FwcFJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0QWxsR2FtZSgpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT57IHRoaXMuZ2FtZXMgPSBkYXRhfSksXG4gICAgICAgIGVycm9yID0+IGFsZXJ0KFwiZXJyb3JcIiksXG4gICAgICAgICgpID0+ICBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRHYW1lLmljb19wYXRoID0gXCJkZWZhdWx0LnBuZ1wiO1xuICB9XG4gICAgZ2V0Q29tbWVudHMoaWQpe1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRDb21tZW50KGlkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+eyB0aGlzLmNvbW1lbnRzID0gZGF0YX0pLFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5jb21tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkZpbmlzaGVkXCIpO1xuICAgIH1cbiAgb25TZWxlY3QoZ2FtZSl7XG4gICAgdGhpcy5zZWxlY3RlZEdhbWUgPSBnYW1lO1xuICAgIHRoaXMuZG93bmxvYWQgPSBcIlBvYmllcnpcIjtcbiAgICAvLyB0aGlzLmNvbW1lbnRzID0gXCJcIjtcbiAgICB0aGlzLmdldENvbW1lbnRzKHRoaXMuc2VsZWN0ZWRHYW1lLmlkKTtcbiAgfVxuXG4gICAgYWRkQ29tbWVudChyYXRlICwgY29tbWVudCwgaWQpe1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5hZGRDb21tZW50KHJhdGUgLCBjb21tZW50LCBpZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnN0YXR1cyA9IFwiRG9kYW5vXCIsXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5zdGF0dXMgPSBcIk5pZXBvcHJhd25lIGRhbmVcIixcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkZpbmlzaGVkXCIpKTtcbiAgICAgICAgYWxlcnQoXCJEb2Rhbm8gT3BpbmnEmVwiKTtcbiAgICB9XG4gICAgdXBkYXRlTGlzdChvcmRlcikge1xuICAgICAgICBpZiAob3JkZXIgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0QWxsR2FtZSgpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVzID0gZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBhbGVydChcImVycm9yXCIpLFxuICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiZmluaXNoXCIpO1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0QWxsR2FtZURlc2MoKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lcyA9IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoXCJlcnJvclwiKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaW5kR2FtZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmZpbmRHYW1lKHRleHQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PSBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVzID1bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRHYW1lID17fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRHYW1lLmljb19wYXRoID0gXCJkZWZhdWx0LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lcyA9IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5nYW1lcyA9IFtdLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJmaW5pc2hcIik7XG59XG59XG4iXX0=
