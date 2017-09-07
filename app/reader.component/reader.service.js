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
    var ReaderService;
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
            ReaderService = (function () {
                function ReaderService(_http) {
                    this._http = _http;
                }
                ReaderService.prototype.getReaderBooks = function (readerId) {
                    var body = 'readerId=2'; // + readerId;
                    // var params = 'json=' + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
                    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080/reader/books');
                    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                    headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    return this._http.get('http://localhost:8080/reader/books?' + body)
                        .map(function (res) { return res.json(); });
                };
                ReaderService.prototype.getUser = function (readerId) {
                    //     var body = 'readerId=2';// + readerId;
                    // // var params = 'json=' + json;
                    //     var headers = new Headers()
                    //     headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    //     headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
                    //     headers.append('Access-Control-Allow-Origin', 'http://localhost:8080/reader/books');
                    //     headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                    //     headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    return this._http.get('http://localhost:8080/reader/user/' + readerId)
                        .map(function (res) { return res.json(); });
                };
                ReaderService.prototype.updateUser = function (id, name, surname, password, date, emai) {
                    // var body = 'login=' + login + '&password=' + password;
                    var body = 'id=' + id + '&name=' + name + '&surname=' + surname + '&password=' + password + '&birthday=' + date + '&email=' + emai + '&type=reader';
                    // var params = 'json=' + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
                    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080/librarian/addUser');
                    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                    headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    return this._http.post('http://localhost:8080/reader/UpdateUser', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ReaderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ReaderService);
                return ReaderService;
            }());
            exports_1("ReaderService", ReaderService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRlci5jb21wb25lbnQvcmVhZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPSDtnQkFDRSx1QkFBcUIsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO2dCQUNoQyxDQUFDO2dCQUVELHNDQUFjLEdBQWQsVUFBZSxRQUFRO29CQUNyQixJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsQ0FBQSxjQUFjO29CQUMxQywrQkFBK0I7b0JBQzNCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUE7b0JBQzNCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7b0JBQ3BFLE9BQU8sQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztvQkFDdkUsT0FBTyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO29CQUNwRixPQUFPLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLHFCQUFxQixDQUFDLENBQUM7b0JBQ3RFLE9BQU8sQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRSxJQUFJLENBQUM7eUJBQzdELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFDRCwrQkFBTyxHQUFQLFVBQVEsUUFBUTtvQkFDbEIsNkNBQTZDO29CQUM3QyxrQ0FBa0M7b0JBQ2xDLGtDQUFrQztvQkFDbEMsMkVBQTJFO29CQUMzRSw4RUFBOEU7b0JBQzlFLDJGQUEyRjtvQkFDM0YsNkVBQTZFO29CQUM3RSxzRUFBc0U7b0JBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsR0FBRSxRQUFRLENBQUM7eUJBQ2hFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxrQ0FBVSxHQUFWLFVBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJO29CQUNoRCx5REFBeUQ7b0JBQ3pELElBQUksSUFBSSxHQUFFLEtBQUssR0FBRyxFQUFFLEdBQUUsUUFBUSxHQUFHLElBQUksR0FBRyxXQUFXLEdBQUcsT0FBTyxHQUFFLFlBQVksR0FBRyxRQUFRLEdBQUUsWUFBWSxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsSUFBSSxHQUFFLGNBQWMsQ0FBQztvQkFDL0ksK0JBQStCO29CQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFBO29CQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO29CQUNwRSxPQUFPLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLHVCQUF1QixDQUFDLENBQUM7b0JBQ3ZFLE9BQU8sQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUseUNBQXlDLENBQUMsQ0FBQztvQkFDekYsT0FBTyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO29CQUN0RSxPQUFPLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUUvRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMseUNBQXlDLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO3lCQUN2RixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBRTlCLENBQUM7Z0JBNUNIO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQTZDYixvQkFBQztZQUFELENBNUNBLEFBNENDLElBQUE7WUE1Q0QseUNBNENDLENBQUEiLCJmaWxlIjoicmVhZGVyLmNvbXBvbmVudC9yZWFkZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBkYXdpZCBvbiAwMS4wNi4xNy5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtIdHRwLEhlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWFkZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSAgX2h0dHA6IEh0dHApIHtcbiAgfVxuXG4gIGdldFJlYWRlckJvb2tzKHJlYWRlcklkKSB7XG4gICAgdmFyIGJvZHkgPSAncmVhZGVySWQ9Mic7Ly8gKyByZWFkZXJJZDtcbi8vIHZhciBwYXJhbXMgPSAnanNvbj0nICsganNvbjtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhZGVyL2Jvb2tzJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULFBVVCxQT1NULERFTEVURScpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWRlci9ib29rcz8nKyBib2R5KVxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgfVxuICBnZXRVc2VyKHJlYWRlcklkKSB7XG4vLyAgICAgdmFyIGJvZHkgPSAncmVhZGVySWQ9Mic7Ly8gKyByZWFkZXJJZDtcbi8vIC8vIHZhciBwYXJhbXMgPSAnanNvbj0nICsganNvbjtcbi8vICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbi8vICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuLy8gICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG4vLyAgICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhZGVyL2Jvb2tzJyk7XG4vLyAgICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULFBVVCxQT1NULERFTEVURScpO1xuLy8gICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWRlci91c2VyLycrIHJlYWRlcklkKVxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXIoaWQsIG5hbWUsIHN1cm5hbWUsIHBhc3N3b3JkLCBkYXRlLCBlbWFpKXtcbiAgICAvLyB2YXIgYm9keSA9ICdsb2dpbj0nICsgbG9naW4gKyAnJnBhc3N3b3JkPScgKyBwYXNzd29yZDtcbiAgICB2YXIgYm9keSA9J2lkPScgKyBpZCArJyZuYW1lPScgKyBuYW1lICsgJyZzdXJuYW1lPScgKyBzdXJuYW1lICsnJnBhc3N3b3JkPScgKyBwYXNzd29yZCArJyZiaXJ0aGRheT0nICsgZGF0ZSArICcmZW1haWw9JyArIGVtYWkgKycmdHlwZT1yZWFkZXInO1xuICAgIC8vIHZhciBwYXJhbXMgPSAnanNvbj0nICsganNvbjtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vbG9jYWxob3N0OjgwODAvbGlicmFyaWFuL2FkZFVzZXInKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsUFVULFBPU1QsREVMRVRFJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnQ29udGVudC1UeXBlJyk7XG5cbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhZGVyL1VwZGF0ZVVzZXInLCBib2R5LCB7IGhlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblxuICB9XG59XG4iXX0=
