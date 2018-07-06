import {Component, OnInit} from '@angular/core';
import {EventData} from 'data/observable';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';
import {Page} from 'ui/page';

@Component({
    moduleId: module.id,
    selector: 'board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
})

export class BoardComponent implements OnInit {

    private player: string;
    private activePlayer: string;
    private scores: any;
    private numberOfTurns: number;

    constructor(private gameService: GameService, private router: Router, private page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        this.player = 'x';
        this.activePlayer = this.getPlayerLabel(this.player);
        this.scores = {x: 0, o: 0};
        this.numberOfTurns = 0;
    }

    /*
     * Function called when the players click on the board to do their moves.
     * Set the correct mark, 'x' or 'o'.
     */
    toggleTile(args: EventData) {
        const button = args.object;
        button.set('text', this.player.toUpperCase());
        button.set('isEnabled', false);

        this.numberOfTurns++;
        this.scores[this.player] = this.scores[this.player] + parseInt(button.get('score'));
        this.checkPlayersMove();

        this.player = this.player === 'o' ? 'x' : 'o';
        this.activePlayer = this.getPlayerLabel(this.player);

        this.gameService.clickSound();
    }


    /*
     * Get the label displaying which player is next to do his move.
     */
    private getPlayerLabel(player: string): string {
        return 'player - ' + player;
    }

    /*
     * Check if the current players move
     */
    private checkPlayersMove() {
        if (this.gameService.checkWins(this.scores[this.player])) {
            this.router.navigate(['gameresult/' + this.player.toUpperCase()]);
        }else if (this.numberOfTurns === 9) {
            this.router.navigate(['gameresult/tie']);
        }
    }
}
