import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  
  public range:Array<number> = [1,2,3,4,5];
  @Input('rate')
  private rate:number ;
  @Output('rateChange')
  private updateRate = new EventEmitter<number>();

  @Input('disabled')
  public disabled:Boolean =false;

  constructor() { 
   
  }

  ngOnInit() {
    this.rate=0;
  }

  public update(value) {
    this.rate = value;
    this.updateRate.next(value);
  }

}
