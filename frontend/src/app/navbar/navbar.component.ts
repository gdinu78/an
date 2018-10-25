import { Component, OnInit } from '@angular/core';
import { NavItemModel } from '../_models';
import { NavbarService } from '../_services';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NavbarService]
})
export class NavbarComponent implements OnInit {
  private flag = false;
  private navItems: NavItemModel[] = [];
  private navItemsExtra: NavItemModel[] = [];


  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    // this.navItems = this.navbarService.getNavItems();
    this.navbarService.getNavItems()
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
