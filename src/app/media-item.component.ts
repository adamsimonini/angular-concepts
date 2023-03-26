import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mb-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css'],
})
export class MoediaItemComponent {
  @Input() mediaItem: any;
  @Output() delete = new EventEmitter();

  name = 'The Last of Us';

  onDelete() {
    console.log('deleting...');
    // i think we're passing data from child to parent, as this emit event can pass data back up
    this.delete.emit(this.mediaItem);
  }

  wasWatched() {
    return true;
  }
}
