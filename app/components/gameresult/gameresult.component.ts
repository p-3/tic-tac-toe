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
    private result: any;
    private id: any;

    constructor(private router: Router, private route: ActivatedRoute, private page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.result = this.id === 'tie' ? 'tie game' : this.id + ' won the game!';
    }

    gameRestart() {
        this.router.navigate(['board']);
    }
}
