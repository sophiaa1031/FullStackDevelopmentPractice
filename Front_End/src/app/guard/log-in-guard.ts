import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogInGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    if (!sessionStorage.getItem('token')) {
      alert('Please Sign in')
      return false;
    } else{
      return true;
    }
  }
}
