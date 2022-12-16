import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommanService } from '../commanService/comman.service';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @ViewChildren(ChildComponent) child!: QueryList<ChildComponent>;
  layoutValue = 'row';
  list = [
    { name: 'Jack', money: 10 },
    { name: 'Jill', money: 15 },
    { name: 'James', money: 20 },

  ];
  constructor(private commmanService: CommanService) { }
  ngOnInit(): void {
    this.SendBonusMoneyService();
  }


  // Tirggred function from child for Get money +5
  sendToChild(event: any) {
    this.list[this.list.findIndex(x => x.name == event.name)].money = this.list[this.list.findIndex(x => x.name == event.name)].money + 5
  }

  //Send Event from parent to child +10
  SendMoney(data: any, i: number) { this.list[i].money = data.money + 10; }


  //Hit child function from parent
  GetMoney(data: any, i: number) { this.child['_results'][i].childJackFun(); }


  layout(value: any) { this.layoutValue = value; } // Change layout while select row and column


  // Send Bouns value to child From parent via service +10
  SendBonusMoneyService() {
    const moneyBonus = interval(60000).pipe();
    moneyBonus.subscribe(x => { this.commmanService.bonus_value.next(10); });
  }

  // Send Money to all OR specific User
  sentByService(sendTo: any, type:string) {
    this.commmanService.moneyFor.next({ name: sendTo, money: type == 'send' ? 10 : -10 });
  }

}
