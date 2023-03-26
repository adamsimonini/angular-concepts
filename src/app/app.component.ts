import { Component } from '@angular/core';

@Component({
  // meta-data properties
  selector: 'mb-app', // this identified the component uniqurely within the DOM's component tree
  // templateUrl: './app.component.html',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: 'firebug',
    medium: 'series',
    category: 'sci-fi',
    year: 2010,
  };

  onMediaItemDelete(mediaItem: {}) {
    console.log(mediaItem);
  }
}
