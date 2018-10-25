import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoriesComponent } from "./categories";
import { HomeComponent } from "./home";
import {AuthGuard} from "./_guards";
import {LoginComponent} from "./login";

const appRoutes: Routes =[

    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'category/:name', component: CategoriesComponent, canActivate:[AuthGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: LoginComponent },
    { path: '**', redirectTo: '/home' }
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}