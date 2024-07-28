import {Component, inject} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  private location = inject(Location);

  protected goBack() {
    this.location.back();
  }
}
