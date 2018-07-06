import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';

import {GameService} from './services/game.service';
import {BoardComponent} from './components/board/board.component';
import {GameResultComponent} from './components/gameresult/gameresult.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        BoardComponent,
        GameResultComponent
    ],
    providers: [
        GameService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}


