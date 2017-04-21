import {Component, OnInit} from "@angular/core";
import {EventData} from "data/observable";
import {Router} from "@angular/router";
import {GameService} from "../../services/game.service";
import {Page} from "ui/page";
let sound = require("nativescript-sound");

@Component({
    selector: "playfield",
    moduleId: module.id,
    templateUrl: "./playfield.html",
    styleUrls: ["./playfield.css"],

})
export class PlayFieldComponent implements OnInit {

    private player: any;
    private activePlayer: any;
    private scores: any = {
        x: 0, o: 0
    };
    private turns: number = 0;
    private clickSound: any = sound.create("~/sound/click.mp3");

    constructor(private gameService: GameService, private router: Router, private page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.togglePlayer();
    }

    toggleTile(args: EventData) {

        this.togglePlayer();
        this.clickSound.play();
        this.turns++;

        let button = args.object;
        button.set("isEnabled", false);
        button.set("text", this.player.toUpperCase());
        button.set("isEnabled", false);

        this.scores[this.player] = (this.scores[this.player] + button.get("score"));
        if (this.gameService.checkWins(this.scores[this.player])) {
            this.router.navigate(["gameresult/" + this.player]);
        } else {
            if (this.turns === 9) {
                this.router.navigate(["gameresult/tie"]);
            }
        }
    }

    togglePlayer() {
        this.player = (this.gameService.getActivePlayer()) ? "o" : "x";
        this.activePlayer = (this.player === "x") ? "o" : "x";
    }
}
