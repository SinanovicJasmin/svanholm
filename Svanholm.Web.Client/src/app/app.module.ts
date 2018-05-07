import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app/app.component';
import { PublicLayoutComponent } from './components/public/layout/layout.component';
import { RouterModule } from '@angular/router';
import { KisteComponent } from './components/public/kiste/kiste.component';
import { SeremoniComponent } from './components/public/seremoni/seremoni.component';
import { StartComponent } from './components/public/start/start.component';
import { InfoComponent } from './components/public/info/info.component';
import { BlomsterComponent } from './components/public/blomster/blomster.component';
import { MinevalgComponent } from './components/public/minevalg/minevalg.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  declarations: [
      AppComponent,
      PublicLayoutComponent,
      BlomsterComponent,
      InfoComponent,
      KisteComponent,
      SeremoniComponent,
      StartComponent,
      MinevalgComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot([
          {
              path: '', component: PublicLayoutComponent, children: [
                  { path: '', component: StartComponent },
                  { path: 'info', component: InfoComponent },
                  { path: 'seremoni', component: SeremoniComponent },
                  { path: 'kiste-urne', component: KisteComponent },
                  { path: 'blomster', component: BlomsterComponent },
                  { path: 'minevalg', component: MinevalgComponent }
              ]
          },
          { path: '**', redirectTo: '/not-found' }
    ]),
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
