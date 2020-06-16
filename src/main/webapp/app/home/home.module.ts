import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SenghorSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SenghorSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class SenghorHomeModule {}
