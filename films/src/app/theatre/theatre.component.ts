import { Component, OnInit } from '@angular/core';
import{MoviesService} from '../movies.service';
@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {
theater:Array<Object>;

  constructor(private move:MoviesService) { }

  ngOnInit() {

    this.gettheat();
     alert("for info about movie touch the image")
  }

gettheat()
{
	this.move.getInTheaters().subscribe(res => {
            this.theater = res.results;
            console.log(res.results)
        });
}
}
