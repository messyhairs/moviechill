import { Component, OnInit } from '@angular/core';
import{MoviesService} from '../movies.service';
@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrls: ['./popularmovies.component.css']
})
export class PopularmoviesComponent implements OnInit {
popularmovies:Array<any>;
  constructor(private move:MoviesService) { }

  ngOnInit() {

    this.getpopu();
  }
getpopu()
{
	 this.move.getPopular().subscribe(res => {
     let data=res;
            this.popularmovies = data.results;
            console.log(res.results);
        });

}
}
