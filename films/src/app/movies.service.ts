import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

   apikey: string;
    
    constructor(private json:HttpClient){
       this.apikey = 'b0eb80346322dbd9e166756e654905e7';
         //this.apikey = '2931998c3a80d7806199320f76d65298';
        console.log('MovieService Initialized...');
    }
   getMovie(){
        return this.json.get('https://api.themoviedb.org/3/movie/550?api_key=b0eb80346322dbd9e166756e654905e7');
    }

     getPopular(){
        return this.json.get('https://api.themoviedb.org/3/discover/movie?api_key=b0eb80346322dbd9e166756e654905e7');
    }

      getInTheaters(){
        return this.json.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2016-09-26&primary_release_date.lte=2016-10-30&api_key=b0eb80346322dbd9e166756e654905e7');
   
    }
     searchMovies(searchStr:string){
        return this.json.get('https://api.themoviedb.org/3/search/movie?query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey);
    }

    

    }

