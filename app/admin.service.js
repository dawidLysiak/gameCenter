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
    var AdminService;
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
            AdminService = (function () {
                function AdminService(_http) {
                    this._http = _http;
                }
                AdminService.prototype.getAllBooks = function () {
                    return this._http.get('http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/librarian/allBooks')
                        .map(function (res) { return res.json(); });
                };
                //
                // getLoanBooks(){
                //   return this._http.get('http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/librarian/loansBooks')
                //       .map(res => res.json());
                // }
                //
                // getFreeBooks(){
                //   return this._http.get('http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/librarian/freeBooks')
                //       .map(res => res.json());
                // }
                //
                AdminService.prototype.getAllUsers = function () {
                    return this._http.get('http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/librarian/allUsers')
                        .map(function (res) { return res.json(); });
                };
                // getBook(id){
                //   return this._http.get('http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT//reader/book/'+id)
                //     .map(res => res.json());
                // }
                // addBook(name, author, publishingHouse, category, pages){
                //   // var body = 'login=' + login + '&password=' + password;
                //   var body = 'name=' + name +'&author=' + author + '&publishingHouse=' + publishingHouse +'&categoryBook=' + category +'&pages=' + pages;
                //   // var params = 'json=' + json;
                //   var headers = new Headers()
                //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
                //   headers.append('Access-Control-Allow-Origin', 'http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/');
                //   headers.append('Access-Control-Allow-Origin', 'http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/librarian/addBook');
                //   headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                //   headers.append('Access-Control-Allow-Headers', 'Content-Type');
                //
                //   return this._http.post('http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/librarian/addBook', body, { headers: headers})
                //       .map(res => res.json());
                // }
                //
                AdminService.prototype.updateUser = function (id, login, name, surname, password, date, emai) {
                    // var body = 'login=' + login + '&password=' + password;
                    var body = 'id=' + id + '&login=' + login + '&name=' + name + '&surname=' + surname + '&password=' + password + '&birthday=' + date + '&email=' + emai + '&type=reader';
                    // var params = 'json=' + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
                    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080/librarian/addUser');
                    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                    headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    return this._http.post('http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/reader/UpdateUser', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //
                // loan(idBook,idUser){
                //   // var body = 'login=' + login + '&password=' + password;
                //   var body = 'userId=' + idUser +'&bookId=' + idBook;
                //   // var params = 'json=' + json;
                //   var headers = new Headers()
                //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
                //   headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
                //   headers.append('Access-Control-Allow-Origin', 'http://localhost:8080/librarian/loanBook');
                //   headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                //   headers.append('Access-Control-Allow-Headers', 'Content-Type');
                //
                //   return this._http.get('http://localhost:8080/librarian/loanBook?'+body)
                //       .map(res => res.json());
                // }
                //
                AdminService.prototype.deleteUser = function (id) {
                    return this._http.delete('http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/admin/deleteUser/' + id)
                        .map(function (res) { return res.json(); });
                };
                AdminService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AdminService);
                return AdminService;
            }());
            exports_1("AdminService", AdminService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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L0YsMkVBQTJFO2dCQUMzRSxvRUFBb0U7Z0JBQ3BFLEVBQUU7Z0JBQ0YsNEVBQTRFO2dCQUM1RSxpQ0FBaUM7Z0JBQ2pDLElBQUk7Z0JBQ0osRUFBRTtnQkFDRixpQ0FBVSxHQUFWLFVBQVcsRUFBRTtvQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMseUVBQXlFLEdBQUMsRUFBRSxDQUFDO3lCQUNqRyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBNUVIO29CQUFDLGlCQUFVLEVBQUU7O2dDQUFBO2dCQTZFYixtQkFBQztZQUFELENBNUVBLEFBNEVDLElBQUE7WUE1RUQsdUNBNEVDLENBQUEiLCJmaWxlIjoiYWRtaW4uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBkYXdpZCBvbiAwMS4wNi4xNy5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtIdHRwLEhlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZG1pblNlcnZpY2V7XG4gIGNvbnN0cnVjdG9yIChwcml2YXRlICBfaHR0cDogSHR0cCkge31cblxuICBnZXRBbGxCb29rcygpe1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2VsZXRyYXguZHVja2Rucy5vcmc6MTAwMjAvTGlicmFyeS0xLjAtU05BUFNIT1QvbGlicmFyaWFuL2FsbEJvb2tzJylcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG4gIC8vXG4gIC8vIGdldExvYW5Cb29rcygpe1xuICAvLyAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2VsZXRyYXguZHVja2Rucy5vcmc6MTAwMjAvTGlicmFyeS0xLjAtU05BUFNIT1QvbGlicmFyaWFuL2xvYW5zQm9va3MnKVxuICAvLyAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgLy8gfVxuICAvL1xuICAvLyBnZXRGcmVlQm9va3MoKXtcbiAgLy8gICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9lbGV0cmF4LmR1Y2tkbnMub3JnOjEwMDIwL0xpYnJhcnktMS4wLVNOQVBTSE9UL2xpYnJhcmlhbi9mcmVlQm9va3MnKVxuICAvLyAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgLy8gfVxuICAvL1xuICBnZXRBbGxVc2Vycygpe1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2VsZXRyYXguZHVja2Rucy5vcmc6MTAwMjAvTGlicmFyeS0xLjAtU05BUFNIT1QvbGlicmFyaWFuL2FsbFVzZXJzJylcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgLy8gZ2V0Qm9vayhpZCl7XG4gIC8vICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vZWxldHJheC5kdWNrZG5zLm9yZzoxMDAyMC9MaWJyYXJ5LTEuMC1TTkFQU0hPVC8vcmVhZGVyL2Jvb2svJytpZClcbiAgLy8gICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAvLyB9XG4gIC8vIGFkZEJvb2sobmFtZSwgYXV0aG9yLCBwdWJsaXNoaW5nSG91c2UsIGNhdGVnb3J5LCBwYWdlcyl7XG4gIC8vICAgLy8gdmFyIGJvZHkgPSAnbG9naW49JyArIGxvZ2luICsgJyZwYXNzd29yZD0nICsgcGFzc3dvcmQ7XG4gIC8vICAgdmFyIGJvZHkgPSAnbmFtZT0nICsgbmFtZSArJyZhdXRob3I9JyArIGF1dGhvciArICcmcHVibGlzaGluZ0hvdXNlPScgKyBwdWJsaXNoaW5nSG91c2UgKycmY2F0ZWdvcnlCb29rPScgKyBjYXRlZ29yeSArJyZwYWdlcz0nICsgcGFnZXM7XG4gIC8vICAgLy8gdmFyIHBhcmFtcyA9ICdqc29uPScgKyBqc29uO1xuICAvLyAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAvLyAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gIC8vICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vZWxldHJheC5kdWNrZG5zLm9yZzoxMDAyMC9MaWJyYXJ5LTEuMC1TTkFQU0hPVC8nKTtcbiAgLy8gICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJ2h0dHA6Ly9lbGV0cmF4LmR1Y2tkbnMub3JnOjEwMDIwL0xpYnJhcnktMS4wLVNOQVBTSE9UL2xpYnJhcmlhbi9hZGRCb29rJyk7XG4gIC8vICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULFBVVCxQT1NULERFTEVURScpO1xuICAvLyAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ0NvbnRlbnQtVHlwZScpO1xuICAvL1xuICAvLyAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9lbGV0cmF4LmR1Y2tkbnMub3JnOjEwMDIwL0xpYnJhcnktMS4wLVNOQVBTSE9UL2xpYnJhcmlhbi9hZGRCb29rJywgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzfSlcbiAgLy8gICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIC8vIH1cbiAgLy9cbiAgdXBkYXRlVXNlcihpZCxsb2dpbiwgbmFtZSwgc3VybmFtZSwgcGFzc3dvcmQsIGRhdGUsIGVtYWkpe1xuICAgIC8vIHZhciBib2R5ID0gJ2xvZ2luPScgKyBsb2dpbiArICcmcGFzc3dvcmQ9JyArIHBhc3N3b3JkO1xuICAgIHZhciBib2R5ID0naWQ9JyArIGlkICsgJyZsb2dpbj0nICsgbG9naW4gKycmbmFtZT0nICsgbmFtZSArICcmc3VybmFtZT0nICsgc3VybmFtZSArJyZwYXNzd29yZD0nICsgcGFzc3dvcmQgKycmYmlydGhkYXk9JyArIGRhdGUgKyAnJmVtYWlsPScgKyBlbWFpICsnJnR5cGU9cmVhZGVyJztcbiAgICAvLyB2YXIgcGFyYW1zID0gJ2pzb249JyArIGpzb247XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xpYnJhcmlhbi9hZGRVc2VyJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULFBVVCxQT1NULERFTEVURScpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ0NvbnRlbnQtVHlwZScpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2VsZXRyYXguZHVja2Rucy5vcmc6MTAwMjAvTGlicmFyeS0xLjAtU05BUFNIT1QvcmVhZGVyL1VwZGF0ZVVzZXInLCBib2R5LCB7IGhlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cbiAgLy9cbiAgLy8gbG9hbihpZEJvb2ssaWRVc2VyKXtcbiAgLy8gICAvLyB2YXIgYm9keSA9ICdsb2dpbj0nICsgbG9naW4gKyAnJnBhc3N3b3JkPScgKyBwYXNzd29yZDtcbiAgLy8gICB2YXIgYm9keSA9ICd1c2VySWQ9JyArIGlkVXNlciArJyZib29rSWQ9JyArIGlkQm9vaztcbiAgLy8gICAvLyB2YXIgcGFyYW1zID0gJ2pzb249JyArIGpzb247XG4gIC8vICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gIC8vICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgLy8gICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuICAvLyAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xpYnJhcmlhbi9sb2FuQm9vaycpO1xuICAvLyAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCxQVVQsUE9TVCxERUxFVEUnKTtcbiAgLy8gICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdDb250ZW50LVR5cGUnKTtcbiAgLy9cbiAgLy8gICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9saWJyYXJpYW4vbG9hbkJvb2s/Jytib2R5KVxuICAvLyAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgLy8gfVxuICAvL1xuICBkZWxldGVVc2VyKGlkKXtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoJ2h0dHA6Ly9lbGV0cmF4LmR1Y2tkbnMub3JnOjEwMDIwL0xpYnJhcnktMS4wLVNOQVBTSE9UL2FkbWluL2RlbGV0ZVVzZXIvJytpZClcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cbn1cbiJdfQ==
