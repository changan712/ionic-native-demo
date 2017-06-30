import { Camera } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from "@ionic-native/keyboard";
import { Dialogs } from "@ionic-native/dialogs";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: string;

  constructor(public navCtrl: NavController,
    private camera: Camera,
    private dialogs:Dialogs,

  ) {

  }



  showDialog() {
      this.dialogs.confirm('确定执行此操作？','确认').then(res=>{
          alert(res);
      })
  }
  showCamera() {
    this.camera.getPicture().then(res => {
      console.log(res);
      this.url = res;
    })

  }
}
