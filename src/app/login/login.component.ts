import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/catch';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    console.log('Incorrecto');
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            },
          err => {
            const response = JSON.parse(err._body);
            console.log('DATA: ', response.message);
            this.error = response.message;
            this.loading = false;
          });
    }
}
