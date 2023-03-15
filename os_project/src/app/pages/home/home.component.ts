import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {
    console.log('HomeComponent');
  }
  rrpage(pagename: string): void {
    console.log('rrpage: ' + pagename);
    this.router.navigate([pagename]);
  }
}
