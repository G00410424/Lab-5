import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count:number = 0;
  hide:boolean = true;

  onClick()
  {
    this.count++;
  }

  onClickImg()
  {
    if(this.hide === true)
    {
      this.hide = false;
    }

    else if(this.hide === false)
    {
      this.hide = true;
    }
  }
}