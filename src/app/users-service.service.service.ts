import { User } from './user-list/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

   constructor(private http: HttpClient){}

   private usersUrl = 'api/users';

   private log(log: string) {
    console.info(log);
   }

   private handleError<T>(operation='operation', result?: T) {
     return (error: any): Observable<T> => {
       console.log(error);
       console.log(`${operation} failed: ${error.message}`);
       return   of(result as T);
     };

   }

    // Retourne tous les produits
    getUsers(): Observable <User[]> {
       return this.http.get<User[]>(this.usersUrl).pipe(
        tap(_ => this.log(`fetched users`)),
        catchError(this.handleError(`getusers`, []))
        );
    }

    // Retourne le produit avec l'identifiant passé en paramètre
    getUser(id: number): Observable <User> {
      const url = `${this.usersUrl}/${id}`;
      return this.http.get<User>(url).pipe(
        tap(_ => this.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>(`getuser id=${id}`))
      );
    }




    addUser(user: User): Observable<User> {
      const httpOptions = {
        headers: new HttpHeaders({ 'content-Type': 'application/json'})
      };
      user.id = null;
      return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('add user'))
      );
  }


    deleteUser(user: User): Observable<User> {
      const url = `${this.usersUrl}/${user.id}`;
      const httpOptions = {
        headers: new HttpHeaders({ 'content-Type': 'application/json'})
      };
      return this.http.delete<User>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted user id=${user.id}`)),
        catchError(this.handleError<any>('delete user'))
      );
    }

    updateUser(user: User): Observable<User> {
      const httpOptions = {
        headers: new HttpHeaders({ 'content-Type': 'application/json'})
      };
      const url = `${this.usersUrl}/${user.id}`;
      return this.http.put(url, user, httpOptions).pipe(
        tap(_ => this.log(`updated user id=${user.id}`)),
        catchError(this.handleError<any>('updated user'))
      );
    }

}
