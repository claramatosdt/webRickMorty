import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { ProfileComponent } from './features/auth/profile/profile.component';
import { CharacterListComponent } from './features/character/character-list/character-list.component';
import { CharacterDetailsComponent } from './features/character/character-details/character-details.component';
import { EpisodeListComponent } from './features/episode/episode-list/episode-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: 'characters', component: CharacterListComponent},
  {path: 'characters/:id', component: CharacterDetailsComponent},
  {path: 'episodes', component: EpisodeListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
