import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-asideadmin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './asideadmin.component.html',
  styleUrl: './asideadmin.component.scss'
})
export class AsideadminComponent {
  userloginOn: boolean = true;
  userRoll: string = 'admin';

}
