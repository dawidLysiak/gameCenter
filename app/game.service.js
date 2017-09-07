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
    var GameService;
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
            GameService = (function () {
                function GameService(_http) {
                    this._http = _http;
                }
                GameService.prototype.getAllGame = function () {
                    return this._http.get('http://localhost/gameCenter/allGames.php')
                        .map(function (res) { return res.json(); });
                };
                GameService.prototype.findGame = function (text) {
                    return this._http.get('http://localhost/gameCenter/findGame.php?text=' + text)
                        .map(function (res) { return res.json(); });
                };
                GameService.prototype.getAllGameDesc = function () {
                    return this._http.get('http://localhost/gameCenter/allGames.php?order=desc')
                        .map(function (res) { return res.json(); });
                };
                GameService.prototype.getComment = function (id) {
                    return this._http.get('http://localhost/gameCenter/comments.php?id=' + id)
                        .map(function (res) { return res.json(); });
                };
                GameService.prototype.addComment = function (rate, comment, id) {
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
                GameService.prototype.addGame = function (name, desc, category, image, file) {
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
                GameService.prototype.postWithFile = function (url, postData, files) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    var formData = new FormData();
                    formData.append('files', files[0], files[0].name);
                    // For multiple files
                    // for (let i = 0; i < files.length; i++) {
                    //     formData.append(`files[]`, files[i], files[i].name);
                    // }
                    if (postData !== "" && postData !== undefined && postData !== null) {
                        for (var property in postData) {
                            if (postData.hasOwnProperty(property)) {
                                formData.append(property, postData[property]);
                            }
                        }
                    }
                    var returnReponse = new Promise(function (resolve, reject) {
                        _this.http.post(_this.constants.root_dir + url, formData, {
                            headers: headers
                        }).subscribe(function (res) {
                            _this.responseData = res.json();
                            resolve(_this.responseData);
                        }, function (error) {
                            _this.router.navigate(['/login']);
                            reject(error);
                        });
                    });
                    return returnReponse;
                };
                GameService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GameService);
                return GameService;
            }());
            exports_1("GameService", GameService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3BDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUNsRCxDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxJQUFJLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUM1QyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUUsUUFBUSxFQUFFOzRCQUNwRCxPQUFPLEVBQUUsT0FBTzt5QkFDbkIsQ0FBQyxDQUFDLFNBQVMsQ0FDUixVQUFBLEdBQUc7NEJBQ0MsS0FBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQy9CLE9BQU8sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQy9CLENBQUMsRUFDRCxVQUFBLEtBQUs7NEJBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2xCLENBQUMsQ0FDSixDQUFDO29CQUNOLENBQUMsQ0FBQyxDQUFDO29CQUNILE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQ3pCLENBQUM7Z0JBakZMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQWtGYixrQkFBQztZQUFELENBakZBLEFBaUZDLElBQUE7WUFqRkQscUNBaUZDLENBQUEiLCJmaWxlIjoiZ2FtZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGRhd2lkIG9uIDAxLjA2LjE3LlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCAgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQge0h0dHAsSGVhZGVyc30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdhbWVTZXJ2aWNle1xuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSAgX2h0dHA6IEh0dHApIHt9XG5cbiAgICBnZXRBbGxHYW1lKCl7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2dhbWVDZW50ZXIvYWxsR2FtZXMucGhwJylcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG4gICBmaW5kR2FtZSh0ZXh0KXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2dhbWVDZW50ZXIvZmluZEdhbWUucGhwP3RleHQ9Jyt0ZXh0KVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuICAgIGdldEFsbEdhbWVEZXNjKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdC9nYW1lQ2VudGVyL2FsbEdhbWVzLnBocD9vcmRlcj1kZXNjJylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cbiAgZ2V0Q29tbWVudChpZCl7XG4gIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdC9nYW1lQ2VudGVyL2NvbW1lbnRzLnBocD9pZD0nK2lkKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cbiAgYWRkQ29tbWVudChyYXRlICwgY29tbWVudCwgaWQpe1xuICAgIC8vIHZhciBib2R5ID0gJ2xvZ2luPScgKyBsb2dpbiArICcmcGFzc3dvcmQ9JyArIHBhc3N3b3JkO1xuICAgIHZhciBib2R5ID0gJ3JhdGU9JyArIHJhdGUgKycmY29tbWVudD0nICsgY29tbWVudCArICcmaWQ9JyArIGlkO1xuICAgIC8vIHZhciBwYXJhbXMgPSAnanNvbj0nICsganNvbjtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2VsZXRyYXguZHVja2Rucy5vcmc6MTAwMjAvTGlicmFyeS0xLjAtU05BUFNIT1QvJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vZWxldHJheC5kdWNrZG5zLm9yZzoxMDAyMC9MaWJyYXJ5LTEuMC1TTkFQU0hPVC9saWJyYXJpYW4vYWRkQm9vaycpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCxQVVQsUE9TVCxERUxFVEUnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdDb250ZW50LVR5cGUnKTtcblxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3QvZ2FtZUNlbnRlci9yYXRlLnBocCcsIGJvZHksIHsgaGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgICBhZGRHYW1lKG5hbWUsIGRlc2MsIGNhdGVnb3J5LCBpbWFnZSwgZmlsZSl7XG4gICAgICAgIC8vIHZhciBib2R5ID0gJ2xvZ2luPScgKyBsb2dpbiArICcmcGFzc3dvcmQ9JyArIGNhdGVnb3J5XG4gICAgICAgIHZhciBib2R5ID0gJ25hbWU9JyArIG5hbWUgKycmZGVzYz0nICsgZGVzYyArICcmY2F0ZWdvcnk9JyArIGNhdGVnb3J5ICsgJyZpbWFnZT0nICsgaW1hZ2UgKycmZmlsZT0nICsgZmlsZTtcbiAgICAgICAgLy8gdmFyIHBhcmFtcyA9ICdqc29uPScgKyBqc29uO1xuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vZWxldHJheC5kdWNrZG5zLm9yZzoxMDAyMC9MaWJyYXJ5LTEuMC1TTkFQU0hPVC8nKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vZWxldHJheC5kdWNrZG5zLm9yZzoxMDAyMC9MaWJyYXJ5LTEuMC1TTkFQU0hPVC9saWJyYXJpYW4vYWRkQm9vaycpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsUFVULFBPU1QsREVMRVRFJyk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ0NvbnRlbnQtVHlwZScpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3QvZ2FtZUNlbnRlci9hZGRHYW1lLnBocCcsIGJvZHksIHsgaGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG4gICAgcG9zdFdpdGhGaWxlICh1cmw6IHN0cmluZywgcG9zdERhdGE6IGFueSwgZmlsZXM6IEZpbGVbXSkge1xuXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhOkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZXMnLCBmaWxlc1swXSwgZmlsZXNbMF0ubmFtZSk7XG4gICAgICAgIC8vIEZvciBtdWx0aXBsZSBmaWxlc1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBmb3JtRGF0YS5hcHBlbmQoYGZpbGVzW11gLCBmaWxlc1tpXSwgZmlsZXNbaV0ubmFtZSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZihwb3N0RGF0YSAhPT1cIlwiICYmIHBvc3REYXRhICE9PSB1bmRlZmluZWQgJiYgcG9zdERhdGEgIT09bnVsbCl7XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwb3N0RGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChwb3N0RGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHByb3BlcnR5LCBwb3N0RGF0YVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcmV0dXJuUmVwb25zZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uc3RhbnRzLnJvb3RfZGlyICsgdXJsLCBmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgICAgIH0pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldHVyblJlcG9uc2U7XG4gICAgfVxufVxuIl19
