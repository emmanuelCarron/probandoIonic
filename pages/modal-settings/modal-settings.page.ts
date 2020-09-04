import { Component, OnInit } from '@angular/core';
import { ModalController, IonApp } from '@ionic/angular';

@Component({
  selector: 'app-modal-settings',
  templateUrl: './modal-settings.page.html',
  styleUrls: ['../../src/app/home/home.page.scss'],
})

export class ModalSettingsPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgs(){
    this.modalCtrl.dismiss();
  }
  
  public elemLista: Array<any> = [
            {name: "Notificaciones", value: true},
            {name: "Notificaciones2", value: false},
            {name: "Notificaciones3", value: true},
            ];

  actualizarValor(){
    console.log(this.elemLista)
  }
}
