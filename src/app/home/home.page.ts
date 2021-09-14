import { Component,ViewChild,ElementRef} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable,Subject,Subscription } from "rxjs";


declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 map:any;
 @ViewChild('map',{read:ElementRef,static:false}) mapRef:ElementRef;
 
 @ViewChild('directionsPanel',{read:ElementRef,static:false}) directionsPanel:ElementRef;


 infoWindows:any = [];
 markers:any = [
  {
  	title: "National Art Galler",
  	latitude: "-17.824991",
  	longitude: "31.049295"
  },
  {
  	title: "National Art Galler",
  	latitude: "-17.823684",
  	longitude: "31.053028"
  }
 ];
 constructor(private router: Router, private activatedroute: ActivatedRoute,public navCtrl: NavController) { }
    
 ionViewDidEnter() {


var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

      var map =  new google.maps.Map(this.mapRef.nativeElement, {
            zoom: 7,
            center: {lat: 41.85, lng: -87.65}
      });
      directionsDisplay.setMap(map);
    // const directionsObservable = Observable.create(observer => {
  .  nm. directionsService.route({
      origin: "terrell hills, tx",
      destination: "alamo heights, tx",
      travelMode: google.maps.TravelMode.DRIVING
    },  (response, status) => {
      if (String(status) === 'OK') {
        directionsDisplay.setDirections(response);
     //   observer.next("I'm modified in directionsService");
      } else {
        alert('Directions request failed due to ' + status);
  }
});


//}


  // this.loadMap();
	//this.startNavigating();

 	//this.showMap();
 }   

 ionViewDidLoad(){

  //this.loadMap();
	//this.startNavigating();

	//this.loadMap();
	//this.startNavigating();

 }


 gotoDetailPage(){
 	 this.router.navigate(['/login']);

 }
 
 showMap() {
 	const location = new google.maps.LatLng(-17.824858,31.053028);
 	const options = {
 		center:location,
 		zoom:15,
 		disableDefaultUI:true,
 	}
 	this.map = new google.maps.Map(this.mapRef.nativeElement,options); 
 	this.addMarkersToMap(this.markers);
 }

addMarkersToMap(markers) {

 	for(let marker of markers){
 		let position = new google.maps.LatLng(marker.latitude,marker.longitude);

 		let mapMarker = new google.maps.Marker({
 		    position:position,
	 		title:marker.title,
	 		
	 	});	
	 	mapMarker.setMap(this.map);
	   this.addInfoWindowToMarker(mapMarker);
 	}
 }


addInfoWindowToMarker(marker) {
	
	let infoWindowContent = '<div id="content">' +
		                        '<h2 id="firstHeading" class="firstHeading">' +marker.title + '</h2>' +
		                        '<p>Latitude:'+ marker.latitude + '</p>' +
		                        '<p>Longitude:'+ marker.longitude + '</p>' +
	                        '</div>';

	let infowindow = new google.maps.InfoWindow({
	   content:infoWindowContent,
	});

	this.infoWindows.push(infowindow);
}

closeAllInfoWindows() {
	for(let window of this.infoWindows) {
		window.close();
	}
}



loadMap(){

 	const location = new google.maps.LatLng(-17.824858,31.053028);

    let mapOptions = {
      center: location,
      zoom: 15,
      disableDefaultUI:true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, mapOptions);

}

startNavigating(){
  
                    alert("is donYe 1");


    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();

    directionsDisplay.setMap(this.map);
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
        origin: 'Chicago',
        destination: 'New York',
           travelMode: google.maps.DirectionsTravelMode.DRIVING

    }, (res, status) => {


                    alert("is donYe 2");
                    alert(status);

        if(status === "OK"){
                    alert("is donYen 3");

            directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }

    });
 }

}
