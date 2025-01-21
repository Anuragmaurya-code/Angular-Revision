import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id:string='';
  query:string='';
  constructor(private route:ActivatedRoute) { 
    this.route.params.subscribe((params:any)=>{
      this.id=params['id']
    });
    this.route.queryParams.subscribe((queries:any)=>{
      this.query=queries['q']
      console.log("react",queries['r']);
    })
  }

  ngOnInit(): void {
  }

}
