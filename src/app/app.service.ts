import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { RootObject } from './story.model';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  dataUrl = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  constructor(private http: Http) { }

  getStories(): Observable<RootObject> {
    return this.http.get(this.dataUrl).map((res: Response) => res.json());
  }

}

