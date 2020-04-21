import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, map, switchMap} from "rxjs/operators";

@Component({
  selector: 'selectize',
  templateUrl: './selectize.component.html',
  styleUrls: ['./selectize.component.scss']
})
export class SelectizeComponent implements OnInit {

  @ViewChild('input') input: ElementRef;
  public posts$;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      map(event => event['target'].value),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => this.dataService.getByText({text: value}))
    ).subscribe(results => {
      this.posts$ = results;
    });
  }

}
