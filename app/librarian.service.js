/**
 * Created by dawid on 01.06.17.
 */
System.register(["angular2/core", 'rxjs/add/operator/map', "angular2/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var LibrarianService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LibrarianService = (function () {
                function LibrarianService(_http) {
                    this._http = _http;
                }
                LibrarianService.prototype.getAllGame = function () {
                    return this._http.get('http://localhost/gameCenter/allGames.php')
                        .map(function (res) { return res.json(); });
                };
                LibrarianService.prototype.findGame = function (text) {
                    return this._http.get('http://localhost/gameCenter/findGame.php?text=' + text)
                        .map(function (res) { return res.json(); });
                };
                LibrarianService.prototype.getAllGameDesc = function () {
                    return this._http.get('http://localhost/gameCenter/allGames.php?order=desc')
                        .map(function (res) { return res.json(); });
                };
                LibrarianService.prototype.getComment = function (id) {
                    return this._http.get('http://localhost/gameCenter/comments.php?id=' + id)
                        .map(function (res) { return res.json(); });
                };
                LibrarianService.prototype.addComment = function (rate, comment, id) {
                    // var body = 'login=' + login + '&password=' + password;
                    var body = 'rate=' + rate + '&comment=' + comment + '&id=' + id;
                    // var params = 'json=' + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('Access-Control-Allow-Origin', 'http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/');
                    headers.append('Access-Control-Allow-Origin', 'http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/librarian/addBook');
                    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                    headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    return this._http.post('http://localhost/gameCenter/rate.php', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                LibrarianService.prototype.addGame = function (name, desc, category, image, file) {
                    // var body = 'login=' + login + '&password=' + category
                    var body = 'name=' + name + '&desc=' + desc + '&category=' + category + '&image=' + image + '&file=' + file;
                    // var params = 'json=' + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('Access-Control-Allow-Origin', 'http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/');
                    headers.append('Access-Control-Allow-Origin', 'http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/librarian/addBook');
                    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                    headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    return this._http.post('http://localhost/gameCenter/addGame.php', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                LibrarianService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LibrarianService);
                return LibrarianService;
            }());
            exports_1("LibrarianService", LibrarianService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnJhcmlhbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0g7Z0JBQ0UsMEJBQXNCLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtnQkFBRyxDQUFDO2dCQUVuQyxxQ0FBVSxHQUFWO29CQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQzt5QkFDOUQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUNBLG1DQUFRLEdBQVIsVUFBUyxJQUFJO29CQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsR0FBQyxJQUFJLENBQUM7eUJBQ3ZFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCx5Q0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsQ0FBQzt5QkFDdkUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUNILHFDQUFVLEdBQVYsVUFBVyxFQUFFO29CQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsR0FBQyxFQUFFLENBQUM7eUJBQ25FLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCxxQ0FBVSxHQUFWLFVBQVcsSUFBSSxFQUFHLE9BQU8sRUFBRSxFQUFFO29CQUMzQix5REFBeUQ7b0JBQ3pELElBQUksSUFBSSxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUUsV0FBVyxHQUFHLE9BQU8sR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUMvRCwrQkFBK0I7b0JBQy9CLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUE7b0JBQzNCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7b0JBQ3BFLE9BQU8sQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsd0RBQXdELENBQUMsQ0FBQztvQkFDeEcsT0FBTyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSx5RUFBeUUsQ0FBQyxDQUFDO29CQUN6SCxPQUFPLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLHFCQUFxQixDQUFDLENBQUM7b0JBQ3RFLE9BQU8sQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBRS9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7eUJBQ3BGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFFQyxrQ0FBTyxHQUFQLFVBQVEsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUk7b0JBQ3JDLHdEQUF3RDtvQkFDeEQsSUFBSSxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksR0FBRSxRQUFRLEdBQUcsSUFBSSxHQUFHLFlBQVksR0FBRyxRQUFRLEdBQUcsU0FBUyxHQUFHLEtBQUssR0FBRSxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUMxRywrQkFBK0I7b0JBQy9CLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUE7b0JBQzNCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7b0JBQ3BFLE9BQU8sQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsd0RBQXdELENBQUMsQ0FBQztvQkFDeEcsT0FBTyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSx5RUFBeUUsQ0FBQyxDQUFDO29CQUN6SCxPQUFPLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLHFCQUFxQixDQUFDLENBQUM7b0JBQ3RFLE9BQU8sQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBRS9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7eUJBQ3ZGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFoREw7b0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBaURiLHVCQUFDO1lBQUQsQ0FoREEsQUFnREMsSUFBQTtZQWhERCwrQ0FnREMsQ0FBQSIsImZpbGUiOiJsaWJyYXJpYW4uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBkYXdpZCBvbiAwMS4wNi4xNy5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtIdHRwLEhlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaWJyYXJpYW5TZXJ2aWNle1xuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSAgX2h0dHA6IEh0dHApIHt9XG5cbiAgICBnZXRBbGxHYW1lKCl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2dhbWVDZW50ZXIvYWxsR2FtZXMucGhwJylcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG4gICBmaW5kR2FtZSh0ZXh0KXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2dhbWVDZW50ZXIvZmluZEdhbWUucGhwP3RleHQ9Jyt0ZXh0KVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuICAgIGdldEFsbEdhbWVEZXNjKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdC9nYW1lQ2VudGVyL2FsbEdhbWVzLnBocD9vcmRlcj1kZXNjJylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cbiAgZ2V0Q29tbWVudChpZCl7XG4gIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdC9nYW1lQ2VudGVyL2NvbW1lbnRzLnBocD9pZD0nK2lkKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cbiAgYWRkQ29tbWVudChyYXRlICwgY29tbWVudCwgaWQpe1xuICAgIC8vIHZhciBib2R5ID0gJ2xvZ2luPScgKyBsb2dpbiArICcmcGFzc3dvcmQ9JyArIHBhc3N3b3JkO1xuICAgIHZhciBib2R5ID0gJ3JhdGU9JyArIHJhdGUgKycmY29tbWVudD0nICsgY29tbWVudCArICcmaWQ9JyArIGlkO1xuICAgIC8vIHZhciBwYXJhbXMgPSAnanNvbj0nICsganNvbjtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2VsZXRyYXguZHVja2Rucy5vcmc6MTAwMjAvTGlicmFyeS0xLjAtU05BUFNIT1QvJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vZWxldHJheC5kdWNrZG5zLm9yZzoxMDAyMC9MaWJyYXJ5LTEuMC1TTkFQU0hPVC9saWJyYXJpYW4vYWRkQm9vaycpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCxQVVQsUE9TVCxERUxFVEUnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdDb250ZW50LVR5cGUnKTtcblxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3QvZ2FtZUNlbnRlci9yYXRlLnBocCcsIGJvZHksIHsgaGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgICBhZGRHYW1lKG5hbWUsIGRlc2MsIGNhdGVnb3J5LCBpbWFnZSwgZmlsZSl7XG4gICAgICAgIC8vIHZhciBib2R5ID0gJ2xvZ2luPScgKyBsb2dpbiArICcmcGFzc3dvcmQ9JyArIGNhdGVnb3J5XG4gICAgICAgIHZhciBib2R5ID0gJ25hbWU9JyArIG5hbWUgKycmZGVzYz0nICsgZGVzYyArICcmY2F0ZWdvcnk9JyArIGNhdGVnb3J5ICsgJyZpbWFnZT0nICsgaW1hZ2UgKycmZmlsZT0nICsgZmlsZTtcbiAgICAgICAgLy8gdmFyIHBhcmFtcyA9ICdqc29uPScgKyBqc29uO1xuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vZWxldHJheC5kdWNrZG5zLm9yZzoxMDAyMC9MaWJyYXJ5LTEuMC1TTkFQU0hPVC8nKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vZWxldHJheC5kdWNrZG5zLm9yZzoxMDAyMC9MaWJyYXJ5LTEuMC1TTkFQU0hPVC9saWJyYXJpYW4vYWRkQm9vaycpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsUFVULFBPU1QsREVMRVRFJyk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ0NvbnRlbnQtVHlwZScpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3QvZ2FtZUNlbnRlci9hZGRHYW1lLnBocCcsIGJvZHksIHsgaGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG59XG4iXX0=
