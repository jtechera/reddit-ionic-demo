import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
Generated class for the RedditData provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RedditData {

  constructor(public http: Http) {
    console.log('Hello RedditData Provider');
  }

  getRemoteData(){
    return this.http.get('https://www.reddit.com/r/paragon/top/.json?limit10&sort=hot').map(res => res.json());
  }

  getLocalData(){
    return this.http.get('assets/data/redditData.json').map(res => res.json());
  }

}
