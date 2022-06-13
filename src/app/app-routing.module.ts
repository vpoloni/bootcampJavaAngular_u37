import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharacterInfoComponent } from './characters/character-info/character-info.component';
import { CharactersComponent } from './characters/characters.component';
import { DataFakerComponent } from './data-faker/data-faker.component';
import { FakerCreateComponent } from './data-faker/faker-create/faker-create.component';
import { FakerInfoComponent } from './data-faker/faker-info/faker-info.component';
import { FakerUpdateComponent } from './data-faker/faker-update/faker-update.component';
import { HomeComponent } from './home/home.component';
import { LocalCharactersComponent } from './local-characters/local-characters.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'localCharacters',
    component: LocalCharactersComponent
  },
  {
    path: 'fakerData',
    component: DataFakerComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'character/:id',
    component: CharacterInfoComponent
  },
  {
    path: 'faker-info/:id',
    component: FakerInfoComponent
  },
  {
    path: 'faker-update/:id',
    component: FakerUpdateComponent
  },
  {
    path: 'faker-create',
    component: FakerCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
