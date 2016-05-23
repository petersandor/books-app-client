/* beautify ignore:start */
import {Injectable, Output, EventEmitter} from '@angular/core';
import {Http, Headers} from '@angular/http';
/* beautify ignore:end */

@Injectable()
export class UserService {
  // Testing EventEmitter
  @Output() loginStateChange: EventEmitter<any> = new EventEmitter();

  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('id_token');
  }

  login(email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        'https://books-app-server.herokuapp.com/auth/local',
        JSON.stringify({ email, password }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('id_token', res.token);
          this.loggedIn = true;
          this.loginStateChange.emit(true);
        }

        return res.success;
      });
  }

  logout() {
    localStorage.removeItem('id_token');
    this.loggedIn = false;
    this.loginStateChange.emit(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
