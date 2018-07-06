import {Injectable} from '@angular/core';

let sound = require('nativescript-sound');

@Injectable()
export class GameService {

    private soundFile: any = sound.create('~/assets/sound/click.mp3');

    /*
     * Check the players moves and compare the current check sum to the winning combinations.
     *
     * The winning combinations and their check sums:
     *
     *       273                 84
     *        \               /
     *          1 |   2 |   4  = 7
     *       -----+-----+-----
     *          8 |  16 |  32  = 56
     *       -----+-----+-----
     *         64 | 128 | 256  = 448
     *       =================
     *         73   146   292
     */
    checkWins(playerScore: number): boolean {

        const possibleWins = [7, 56, 448, 73, 146, 292, 273, 84];

        for (let i = 0; i < possibleWins.length; i++) {
            if ((possibleWins[i] & playerScore) === possibleWins[i]) {
                return true;
            }
        }
        return false;
    }

    /*
     * Play sound when the players do their moves.
     */
    clickSound(): void {
        this.soundFile.reset();
        this.soundFile.play();
    }
}
