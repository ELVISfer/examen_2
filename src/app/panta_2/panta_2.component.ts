import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pantallados',
  templateUrl: './panta_2.component.html',
  styleUrls: ['./panta_2.component.css']
})
export class panta_2Component implements OnInit {

  titulo: string = ''
  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
  }

}
