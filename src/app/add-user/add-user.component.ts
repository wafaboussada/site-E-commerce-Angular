import { Component, OnInit } from '@angular/core';
import { User } from '../user-list/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../users-service.service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;
  id: number;
  myForm: FormGroup

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.user = new User(this.id,'','',0,'','','');
    this.myForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      gender:[''],
      email:[''],
      passWord:['']
    })
  }

  save (model: any) {
    this.userService.addUser(this.user)
    .subscribe (
      data => {
        console.log(data);
        this.router.navigate(['admin']);
      }
    )
  }

}

