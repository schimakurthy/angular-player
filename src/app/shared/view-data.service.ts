import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Register } from './register.type';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class ViewDataService {
    public userCredentials: Object;
    public loggedIn: boolean;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private profilesUrl = 'api/profiles';  // URL to web api
    //private usersUrl = 'api/users';

    constructor(private http: Http) { }

    getProfiles(): Observable<Register[]> {
        return this.http.get(this.profilesUrl)
            .map(response => response.json().data as Register[])
            .catch(this.handleError);
    }

    getProfile(id: number): Observable<Register> {
        const url = `${this.profilesUrl}/${id}`;
        return this.http.get(url)
            .map(response => response.json().data as Register)
            .catch(this.handleError);
    }

 private extractData(res: Response) {
          let body = res.json();
          return body.data || {};
      }

    create(profile: Register): Observable<any> {
         let body = JSON.stringify(profile);
         console.log(this.profilesUrl);
        return this.http.post(this.profilesUrl, body, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    //    createService(url: string, param: any): Observable<any> {
    //       let body = JSON.stringify(param);
    //       return this.http
    //           .post(url, body, this.options)
    //           .map(this.extractData)
    //           .catch(this.handleError);
    //   }



    // update(hero: Register): Observable<Register> {
    //     const url = `${this.profilesUrl}/${hero.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(hero), { headers: this.headers })
    //         .map(() => hero)
    //         .catch(this.handleError);
    // }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return (error.message || error);
    }
}