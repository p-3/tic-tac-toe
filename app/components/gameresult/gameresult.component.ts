import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {Page} from "ui/page";
import {TNSFontIconService} from "nativescript-ngx-fonticon";

@Component({
    selector: "gameresult",
    moduleId: module.id,
    templateUrl: "./gameresult.html",
    styleUrls: ["./gameresult.css"]
})
export class GameResultComponent implements OnInit {
    result: any;
    id: any;

    constructor(private router: Router, private route: ActivatedRoute, private page: Page, private fonticon: TNSFontIconService) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params["id"];
        this.result = this.id === "tie" ? "tie game" : this.id.toUpperCase() + " won the game!";
    }

    gameRestart() {
        this.router.navigate(["playfield"]);
    }
}
