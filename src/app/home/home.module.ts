import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {ModalSettingsPage} from '../../../pages/modal-settings/modal-settings.page'


import { HomePageRoutingModule } from './home-routing.module';
import { ModalSettingsPageModule } from 'pages/modal-settings/modal-settings.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ModalSettingsPage
  }
];

@NgModule({
  entryComponents: [
    ModalSettingsPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ModalSettingsPageModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
