import { Routes, RouterModule } from '@angular/router';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';

const appRoutes: Routes = [
    { path: 'ConsultarCliente', component: ConsultarClienteComponent},
    { path: '**', redirectTo: '/' }
];

export const routing = RouterModule.forRoot(appRoutes);