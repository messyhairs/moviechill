import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieparksComponent } from './movieparks/movieparks.component';
import { PopularmoviesComponent } from './popularmovies/popularmovies.component';
import { TheatreComponent } from './theatre/theatre.component';

const routes: Routes = [

{
	path:'',
	component:MovieComponent
},
{
	path:'popu',
	component:PopularmoviesComponent
},
{
	path:'theater',
	component:TheatreComponent
},
{
	path:'find',
	component:MovieparksComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
