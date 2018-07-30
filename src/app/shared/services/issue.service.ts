import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {baseUrl} from '../baseUrl';

@Injectable()
export class IssueService {

  constructor(private http: HttpClient) { }

  report(rd){
    return this.http.post<any>(baseUrl+'issues', {title:rd.value.title,location:rd.value.location,category:rd.value.category,
      description:rd.value.description})
    .pipe(
      map((issue => {
        return issue;
      }))
    );
  }

  get(payload){
    return this.http.get<any>(baseUrl+`issues?query=${encodeURIComponent(JSON.stringify(payload))}`)
    .pipe(
      map((issues => {
        return issues;
      }))
    );
  }

  updatePush(id, pushObj){
    return this.http.put<any>(baseUrl+`issues/push/${id}`, pushObj)
    .pipe(
      map((updated => {
        return updated;
      }))
    );
  }

  update(id, updated){
    return this.http.put<any>(baseUrl+`issues/${id}`, updated)
    .pipe(
      map((updated => {
        return updated;
      }))
    );
  }

}
