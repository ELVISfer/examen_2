import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pantallatres',
  templateUrl: './panta_3.component.html',
  styleUrls: ['./panta_3.component.css']
})
export class PantallatresComponent implements OnInit {

  titulo: string = ''
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
