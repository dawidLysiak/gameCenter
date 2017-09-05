/**
 * Created by dawid on 01.06.17.
 */

import {Injectable} from "angular2/core";
import  'rxjs/add/operator/map';
import {Http,Headers} from "angular2/http";

@Injectable()
export class GameService{
  constructor (private  _http: Http) {}

    getAllGame(){
    return this._http.get('http://localhost/gameCenter/allGames.php')
      .map(res => res.json());
  }
   findGame(text){
        return this._http.get('http://localhost/gameCenter/findGame.php?text='+text)
            .map(res => res.json());
    }
    getAllGameDesc(){
        return this._http.get('http://localhost/gameCenter/allGames.php?order=desc')
            .map(res => res.json());
    }
  getComment(id){
  return this._http.get('http://localhost/gameCenter/comments.php?id='+id)
      .map(res => res.json());
  }
  addComment(rate , comment, id){
    // var body = 'login=' + login + '&password=' + password;
    var body = 'rate=' + rate +'&comment=' + comment + '&id=' + id;
    // var params = 'json=' + json;
    var headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', 'http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/');
    headers.append('Access-Control-Allow-Origin', 'http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/librarian/addBook');
    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');

    return this._http.post('http://localhost/gameCenter/rate.php', body, { headers: headers})
        .map(res => res.json());
  }

    addGame(name, desc, category, image, file){
        // var body = 'login=' + login + '&password=' + category
        var body = 'name=' + name +'&desc=' + desc + '&category=' + category + '&image=' + image +'&file=' + file;
        // var params = 'json=' + json;
        var headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', 'http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/');
        headers.append('Access-Control-Allow-Origin', 'http://eletrax.duckdns.org:10020/Library-1.0-SNAPSHOT/librarian/addBook');
        headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');

        return this._http.post('http://localhost/gameCenter/addGame.php', body, { headers: headers})
            .map(res => res.json());
    }
    postWithFile (url: string, postData: any, files: File[]) {

        let headers = new Headers();
        let formData:FormData = new FormData();
        formData.append('files', files[0], files[0].name);
        // For multiple files
        // for (let i = 0; i < files.length; i++) {
        //     formData.append(`files[]`, files[i], files[i].name);
        // }

        if(postData !=="" && postData !== undefined && postData !==null){
            for (var property in postData) {
                if (postData.hasOwnProperty(property)) {
                    formData.append(property, postData[property]);
                }
            }
        }
        var returnReponse = new Promise((resolve, reject) => {
            this.http.post(this.constants.root_dir + url, formData, {
                headers: headers
            }).subscribe(
                res => {
                    this.responseData = res.json();
                    resolve(this.responseData);
                },
                error => {
                    this.router.navigate(['/login']);
                    reject(error);
                }
            );
        });
        return returnReponse;
    }
}
