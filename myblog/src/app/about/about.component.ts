import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'Про сайт';

  constructor(
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(
      `${this.sharedService.blogTitle} - ${this.title}`
    );
  }

}
