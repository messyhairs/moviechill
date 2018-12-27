import { Component, OnInit } from '@angular/core';
import{MoviesService} from '../movies.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movieparks',
  templateUrl: './movieparks.component.html',
  styleUrls: ['./movieparks.component.css'],
  providers:[ToastrService]
})
export class MovieparksComponent implements OnInit {

  constructor(private move:MoviesService,private toastr: ToastrService) { }

    searchStr: string;
    searchRes:Array<Object>;
    

  ngOnInit() {
    
   
  }

     searchMovies(){

        this.move.searchMovies(this.searchStr).subscribe(res => {
            this.searchRes = res.results;
            console.log(res.results);
            
        });
       
    }
}
