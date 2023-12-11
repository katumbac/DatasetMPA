import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component'
import { FooterComponent } from './shared/footer/footer.component'
import { IndexComponent } from './pages/index/index.component';
import { HttpClientModule } from  '@angular/common/http';
import { Netflix } from './interfaces/netflix';
import { NetflixService } from './providers/netflix.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,FooterComponent,IndexComponent,HttpClientModule],
  providers: [NetflixService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mpa';

}
