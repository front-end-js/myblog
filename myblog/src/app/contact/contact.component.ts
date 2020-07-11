import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Контакты';

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
