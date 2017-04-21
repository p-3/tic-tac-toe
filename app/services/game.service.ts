import {Injectable} from "@angular/core";

@Injectable()
export class GameService {
    private player: boolean = false;

    getActivePlayer(): boolean {
        this.player = !this.player;
        return this.player;
    }

    checkWins(playerScore): boolean {
        /*

         273                 84
         \               /
         1 |   2 |   4  = 7
         -----+-----+-----
         8 |  16 |  32  = 56
         -----+-----+-----
         64 | 128 | 256  = 448
         =================
         73   146   292

         */

        let possibleWins = [7, 56, 448, 73, 146, 292, 273, 84];

        for (let i = 0; i < possibleWins.length; i++) {
            if ((possibleWins[i] & playerScore) === possibleWins[i]) {
                return true;
            }
        }
        return false;
    }

}
