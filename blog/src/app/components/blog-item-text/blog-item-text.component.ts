import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'blog-item-text',
  templateUrl: './blog-item-text.component.html',
  styleUrls: ['./blog-item-text.component.scss']
})
export class BlogItemTextComponent implements OnInit {

  @Input() id: number;
  @Input() text: string;
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
