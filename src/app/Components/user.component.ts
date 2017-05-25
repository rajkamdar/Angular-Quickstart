import { Component } from '@angular/core';
import { PostsService } from '../Services/posts.service';
@Component({
	moduleId:module.id,
  	selector: 'user',
  	templateUrl: `user.component.html`,
    providers: [PostsService]
})
export class UserComponent { 
name : string;
age:number;
address:address;
hobbies:string[];
showHobbies:boolean;
posts:Posts[];
	constructor(private postsService:PostsService){
		this.name='Demo';
		this.age=20;
		this.address={
			street:5,
			area:'Satellite'
		};
		this.hobbies=['coding','travelling'];
		this.postsService.getPosts().subscribe(posts => {
			this.posts=posts;
		});
	}



	toggleHobbies(){
		this.showHobbies=!this.showHobbies;
	}
	deleteHobby(i){
		this.hobbies.splice(i,1);
	}

}
interface address{
	street:number;
	area:string;
}
interface Posts{
	body:string;
	id:number;
	title:string;
	userId:number;
}