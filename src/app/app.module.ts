import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HeaderComponent } from './components/home/header/header.component';
import { HomeComponent } from './components/home/home/home.component';
import { ApiService } from './services/api.service';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NopagefoundComponent } from './views/nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, LoginComponent, DashboardComponent, NopagefoundComponent, BreadcrumbsComponent, SidebarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
