
import {Component} from "angular2/core";
import {LoginService} from "../../../../../../www/GameCenter/dev/login.service";
import {Router} from "angular2/router";

@Component({
  selector: "login",
  templateUrl:'dev/login.component/login.component.html',
  styleUrls: ['dev/login.component/login.component.css'],
  providers: [LoginService]
})
export class LoginComponent{
    public userID;
    public userType;
    response : string;
    public user;
    public userKeys;
    constructor (private  _loginService: LoginService, private _router: Router){}

    onLogin(login,password) {
      this._loginService.login(login,password)
          .subscribe(
            data => this.user = data,
            error => this.response = "Niepoprawne dane",
            () => this.checkIfLogin());
    }
    checkIfLogin() {
        if (this.response != "Niepoprawne dane") {
             this.userKeys = Object.keys(this.user);

            this.userID = this.user[ this.userKeys[0]];
            var url ='';

            if(this.userID != ''){
                this._router.navigate(["ListGames",{id:this.userID}]);
            }
            else {
                this.response = "Niepoprawne dane";
            }
        }
    }
}
