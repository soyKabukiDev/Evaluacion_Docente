import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderadminComponent } from './shared/headeradmin/headeradmin.component';
import { AsideadminComponent } from './shared/asideadmin/asideadmin.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, HeaderadminComponent, AsideadminComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export default class AdminComponent {

}
