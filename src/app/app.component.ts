import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../environments/environment';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

// ENDPOINT: https://vg63b6xox2.execute-api.us-east-1.amazonaws.com/production

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'universal-sandbox';

    public ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            let bases = this.document.getElementsByTagName('base');
            if (bases.length > 0) {
                bases[0].setAttribute('href', environment.baseHref);
            }
        }
    }


 constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any) {}
}
