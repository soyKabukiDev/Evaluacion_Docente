import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-settings.component.html',
  styleUrl: './form-settings.component.scss'
})
export class FormSettingsComponent {
  toggle1 = false;
  toggle2 = false;
  toggle3 = false;
  period: string = 'Enero - Abril';

  toggleChanged(toggleNumber: number, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.toggle1 = toggleNumber === 1;
      this.toggle2 = toggleNumber === 2;
      this.toggle3 = toggleNumber === 3;

      if (toggleNumber === 1) {
        this.period = 'Enero - Abril';
      } else if (toggleNumber === 2) {
        this.period = 'Mayo - Agosto';
      } else if (toggleNumber === 3) {
        this.period = 'Septiembre - Diciembre';
      }

    console.log(`Toggle ${this.period} changed:`, isChecked );
  }
  }
}
