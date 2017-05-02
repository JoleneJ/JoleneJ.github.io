import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { RouterModule, RouterOutlet  } from '@angular/router'
import { lazyRouting, appRoutingProviders  } from './app.routing'

import { AppComponent, SliderComponent } from './app.component'
import { EventComponent } from '../events/event.component'
import { HotelComponent } from '../hotel/hotel.component'
import { ReceptionComponent } from '../reception/reception.component'
import { RegistryComponent } from '../registry/registry.component'
import { SocialComponent } from '../social/social.component'
import { RSVPComponent } from '../rsvp/rsvp.component'


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    EventComponent,
    HotelComponent,
    RSVPComponent,
    ReceptionComponent,
    RegistryComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    lazyRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
