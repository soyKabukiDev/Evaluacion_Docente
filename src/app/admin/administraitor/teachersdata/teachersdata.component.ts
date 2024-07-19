import { Component } from '@angular/core';
import { RatingtableComponent } from './ratingtable/ratingtable.component';

@Component({
  selector: 'app-teachersdata',
  standalone: true,
  imports: [RatingtableComponent],
  templateUrl: './teachersdata.component.html',
  styleUrl: './teachersdata.component.scss'
})
export default class TeachersdataComponent {

}
