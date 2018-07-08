import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Page} from 'ui/page';

@Component({
    moduleId: module.id,
    selector: 'gameresult',
    templateUrl: './gameresult.html',
    styleUrls: ['./gameresult.css']
})

export class GameResultComponent implements OnInit {
    private result: string;
    private id: string;

    constructor(private router: Router, private route: ActivatedRoute, private page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.result = this.getResult();
    }

    /*
     * Check if the id contains the name of any och the players or if we have a tie game.
     * Return the correct string to be displayed.
     */
    getResult(): string {
        return this.id === 'tie' ? 'tie game' : this.id + ' won the game!';
    }

    /*
     * If the button 'Play again' is clicked, route to the main page and start a new game.
     */
    gameRestart() {
        this.router.navigate(['board']);
    }
}
