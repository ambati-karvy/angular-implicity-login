import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {BroadcastService} from '../broadcast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              public broadCastService: BroadcastService) {
  }

  ngOnInit() {
    this.broadCastService.httpError.asObservable().subscribe(values => {
      //this.showError(values);
      console.log(values)
    })
  }

  get isLogged() {
    return this.authenticationService.isLoggedIn();
  }

  get firstName() {
    return this.authenticationService.firstName();
  }

  logout() {
    
    this.authenticationService.logout();
   
  }

}
