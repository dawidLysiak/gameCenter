/**
 * Created by dawid on 06.06.17.
 */
/**
 * Created by dawid on 06.06.17.
 */

import {Component} from "angular2/core"
import {Router, ROUTER_DIRECTIVES} from "angular2/router"
import {GameService} from "../../../../../../www/GameCenter/dev/game.service";
import {RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {FileUploadModule} from 'primeng/primeng';


@Component({
  selector: "update-book",
  templateUrl:'dev/addGame.component/addGame.component.html',
  styleUrls: ['dev/addGame.component/addGame.component.css'],
  directives:[ROUTER_DIRECTIVES],
  providers: [GameService]
})

export class AddGameComponent{
  public status;
  public baseUrl ='localhost/gameCenter/addGame.php'
  constructor (private  _httpService: GameService, private _appRouter: Router) {
  }

    addGame(name, desc, category, image, file){
    this._httpService.addGame(name, desc, category, image, file)
      .subscribe(
        data => this.status = "Dodano",
        error => this.status = "Niepoprawne dane",
        () => console.log("Finished"));
  }
    fileChange(event) {
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            let file: File = fileList[0];
            let formData:FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            let headers = new Headers();
            /** No need to include Content-Type in Angular 4 */
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({ headers: headers });
            this.http.post(`${this.apiEndPoint}`, formData, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                    data => console.log('success'),
                    error => console.log(error)
                )
        }
    }
}
