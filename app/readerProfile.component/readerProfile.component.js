/**
 * Created by dawid on 06.06.17.
 */
System.register(["angular2/core", "angular2/router", "../reader.component/reader.service"], function(exports_1, context_1) {
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
    var core_1, router_1, reader_service_1;
    var ReaderProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (reader_service_1_1) {
                reader_service_1 = reader_service_1_1;
            }],
        execute: function() {
            ReaderProfileComponent = (function () {
                function ReaderProfileComponent(_httpService, _appRouter, _routeParams) {
                    this._httpService = _httpService;
                    this._appRouter = _appRouter;
                    this._routeParams = _routeParams;
                    this.user = {};
                }
                ReaderProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.readerID = this._routeParams.get('id');
                    this._httpService.getUser(this.readerID)
                        .subscribe(function (data) {
                        _this.user = data;
                    }),
                        function (error) { return alert("error"); },
                        function () { return console.log("finish"); };
                };
                ReaderProfileComponent.prototype.updateReader = function (id, name, surname, password, date, email) {
                    var _this = this;
                    this._httpService.updateUser(id, name, surname, password, date, email)
                        .subscribe(function (data) { return _this.status = "Zaktualizowano"; }, function (error) { return _this.status = "Niepoprawne dane"; }, function () { return console.log("Finished"); });
                    // if (this.selectedBook.status == ""){
                    //
                };
                ReaderProfileComponent = __decorate([
                    core_1.Component({
                        selector: "profile-reader",
                        templateUrl: 'dev/readerProfile.component/readerProfile.component.html',
                        styleUrls: ['dev/readerProfile.component/readerProfile.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [reader_service_1.ReaderService]
                    }), 
                    __metadata('design:paramtypes', [reader_service_1.ReaderService, router_1.Router, router_1.RouteParams])
                ], ReaderProfileComponent);
                return ReaderProfileComponent;
            }());
            exports_1("ReaderProfileComponent", ReaderProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRlclByb2ZpbGUuY29tcG9uZW50L3JlYWRlclByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlSDtnQkFLRSxnQ0FBc0IsWUFBMkIsRUFBVSxVQUFrQixFQUFVLFlBQXlCO29CQUExRixpQkFBWSxHQUFaLFlBQVksQ0FBZTtvQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUR6RyxTQUFJLEdBQUUsRUFBRSxDQUFDO2dCQUdoQixDQUFDO2dCQUVELHlDQUFRLEdBQVI7b0JBQUEsaUJBVUM7b0JBVEMsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt5QkFDbkMsU0FBUyxDQUNOLFVBQUEsSUFBSTt3QkFDRixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtvQkFDbEIsQ0FBQyxDQUFDO3dCQUNOLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFkLENBQWM7d0JBQ3ZCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixDQUFDO2dCQUNsQyxDQUFDO2dCQUdELDZDQUFZLEdBQVosVUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUs7b0JBQXJELGlCQVNJO29CQVJGLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO3lCQUNuRSxTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUE5QixDQUE4QixFQUN0QyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLEVBQWhDLENBQWdDLEVBQ3pDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7b0JBRW5DLHVDQUF1QztvQkFDdkMsRUFBRTtnQkFDRCxDQUFDO2dCQXZDTjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBQywwREFBMEQ7d0JBQ3RFLFNBQVMsRUFBQyxDQUFDLHlEQUF5RCxDQUFDO3dCQUNyRSxVQUFVLEVBQUMsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztxQkFDM0IsQ0FBQzs7MENBQUE7Z0JBcUNGLDZCQUFDO1lBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtZQW5DRCwyREFtQ0MsQ0FBQSIsImZpbGUiOiJyZWFkZXJQcm9maWxlLmNvbXBvbmVudC9yZWFkZXJQcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBkYXdpZCBvbiAwNi4wNi4xNy5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiXG5pbXBvcnQge0xpYnJhcmlhblNlcnZpY2V9IGZyb20gXCIuLi9saWJyYXJpYW4uc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5pbXBvcnQge1JlYWRlclNlcnZpY2V9IGZyb20gXCIuLi9yZWFkZXIuY29tcG9uZW50L3JlYWRlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJwcm9maWxlLXJlYWRlclwiLFxuICB0ZW1wbGF0ZVVybDonZGV2L3JlYWRlclByb2ZpbGUuY29tcG9uZW50L3JlYWRlclByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6WydkZXYvcmVhZGVyUHJvZmlsZS5jb21wb25lbnQvcmVhZGVyUHJvZmlsZS5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbUmVhZGVyU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWFkZXJQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgIE9uSW5pdHtcblxuICBwdWJsaWMgcmVhZGVySUQ7XG4gIHB1YmxpYyBzdGF0dXM7XG4gIHB1YmxpYyB1c2VyID17fTtcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgIF9odHRwU2VydmljZTogUmVhZGVyU2VydmljZSwgcHJpdmF0ZSBfYXBwUm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpOiBhbnkge1xuICAgIHRoaXMucmVhZGVySUQ9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcblxuICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFVzZXIodGhpcy5yZWFkZXJJRClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBkYXRhXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgZXJyb3IgPT4gYWxlcnQoXCJlcnJvclwiKSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJmaW5pc2hcIik7XG4gIH1cblxuXG4gIHVwZGF0ZVJlYWRlcihpZCwgbmFtZSwgc3VybmFtZSwgcGFzc3dvcmQsIGRhdGUsIGVtYWlsKXtcbiAgICB0aGlzLl9odHRwU2VydmljZS51cGRhdGVVc2VyKGlkLCBuYW1lLCBzdXJuYW1lLCBwYXNzd29yZCwgZGF0ZSwgZW1haWwpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHRoaXMuc3RhdHVzID0gXCJaYWt0dWFsaXpvd2Fub1wiLFxuICAgICAgICBlcnJvciA9PiB0aGlzLnN0YXR1cyA9IFwiTmllcG9wcmF3bmUgZGFuZVwiLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkZpbmlzaGVkXCIpKTtcblxuICAgIC8vIGlmICh0aGlzLnNlbGVjdGVkQm9vay5zdGF0dXMgPT0gXCJcIil7XG4gICAgLy9cbiAgICAgfVxuXG5cblxufVxuIl19
