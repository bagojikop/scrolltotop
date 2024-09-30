import { CommonModule, DecimalPipe, NgLocaleLocalization, registerLocaleData } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA ,LOCALE_ID} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import localeEnIN from '@angular/common/locales/en-IN';


registerLocaleData(localeEnIN);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,NgSelectModule,CommonModule, FormsModule],
  providers:[DecimalPipe,
    { provide: LOCALE_ID, useValue: 'en-IN' },
    { provide: 'ngLocalization', useClass: NgLocaleLocalization },
  ],
  schemas:[NO_ERRORS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'template1';
}
