/**
 * Created by dawid on 06.06.17.
 */
/**
 * Created by dawid on 06.06.17.
 */
System.register(["angular2/core", "angular2/router", "../game.service", "angular2/http", "rxjs/Observable"], function(exports_1, context_1) {
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
    var core_1, router_1, game_service_1, http_1, Observable_1;
    var AddGameComponent;
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
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            AddGameComponent = (function () {
                function AddGameComponent(_httpService, _appRouter) {
                    this._httpService = _httpService;
                    this._appRouter = _appRouter;
                    this.baseUrl = 'localhost/gameCenter/addGame.php';
                }
                AddGameComponent.prototype.addGame = function (name, desc, category, image, file) {
                    var _this = this;
                    this._httpService.addGame(name, desc, category, image, file)
                        .subscribe(function (data) { return _this.status = "Dodano"; }, function (error) { return _this.status = "Niepoprawne dane"; }, function () { return console.log("Finished"); });
                };
                AddGameComponent.prototype.fileChange = function (event) {
                    var fileList = event.target.files;
                    if (fileList.length > 0) {
                        var file = fileList[0];
                        var formData = new FormData();
                        formData.append('uploadFile', file, file.name);
                        var headers = new Headers();
                        /** No need to include Content-Type in Angular 4 */
                        headers.append('Content-Type', 'multipart/form-data');
                        headers.append('Accept', 'application/json');
                        var options = new http_1.RequestOptions({ headers: headers });
                        this.http.post("" + this.apiEndPoint, formData, options)
                            .map(function (res) { return res.json(); })
                            .catch(function (error) { return Observable_1.Observable.throw(error); })
                            .subscribe(function (data) { return console.log('success'); }, function (error) { return console.log(error); });
                    }
                };
                AddGameComponent = __decorate([
                    core_1.Component({
                        selector: "update-book",
                        templateUrl: 'dev/addGame.component/addGame.component.html',
                        styleUrls: ['dev/addGame.component/addGame.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [game_service_1.GameService]
                    }), 
                    __metadata('design:paramtypes', [game_service_1.GameService, router_1.Router])
                ], AddGameComponent);
                return AddGameComponent;
            }());
            exports_1("AddGameComponent", AddGameComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZEdhbWUuY29tcG9uZW50L2FkZEdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCSDtnQkFHRSwwQkFBc0IsWUFBeUIsRUFBVSxVQUFrQjtvQkFBckQsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFEcEUsWUFBTyxHQUFFLGtDQUFrQyxDQUFBO2dCQUVsRCxDQUFDO2dCQUVDLGtDQUFPLEdBQVAsVUFBUSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSTtvQkFBekMsaUJBTUQ7b0JBTEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQzt5QkFDekQsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQXRCLENBQXNCLEVBQzlCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsRUFBaEMsQ0FBZ0MsRUFDekMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFDQyxxQ0FBVSxHQUFWLFVBQVcsS0FBSztvQkFDWixJQUFJLFFBQVEsR0FBYSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDNUMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLElBQUksR0FBUyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLElBQUksUUFBUSxHQUFZLElBQUksUUFBUSxFQUFFLENBQUM7d0JBQ3ZDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQy9DLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7d0JBQzVCLG1EQUFtRDt3QkFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUscUJBQXFCLENBQUMsQ0FBQzt3QkFDdEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7d0JBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLFdBQWEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDOzZCQUNuRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDOzZCQUN0QixLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQzs2QkFDdkMsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBdEIsQ0FBc0IsRUFDOUIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFBO29CQUNULENBQUM7Z0JBQ0wsQ0FBQztnQkF4Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsV0FBVyxFQUFDLDhDQUE4Qzt3QkFDMUQsU0FBUyxFQUFFLENBQUMsNkNBQTZDLENBQUM7d0JBQzFELFVBQVUsRUFBQyxDQUFDLDBCQUFpQixDQUFDO3dCQUM5QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUN6QixDQUFDOztvQ0FBQTtnQkFtQ0YsdUJBQUM7WUFBRCxDQWpDQSxBQWlDQyxJQUFBO1lBakNELCtDQWlDQyxDQUFBIiwiZmlsZSI6ImFkZEdhbWUuY29tcG9uZW50L2FkZEdhbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGRhd2lkIG9uIDA2LjA2LjE3LlxuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgZGF3aWQgb24gMDYuMDYuMTcuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCJcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5pbXBvcnQge0dhbWVTZXJ2aWNlfSBmcm9tIFwiLi4vZ2FtZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlcXVlc3RPcHRpb25zfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge0ZpbGVVcGxvYWRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInVwZGF0ZS1ib29rXCIsXG4gIHRlbXBsYXRlVXJsOidkZXYvYWRkR2FtZS5jb21wb25lbnQvYWRkR2FtZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkZXYvYWRkR2FtZS5jb21wb25lbnQvYWRkR2FtZS5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbR2FtZVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkR2FtZUNvbXBvbmVudHtcbiAgcHVibGljIHN0YXR1cztcbiAgcHVibGljIGJhc2VVcmwgPSdsb2NhbGhvc3QvZ2FtZUNlbnRlci9hZGRHYW1lLnBocCdcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgIF9odHRwU2VydmljZTogR2FtZVNlcnZpY2UsIHByaXZhdGUgX2FwcFJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICAgIGFkZEdhbWUobmFtZSwgZGVzYywgY2F0ZWdvcnksIGltYWdlLCBmaWxlKXtcbiAgICB0aGlzLl9odHRwU2VydmljZS5hZGRHYW1lKG5hbWUsIGRlc2MsIGNhdGVnb3J5LCBpbWFnZSwgZmlsZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4gdGhpcy5zdGF0dXMgPSBcIkRvZGFub1wiLFxuICAgICAgICBlcnJvciA9PiB0aGlzLnN0YXR1cyA9IFwiTmllcG9wcmF3bmUgZGFuZVwiLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkZpbmlzaGVkXCIpKTtcbiAgfVxuICAgIGZpbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IGZpbGVMaXN0OiBGaWxlTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICAgICAgaWYoZmlsZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGZpbGU6IEZpbGUgPSBmaWxlTGlzdFswXTtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YTpGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1cGxvYWRGaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgICAgIC8qKiBObyBuZWVkIHRvIGluY2x1ZGUgQ29udGVudC1UeXBlIGluIEFuZ3VsYXIgNCAqL1xuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuYXBpRW5kUG9pbnR9YCwgZm9ybURhdGEsIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
