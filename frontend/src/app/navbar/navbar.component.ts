import { Component, OnInit } from '@angular/core';
import { NavItemModel } from '../_models';
import {BackendService} from '../_services';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private flag = false;
  private navItems: NavItemModel[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getResults("/getNavItems")
        .subscribe(
            (data: NavItemModel[]) => {
                data.map((val, index) => {
                    this.navItems.push({name: val.name, priority: val.priority});
                })
            },
            (error) => {
                console.log('am eroarea: ', error);
                this.navItems = [];
            }
        )
  }

}
