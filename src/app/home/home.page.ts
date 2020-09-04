import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { ModalSettingsPage } from '../../../pages/modal-settings/modal-settings.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // public elemLista = [];
  constructor(private modalCtrl: ModalController) {
    // this.elemLista = [
    //   { id: 0, name: "Notificaciones", value: true },
    //   { id: 1, name: "Notificaciones2", value: false },
    //   { id: 2, name: "Notificaciones3", value: true },
    // ];
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalSettingsPage,
      componentProps: {
        nombre: "Emmanuel",
        edad: 32,
      }
    });

    await modal.present();
  }


}