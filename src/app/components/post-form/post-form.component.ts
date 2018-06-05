import { Component, OnInit ,EventEmitter,Output,Input} from '@angular/core';
import { Post } from '../../models/Post'
import {PostService} from '../../services/post.service'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post:Post
  @Output() newPost : EventEmitter<Post> = new EventEmitter()
  @Output() updatedPost : EventEmitter<Post> = new EventEmitter()
  @Input() currentPost:Post;
  @Input() isEdit:boolean;
  constructor(private postService:PostService) { }

  ngOnInit() {
    
  }

  addPost(title,body){
   
    if(!title || !body)
    {
      alert("Please enter the post")

    }
    else{
      this.postService.savePost({title,body} as Post).subscribe(post=>{

        this.newPost.emit(post)
        })
    }
  }

  updatePost(){
    if(!this.currentPost.title || !this.currentPost.body)
          alert("Please update ths post without blank values")
    else{
    this.postService.updatePost(this.currentPost).subscribe(post=>{
      this.updatedPost.emit(post)
      this.isEdit = false;
    })
  }
  }

}
