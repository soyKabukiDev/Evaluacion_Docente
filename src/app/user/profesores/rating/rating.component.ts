import { Component } from '@angular/core';
import { CommentsComponent } from '../../../../shared/components/comments/comments.component';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommentsComponent],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export default class RatingComponent {
  
  Aspecttitle: String = 'hola mundo';
  porcentage: number = 75;//esto es un procentaje
  calificacion: number = this.porcentage/10;

}
