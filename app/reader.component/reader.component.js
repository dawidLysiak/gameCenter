System.register(["angular2/core", "angular2/router", "./reader.service"], function(exports_1, context_1) {
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
    var ReaderComponent;
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
            ReaderComponent = (function () {
                function ReaderComponent(_httpService, _appRouter, _routeParams) {
                    var _this = this;
                    this._httpService = _httpService;
                    this._appRouter = _appRouter;
                    this._routeParams = _routeParams;
                    this.selectedBook = {};
                    this._httpService.getReaderBooks(this.readerId)
                        .subscribe(function (data) { _this.books = data; }),
                        function (error) { return alert("error"); },
                        function () { return console.log("finish"); };
                }
                ReaderComponent.prototype.onSelect = function (book) {
                    this.selectedBook = book;
                    // if (this.selectedBook.status == ""){
                    //
                    // }
                };
                ReaderComponent.prototype.ngOnInit = function () {
                    this.readerId = this._routeParams.get('id');
                };
                ReaderComponent.prototype.goToProfile = function () {
                    this._appRouter.navigate(['ReaderProfile', { id: this.readerId }]);
                };
                ReaderComponent = __decorate([
                    core_1.Component({
                        selector: "reader",
                        templateUrl: 'dev/reader.component/reader.component.html',
                        styleUrls: ['dev/reader.component/reader.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [reader_service_1.ReaderService]
                    }), 
                    __metadata('design:paramtypes', [reader_service_1.ReaderService, router_1.Router, router_1.RouteParams])
                ], ReaderComponent);
                return ReaderComponent;
            }());
            exports_1("ReaderComponent", ReaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRlci5jb21wb25lbnQvcmVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFLRSx5QkFBc0IsWUFBMkIsRUFBVSxVQUFrQixFQUFVLFlBQXlCO29CQUxsSCxpQkE2QkM7b0JBeEJ1QixpQkFBWSxHQUFaLFlBQVksQ0FBZTtvQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUh6RyxpQkFBWSxHQUFFLEVBQUUsQ0FBQztvQkFJdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt5QkFDMUMsU0FBUyxDQUNWLFVBQUEsSUFBSSxJQUFLLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBLENBQUEsQ0FBQyxDQUFDO3dCQUM1QixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBZCxDQUFjO3dCQUN2QixjQUFPLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFFekIsdUNBQXVDO29CQUN2QyxFQUFFO29CQUNGLElBQUk7Z0JBQ04sQ0FBQztnQkFFRCxrQ0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBRUQscUNBQVcsR0FBWDtvQkFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBQyxFQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVoRSxDQUFDO2dCQXBDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUMsNENBQTRDO3dCQUN4RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQzt3QkFDeEQsVUFBVSxFQUFDLENBQUMsMEJBQWlCLENBQUM7d0JBQzlCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzNCLENBQUM7O21DQUFBO2dCQStCRixzQkFBQztZQUFELENBN0JBLEFBNkJDLElBQUE7WUE3QkQsNkNBNkJDLENBQUEiLCJmaWxlIjoicmVhZGVyLmNvbXBvbmVudC9yZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGRhd2lkIG9uIDMxLjA1LjE3LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIlxuaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiXG5pbXBvcnQge0xpYnJhcmlhblNlcnZpY2V9IGZyb20gXCIuLi9saWJyYXJpYW4uc2VydmljZVwiO1xuaW1wb3J0IHtSZWFkZXJTZXJ2aWNlfSBmcm9tIFwiLi9yZWFkZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicmVhZGVyXCIsXG4gIHRlbXBsYXRlVXJsOidkZXYvcmVhZGVyLmNvbXBvbmVudC9yZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGV2L3JlYWRlci5jb21wb25lbnQvcmVhZGVyLmNvbXBvbmVudC5jc3MnXSxcbiAgZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVNdLFxuICBwcm92aWRlcnM6IFtSZWFkZXJTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIFJlYWRlckNvbXBvbmVudHtcbiAgcHVibGljIGJvb2tzO1xuICBwdWJsaWMgc2VsZWN0ZWRCb29rID17fTtcbiAgcHVibGljIHJlYWRlcklkIDtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSAgX2h0dHBTZXJ2aWNlOiBSZWFkZXJTZXJ2aWNlLCBwcml2YXRlIF9hcHBSb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7XG4gICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0UmVhZGVyQm9va3ModGhpcy5yZWFkZXJJZClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PnsgdGhpcy5ib29rcyA9IGRhdGF9KSxcbiAgICAgICAgZXJyb3IgPT4gYWxlcnQoXCJlcnJvclwiKSxcbiAgICAgICAgKCkgPT4gIGNvbnNvbGUubG9nKFwiZmluaXNoXCIpO1xuICB9XG5cbiAgb25TZWxlY3QoYm9vayl7XG4gICAgdGhpcy5zZWxlY3RlZEJvb2sgPSBib29rO1xuXG4gICAgLy8gaWYgKHRoaXMuc2VsZWN0ZWRCb29rLnN0YXR1cyA9PSBcIlwiKXtcbiAgICAvL1xuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IGFueSB7XG4gICAgdGhpcy5yZWFkZXJJZCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcbiAgfVxuXG4gIGdvVG9Qcm9maWxlKCl7XG4gICB0aGlzLl9hcHBSb3V0ZXIubmF2aWdhdGUoWydSZWFkZXJQcm9maWxlJyx7aWQ6dGhpcy5yZWFkZXJJZH1dKTtcblxuICB9XG59XG4iXX0=
