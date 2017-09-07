System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            LoginService = (function () {
                function LoginService(_http) {
                    this._http = _http;
                }
                LoginService.prototype.login = function (login, password) {
                    // var json = JSON.stringify({login: login, password: password });
                    var body = 'login=' + login + '&password=' + password;
                    // var params = 'json=' + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('Access-Control-Allow-Origin', 'http://localhost/gameCenter/login.php/');
                    headers.append('Access-Control-Allow-Origin', 'http://localhost/gameCenter/login.php');
                    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                    headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    return this._http.post('http://localhost/gameCenter/login.php', body, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); });
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQ0Usc0JBQXNCLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtnQkFBRyxDQUFDO2dCQUVyQyw0QkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLFFBQVE7b0JBQ25CLGtFQUFrRTtvQkFFbEUsSUFBSSxJQUFJLEdBQUcsUUFBUSxHQUFHLEtBQUssR0FBRyxZQUFZLEdBQUcsUUFBUSxDQUFDO29CQUN2RCwrQkFBK0I7b0JBQzlCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUE7b0JBQzNCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7b0JBQ3BFLE9BQU8sQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztvQkFDeEYsT0FBTyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSx1Q0FBdUMsQ0FBQyxDQUFDO29CQUN2RixPQUFPLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLHFCQUFxQixDQUFDLENBQUM7b0JBQ3RFLE9BQU8sQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBRS9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsRUFBRSxJQUFJLEVBQUU7d0JBQ3BFLE9BQU8sRUFBRSxPQUFPO3FCQUNqQixDQUFDO3lCQUNDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFwQkg7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBcUJiLG1CQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCx1Q0FvQkMsQ0FBQSIsImZpbGUiOiJsb2dpbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGRhd2lkIG9uIDAxLjA2LjE3LlxuICovXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNle1xuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSAgX2h0dHA6IEh0dHApIHt9XG5cbiAgbG9naW4obG9naW4sIHBhc3N3b3JkKXtcbiAgICAvLyB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHtsb2dpbjogbG9naW4sIHBhc3N3b3JkOiBwYXNzd29yZCB9KTtcblxuICAgIHZhciBib2R5ID0gJ2xvZ2luPScgKyBsb2dpbiArICcmcGFzc3dvcmQ9JyArIHBhc3N3b3JkO1xuICAgLy8gdmFyIHBhcmFtcyA9ICdqc29uPScgKyBqc29uO1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vbG9jYWxob3N0L2dhbWVDZW50ZXIvbG9naW4ucGhwLycpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2xvY2FsaG9zdC9nYW1lQ2VudGVyL2xvZ2luLnBocCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCxQVVQsUE9TVCxERUxFVEUnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdDb250ZW50LVR5cGUnKTtcblxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3QvZ2FtZUNlbnRlci9sb2dpbi5waHAnLCBib2R5LCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgfSlcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG59XG4iXX0=
