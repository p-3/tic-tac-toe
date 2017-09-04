import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';

import {GameService} from './services/game.service';
import {PlayFieldComponent} from './components/playfield/playfield.component';
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
        PlayFieldComponent,
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


