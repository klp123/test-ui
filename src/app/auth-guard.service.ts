import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable({
   providedIn: "root",
})
export class AuthGuard implements CanActivate {
   constructor( private router: Router) {}

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const userLoginStatus = localStorage.getItem('userLoggedIn');
      if (userLoginStatus === 'true') {
         return true;
      } else {
         this.router.navigate(["/auth"]);
         return false;
      }
   }
}
