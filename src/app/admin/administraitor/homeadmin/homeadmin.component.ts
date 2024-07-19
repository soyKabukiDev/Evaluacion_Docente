import { Component } from '@angular/core';
import {FormSettingsComponent} from "../form-settings/form-settings.component";
import { RatingtableComponent } from '../teachersdata/ratingtable/ratingtable.component';

@Component({
  selector: 'app-homeadmin',
  standalone: true,
  imports: [FormSettingsComponent, RatingtableComponent],
  templateUrl: './homeadmin.component.html',
  styleUrl: './homeadmin.component.scss'
})
export default class HomeadminComponent {

}
