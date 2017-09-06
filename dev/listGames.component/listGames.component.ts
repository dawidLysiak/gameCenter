
import {Component} from "angular2/core"
import {Router, ROUTER_DIRECTIVES} from "angular2/router"
import {GameService} from "../../../../../../www/GameCenter/dev/game.service";

@Component({
  selector: "librarian-main",
  templateUrl: 'dev/listGames.component/listGames.component.html',
  styleUrls:  ['dev/listGames.component/listGames.component.css'],
  directives:[ROUTER_DIRECTIVES],
  providers: [GameService]
})

export class ListGamesComponent{
  public games;
  public selectedGame ={};
  public download = "";
  public comments =[];
  public status = "";

    constructor (private  _httpService: GameService, private _appRouter: Router) {
    this._httpService.getAllGame()
        .subscribe(
        data =>{ this.games = data}),
        error => alert("error"),
        () =>  console.log("findsish");
      this.selectedGame.ico_path = "default.png";
  }
    getComments(id){
        this._httpService.getComment(id)
            .subscribe(
                data =>{ this.comments = data}),
            error => this.comments = null,
            () => console.log("Finished");
    }
  onSelect(game){
    this.selectedGame = game;
    this.download = "Download";
    // this.comments = "";
    this.getComments(this.selectedGame.id);
  }

    addComment(rate , comment, id){
        this._httpService.addComment(rate , comment, id)
            .subscribe(
                data => this.status = "Dodano",
                error => this.status = "Niepoprawne dane",
                () => console.log("Finished"));
        alert("Dodano Opinię");
    }
    updateList(order) {
        if (order == 1) {
            this._httpService.getAllGame()
                .subscribe(
                    data => {
                        this.games = data
                    }),
                error => alert("error"),
                () => console.log("finish");

        }else{
            this._httpService.getAllGameDesc()
                .subscribe(
                    data => {
                        this.games = data
                    }),
                error => alert("error"),
                () => console.log("finish");
        }
    }
    findGame(text) {
        this._httpService.findGame(text)
            .subscribe(
                data => {
                    if (data == "")
                    {
                        this.games =[];
                        this.comments = [];
                        this.selectedGame ={};
                        this.selectedGame.ico_path = "default.png";
                    }
                    else {
                        this.games = data
                    }
                }),
            error => this.games = [],
            () => console.log("finish");
}
}
