import { Component } from '@angular/core';

@Component({ 
  selector: 'player-app',
  template: `  
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'player';
}
