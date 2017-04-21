import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

import {PlayFieldComponent} from "./components/playfield/playfield.component";
import {GameResultComponent} from "./components/gameresult/gameresult.component";

const routes: Routes = [
    {path: "", redirectTo: "/playfield", pathMatch: "full"},
    {path: "playfield", component: PlayFieldComponent},
    {path: "gameresult/:id", component: GameResultComponent},

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}