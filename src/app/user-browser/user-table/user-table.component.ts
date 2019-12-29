import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  private users : any;
  statusCode: number;
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.loadData();    
  }

  loadData() {
    this.userService.getAllUser().subscribe(
      data => {this.users = data;
        console.log(this.users);
        console.log(data);

      },
      errorCode => this.statusCode =errorCode);
  }

}
