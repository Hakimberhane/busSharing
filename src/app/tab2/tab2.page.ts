import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

 constructor(private route: Router) { }

  ngOnInit() {
  }

goToPickupPage(){

   //   let navigationExtras: NavigationExtras = {
       //     queryParams: {
       //     special: JSON.stringify(doctor)
       //  }
       // };
     this.route.navigate(['/pickup'], navigationExtras);
  }
}
