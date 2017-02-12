import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../providers/reddit-data';
import { PostDetailPage } from '../../pages/post-detail/post-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public posts = [];
  constructor(public navCtrl: NavController, public redditService: RedditData) {

  }

  ionViewDidLoad(){
    this.redditService.getLocalData().subscribe(data => {
      this.posts = data.data.children;
    });
  }

  loadPost(post){
    this.navCtrl.push(PostDetailPage, {
      post:post
    });
  }

}
