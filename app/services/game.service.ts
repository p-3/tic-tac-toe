import {Injectable} from "@angular/core";
let sound = require("nativescript-sound");

@Injectable()
export class GameService {

    private soundFile: any = sound.create("~/assets/sound/click.mp3");

    checkWins(playerScore): boolean {

        //       273                 84
        //        \               /
        //          1 |   2 |   4  = 7
        //       -----+-----+-----
        //          8 |  16 |  32  = 56
        //       -----+-----+-----
        //         64 | 128 | 256  = 448
        //       =================
        //         73   146   292

        const possibleWins = [7, 56, 448, 73, 146, 292, 273, 84];

        for (let i = 0; i < possibleWins.length; i++) {
            if ((possibleWins[i] & playerScore) === possibleWins[i]) {
                return true;
            }
        }
        return false;
    }

    clickSound(): void {
        this.soundFile.reset();
        this.soundFile.play();
    }
}
