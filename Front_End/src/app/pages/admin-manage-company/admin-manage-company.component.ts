import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { CompanyServiceService } from '../../service/company-service.service';
import { CompanyIPO } from '../../models/company';
import { IpoDetails } from '../../models/company';

@Component({
  selector: 'app-admin-manage-company',
  templateUrl: './admin-manage-company.component.html',
  styleUrls: ['./admin-manage-company.component.css']
})
export class AdminManageCompanyComponent implements OnInit {
  companies: Company[];
  company = new Company();
  companyipo = new CompanyIPO();
  companyForm = new Company();
  ipodetails = new IpoDetails();
  errMsg: any;
  public search:any = '';

  constructor(private companyservice: CompanyServiceService) { }

  ngOnInit(): void {
  }

  currentCompany(i: number) {
    this.companyservice.getCurrentCompany(this.companies[i].companyid)
    .subscribe(
      res => {
        if (res.status === 200) {
          console.log('response', res);
          this.companyForm = res.data;
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
  update() {
    // id = this.exchange.exchangeid;
    // console.log(typeof(i), i);
    // console.log('this.companyForm', this.companyForm); // undefined
    this.companyservice.updateCompany(this.companyForm)
    .subscribe(
      res => {
        if (res.status === 200) {
          console.log('response', res);
          console.log('slice', this.companies.slice(this.companyForm.companyid));
          // this.companyForm.splice(this.companyForm.exchangeid , 1, this.companyForm);
          alert (res.msg);
          this.getCompanies();
          this.companyForm = new Company();
        } else {
          alert (res.msg);
          this.getCompanies();
          this.companyForm = new Company();
        }
      },
      error => {
        this.errMsg = error;
        alert(error);
      }
    );
  }
  getCompanies() {
    this.companyservice.getCompanies()
    .subscribe(
      res => {
        if (res.status === 200) {
          // console.log('response', response);
          this.companies = res.data;
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
  addall() {
    console.log('this.company', this.company);
    this.companyipo.company = this.company;
    this.companyipo.ipo = this.ipodetails;
    this.companyservice.addCompanyIpo(this.companyipo)
    .subscribe(
      res => {
        if (res.status === 200) {
          console.log('response', res);
          // this.companys = res.data;
          // this.companys.push();
          this.companies.push(this.company);
          alert (res.msg);
          this.getCompanies();
          this.company = new Company();
        } else {
          alert (res.msg);
          this.getCompanies();
          this.company = new Company();
        }
      },
      error => {
        this.errMsg = error;
        alert(error);
      }
    );
  }
  
}
