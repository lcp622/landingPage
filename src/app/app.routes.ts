import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'products',component: ProductsComponent},
    {path: 'contact',component: ContactComponent},
    {path: 'products/:id',component: ProductDetailComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
