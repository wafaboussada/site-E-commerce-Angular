import { Component, OnInit } from '@angular/core';
import {USERS} from './mock-user-list';
import { User } from './user';
import { Router } from '@angular/router';
import { UserService } from '../users-service.service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
      console.log(data);
    })
  }
  deleteUser(user: User) {
    this.userService.deleteUser(user)
    .subscribe (
      response => {
      const link =['/admin'];
      this.router.navigate(link);
      this.getUsers();
    }
    )
  }

  // selectProduct(user: User) {
  //   let link = ['/productDetails', user.id];
  //   this.router.navigate(link);
  // }

  // addProduct(id: number) {
  //   console.log('hello');
  //   let link = ['/cart'];
  //   this.router.navigate(link);
  //   for (let i=0;i<=this.users.length;i++){
  //     if (this.products[i].id === id ){
  //       console.log(this.products[i])
  //       return this.products[i]}
  //   }
  // }

}

