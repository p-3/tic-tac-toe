// example of karma jasmine unit tests
// Unit test runner crash after execute, see https://github.com/NativeScript/nativescript-unit-test-runner/issues/19 for temp fix


let reflect = require('reflect-metadata');
import {GameService} from "../services/game.service";

declare let describe: any;
declare let it: any;
declare let expect: any;

//       273                 84
//        \               /
//          1 |   2 |   4  = 7
//       -----+-----+-----
//          8 |  16 |  32  = 56
//       -----+-----+-----
//         64 | 128 | 256  = 448
//       =================
//         73   146   292

describe("game.service.ts unit testing", function() {

    it("56 should return win (true)", function() {
        expect(GameService.checkWins(56)).toBe(true);

    });
    it("291 should return false", function() {
        expect(GameService.checkWins(64)).toBe(false);
    });

});
