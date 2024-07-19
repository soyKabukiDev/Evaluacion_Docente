import { Component } from '@angular/core';
import {FormSettingsComponent} from "./form-settings/form-settings.component";

@Component({
  selector: 'app-homeadmin',
  standalone: true,
  imports: [FormSettingsComponent],
  templateUrl: './homeadmin.component.html',
  styleUrl: './homeadmin.component.scss'
})
export default class HomeadminComponent {

}
