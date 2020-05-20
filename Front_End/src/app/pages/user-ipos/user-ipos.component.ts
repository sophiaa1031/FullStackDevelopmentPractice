import { Component, OnInit } from '@angular/core';
import {IPO} from '../../models/ipo';
import { ManageIpoService } from './manage-ipo.service';

@Component({
  selector: 'app-user-ipos',
  templateUrl: './user-ipos.component.html',
  styleUrls: ['./user-ipos.component.css']
})
export class UserIposComponent implements OnInit {

  ipos: IPO[];
  errMsg: any;
  ipoForm = new IPO();
  constructor(private manageipoService: ManageIpoService) { }

  ngOnInit() {
    this.getIpos();
  }

  getIpos() {
    this.manageipoService.getIPOs()
    .subscribe(
      res => {
        if (res.status === 200) {
          console.log('response', res);
          this.ipos = res.data;
        } else {
          alert (res.msg);
        }
      },
      // error => this.errMsg = error
      error => {
        this.errMsg = error;
        alert(error);
      }
    );
  }

  currentIpo(i: number) {
    this.manageipoService.getCurrentIpo(this.ipos[i].ipoid)
    .subscribe(
      res => {
        if (res.status === 200) {
          console.log('response', res);
          this.ipoForm = res.data;
        } else {
          alert (res.msg);
        }
      },
      error => {
        this.errMsg = error;
        alert(error);
      }
    );
  }
}


