import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PrendaMarca } from 'src/app/model/prendamarca';
import { PrendaService } from 'src/app/service/prenda.service';

@Component({
  selector: 'app-prenda-reporte-marca',
  templateUrl: './prenda-reporte-marca.component.html',
  styleUrls: ['./prenda-reporte-marca.component.css']
})
export class PrendaReporteMarcaComponent implements OnInit {

  lista: PrendaMarca[] = [];
  dataSource: MatTableDataSource<PrendaMarca> = new MatTableDataSource();
  displayedColumns: string[] = ['prenda', 'marca'];
  constructor(private pService: PrendaService) { }

  ngOnInit(): void {
    this.pService.reportemarca().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
