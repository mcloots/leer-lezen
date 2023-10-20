import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReadGameComponent } from './read-game/read-game.component';

export const routes: Routes = [
    {
        path: "", component: LandingPageComponent
    },
    {
        path: "read/:lvl", component: ReadGameComponent
    }
];
