import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-uber',
  templateUrl: './uber.page.html',
  styleUrls: ['./uber.page.scss'],
})
export class UberPage implements OnInit {
  public markerUrl = '../../../assets/clones/map/markerPin.png';
  public zoom: number = 12;
  public lat: number = 26.8549;
  public lng: number = 75.8243;
  public driveStatus: boolean = false;
  public origin: any;
  public destination: any;
  public userCard: boolean = false;
  public renderOpts = {
    suppressMarkers: true,
  };
  public directionOptions = {
    origin: {
      icon: '../../../assets/clones/map/Google-Car.png',
    },
    destination: {
      icon: '../../../assets/clones/map/distinationsMaker.png',
      opacity: 0.8,
    },
  };

  public style = [
    {
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#f5f5f5'
        }
      ]
    },
    {
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#616161'
        }
      ]
    },
    {
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#f5f5f5'
        }
      ]
    },
    {
      'featureType': 'administrative.land_parcel',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#bdbdbd'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#eeeeee'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#e5e5e5'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#ffffff'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#dadada'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#616161'
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    },
    {
      'featureType': 'transit.line',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#e5e5e5'
        }
      ]
    },
    {
      'featureType': 'transit.station',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#eeeeee'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#c9c9c9'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    }
  ]

  constructor(
    private geolocation: Geolocation,
    private menuCtrl: MenuController,
    public alertController: AlertController,
    private activeRouter: ActivatedRoute,
  ) {

    this.driveStatus = false;
    this.userCard = false;
    this.menuCtrl.enable(true);
    // this.geoLocations();

  }

  ngOnInit() {
    this.getDirection();
    console.log('ngonit')
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.activeRouter.params.subscribe((data) => {
      console.log(data)
      if (data) {
        this.userCard = data.userCard ? data.userCard : false;
      }
    })
  }

  // mapReady(a, event) {
  //   if (event) {
  //     console.log('event if')
  //   }
  // }

  driverStatusChange(event, val) {


    if (this.driveStatus) {
      console.log('true')
      setTimeout(() => {
        this.presentAlertConfirm();
      }, 2000)

    } else {
      this.userCard = false;
    }

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm Request!',
      message: 'You have a new Pickup request',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.userCard = true;
          }
        }
      ]
    });

    await alert.present();
  }


  getDirection() {
    console.log('directions');
    this.origin = { lat: 26.857114, lng: 75.8127086 }
    this.destination = { lat: 0.5 + 26.857114, lng: 0.5 + 75.8127086 }
    console.log('origin', this.origin, this.destination)
  }

  requestAccept() {
  }

  async requestIgnore() {
  }

  public getcurrentLocations() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('resp', resp)
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log('data', data);
    });
  }
}
