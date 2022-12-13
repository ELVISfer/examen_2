import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ilibros } from './Ilibros';


@Component({
  selector: 'app-pantallauno',
  templateUrl: './panta_1.component.html',
  styleUrls: ['./panta_1.component.css']
})
export class Panta_1Component implements OnInit {
  titulo: string = 'Hola'

  Libros: Ilibros [] = [{
    id: 1,
    nombre: "Kathn",
    resena: "la novela mas romantica",
   fecha_publicacion: "22/02/2012",
    imagen_caratulad: "",
    codigo_isbn: "RTE",
    edicion: "Primera_Ed. colombia , 2012",
    nombre_direccion_editorial: "Bogota Biiblioteca Nacional",
    escritor_nacionalidad: "Roberto  Quintero_Colombiano"
  },
  {
    id: 2,
    nombre: "Kathn",
    resena: "la novela mas romantica",
   fecha_publicacion: "22/02/2012",
    imagen_caratulad: "",
    codigo_isbn: "RTE",
    edicion: "Primera_Ed. colombia , 2012",
    nombre_direccion_editorial: "Bogota Biiblioteca Nacional",
    escritor_nacionalidad: "Roberto  Quintero_Colombiano"
  },
  {
    id: 3,
    nombre: "Kathn",
    resena: "la novela mas romantica",
   fecha_publicacion: "22/02/2012",
    imagen_caratulad: "",
    codigo_isbn: "RTE",
    edicion: "Primera_Ed. colombia , 2012",
    nombre_direccion_editorial: "Bogota Biiblioteca Nacional",
    escritor_nacionalidad: "Roberto  Quintero_Colombiano"
  },

  

]

  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.titulo = params['titulo'];
      this.Libros= this.Libros.filter(Libro => Libro.id== params ['id'])
      })
      
  }

}
