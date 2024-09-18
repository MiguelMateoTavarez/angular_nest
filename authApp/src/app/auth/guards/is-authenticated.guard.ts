import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../enums';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);

  if(authService.authStatus() === AuthStatus.authenticated){
    return true;
  }

  const url = state.url;
  localStorage.setItem('url', url);

  const router = inject(Router);

  router.navigateByUrl('/auth/login');

  return true;
};
