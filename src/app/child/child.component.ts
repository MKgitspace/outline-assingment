import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommanService } from '../commanService/comman.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {


  @Input() inputFromParent!: any;
  @Output() requestFromChild = new EventEmitter<any>();
  constructor(private comman: CommanService) { }

  ngOnInit(): void {

    //Triggre service every 1 min to increase value
    this.comman.bonus_value.subscribe((value: any) => { this.addMoney(value) })

  }
  ngAfterViewInit(): void {
  //Add Money By calling service for particaular and all child
  this.comman.moneyFor.subscribe((result: any) => {
    if (this.inputFromParent.name==result.name) this.addMoney(result.money)
    if (result.name =='All') this.addMoney(result.money)
  })
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  
}
  //Triggre Event to Pass data to parent
  getMoney() {
    this.requestFromChild.emit(this.inputFromParent)
  }

  //Function triggred by Parent Component
  childJackFun() {
    this.inputFromParent.money > 0 && this.inputFromParent.money >= 10 ? this.inputFromParent.money = this.inputFromParent.money - 10 : console.log('Wallet empty');
  }

  addMoney(value: Number) {
    this.inputFromParent.money = this.inputFromParent.money + value;
    return
  }
}