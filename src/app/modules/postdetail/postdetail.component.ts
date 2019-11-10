import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {
  /**
   * Variable to keep the reference of the observable returned by
   * the service
   */
  postdetail$: any


  constructor(private route: ActivatedRoute, private jsonplaceholderService: JsonplaceholderService) { }

  ngOnInit() {
    const postId = Number(this.route.snapshot.paramMap.get('id'))
    this.postdetail$ = this.jsonplaceholderService.getPost(postId)
  }

}
