import { Component } from '@angular/core';
import { ManagerheaderComponent } from '../../../components/managerheader/managerheader.component';
import { ManagerasideComponent } from '../../../components/manageraside/manageraside.component';
import { ManagermainComponent } from '../../../components/managermain/managermain.component';
import { ManagerfooterComponent } from '../../../components/managerfooter/managerfooter.component';

@Component({
  selector: 'app-layout-manager',
  standalone: true,
  imports: [ManagerasideComponent, ManagerfooterComponent, ManagermainComponent, ManagerfooterComponent, ManagerheaderComponent],
  templateUrl: './layout-manager.component.html',
  styleUrl: './layout-manager.component.css'
})
export class LayoutManagerComponent {

}
