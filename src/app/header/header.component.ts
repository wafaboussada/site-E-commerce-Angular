import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  profileClicked (a,b): number {
    console.log('profile clicked',a+b);
    console.log('sum=',a+b);
    return a + b;
  }
  userLink () {
    this.router.navigate(['users']);
  }

}
