import {Component} from '@angular/core';
import {EventData} from 'data/observable';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';
import {Page} from 'ui/page';

@Component({
    moduleId: module.id,
    selector: 'playfield',
    templateUrl: './playfield.html',
    styleUrls: ['./playfield.css'],
})

export class PlayFieldComponent {
    private player: string = 'x';
    private activePlayer: string = 'player - x';
    private scores: any = {x: 0, o: 0};
    private turns: number = 0;

    constructor(private gameService: GameService, private router: Router, private page: Page) {
        page.actionBarHidden = true;
    }

    toggleTile(args: EventData) {
        this.turns++;
        this.activePlayer = `player - ${this.player === 'x' ? 'o' : 'x'}`;

        const button = args.object;
        button.set('text', this.player.toUpperCase());
        button.set('isEnabled', false);

        this.scores[this.player] = this.scores[this.player] + button.get('score');

        if (GameService.checkWins(this.scores[this.player])) {
            this.router.navigate(['gameresult/' + this.player.toUpperCase()]);
        } else if (this.turns === 9) {
            this.router.navigate(['gameresult/tie']);
        }

        this.player = this.player === 'o' ? 'x' : 'o';
        this.gameService.clickSound();
    }
}
