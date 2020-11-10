import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any){
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
//https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space
