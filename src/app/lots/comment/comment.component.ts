import { Component, Input } from '@angular/core';
import { CollectionService } from 'src/app/collection.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() idObject: object | undefined | void;
  vision: boolean = false;

  constructor(private dataService: CollectionService) {

  }

  arrReturn(): any {

    if ('comment' in this.idObject!) {
      return this.idObject.comment;
    }

  };

  addComment(newTextElement: HTMLTextAreaElement) {
    const newText: string = newTextElement.value;
    if (newText.length === 0) {
      this.vision = true;
      setTimeout(() => {
      this.vision = false;
      },2000);
      return
    };
    if ('comment' in this.idObject! && Array.isArray(this.idObject.comment)) {
      newTextElement.value = '';

      const examination1 = newText.replace(/кокос/g,"*****");
      const examination2 = examination1.replace(/банан/g,"*****");
      const examination3 = examination2.replace(/плохой/g,"******");
      const examination4 = examination3.replace(/@/g,"*");

      this.idObject.comment.push(examination4);

      this.dataService.updateBuffer(); 

    };
    
  }
}
