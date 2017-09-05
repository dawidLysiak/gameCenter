/**
 * Created by dawid on 01.06.17.
 */
import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import  'rxjs/add/operator/map';

@Injectable()
export class LoginService{
  constructor (private  _http: Http) {}

  login(login, password){
    // var json = JSON.stringify({login: login, password: password });

    var body = 'login=' + login + '&password=' + password;
   // var params = 'json=' + json;
    var headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/gameCenter/login.php/');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/gameCenter/login.php');
    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');

    return this._http.post('http://localhost/gameCenter/login.php', body, {
      headers: headers
    })
      .map(res => res.json());
  }
}
