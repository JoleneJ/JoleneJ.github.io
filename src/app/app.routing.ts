import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent, SliderComponent } from './app.component'
import { EventComponent } from '../events/event.component'
import { HotelComponent } from '../hotel/hotel.component'
import { ReceptionComponent } from '../reception/reception.component'
import { RegistryComponent } from '../registry/registry.component'
import { RSVPComponent } from '../rsvp/rsvp.component'
import { SocialComponent } from '../social/social.component'


const lazyRoutes: Routes = [
    {
      path: 'home',
      component: SliderComponent,
    },
    {
      path: 'events',
      component: EventComponent
    },
    {
      path: 'rsvp',
      component: RSVPComponent
    },
    {
      path: 'reception',
      component: ReceptionComponent
    },
    {
      path: 'hotel',
      component: HotelComponent
    },
    {
      path: 'social',
      component: SocialComponent
    },
    {
      path: 'registry',
      component: RegistryComponent
    },
    {
      path: '',
      component: SliderComponent
    },
    {
      path: '**',
      component: AppComponent
    }
];

export const appRoutingProviders: any[] = [
];

export const lazyRouting: ModuleWithProviders = RouterModule.forRoot(lazyRoutes);
