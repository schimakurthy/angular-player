import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { Register } from '../shared/register.type';
import { ViewDataService } from '../shared/view-data.service';

declare var $: any;

@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html'
})

export class SignupComponent implements OnInit {
  profiles: Register[] = [];
  user: Register;
  submitted = false;
  registerInvalid = false;

  constructor(
    private viewDataService: ViewDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.user = {
      firstName: '',
      lastName: '',
      phone: '',
      emailAddress: '',
      userName: '',
      password: '',
      confirmPassword: '',
      mailingAddress: '',
      city: '',
      state: '',
      zip: '',
    }

    this.viewDataService.getProfiles().subscribe(data => {console.log(data);})
  }

  onSubmit() {
    this.submitted = true;
  }

  onSignup(isValid: boolean) {
    console.log('signup')
    this.onSubmit();
    if (isValid) {
      console.log(this.user);
      this.viewDataService.create(this.user)
        .subscribe(data => {
          this.profiles.push(data);
          //this.selectedHero = null;
        });
      //this.gotoLogin();
    }
  }

  //   add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.create(name)
  //     .then(hero => {
  //       this.heroes.push(hero);
  //       this.selectedHero = null;
  //     });
  // }



  // save(): void {
  //   this.viewDataService.update(this.hero)
  //     .then(() => this.goBack());
  // }



  // gotoLogin(): void {
  //   let link = ['/login'];
  //   this.router.navigate(link);
  // }
}