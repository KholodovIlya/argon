import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private router: Router) {}

    setToken(token: string) { localStorage.setItem('token', token) }

    getToken() { return localStorage.getItem('token') }

    isLoggedIn() {
        return this.getToken() !== null;
    }

    login(userInfo: {email: string, password: string}): Observable<string | boolean> {
        if(userInfo.email === "ilya.xolodov07@mail.ru" && userInfo.password === "admin777") {
            this.setToken('admin')
            return of(true)
        }
        return throwError(() => new Error('Failed Login'))
    }

    logout() {
        this.router.navigate(['login'])
    }
}