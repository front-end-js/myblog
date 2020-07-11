import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  title = 'Главная';
  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(
      `${this.sharedService.blogTitle} - ${this.title}`
    );
    this.getArticles();
  }

  getArticles(): void {
    this.articleService
        .getArticles()
        .subscribe(articles => this.articles = articles);
  }

}
