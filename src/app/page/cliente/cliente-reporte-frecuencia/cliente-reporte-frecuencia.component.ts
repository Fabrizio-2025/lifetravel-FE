import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteFrecuente } from 'src/app/model/clientefrecuente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-reporte-frecuencia',
  templateUrl: './cliente-reporte-frecuencia.component.html',
  styleUrls: ['./cliente-reporte-frecuencia.component.css']
})
export class ClienteReporteFrecuenciaComponent implements OnInit {

  lista: ClienteFrecuente[] = [];
  dataSource: MatTableDataSource<ClienteFrecuente> = new MatTableDataSource();
  displayedColumns: string[] = ['cliente', 'frecuencia'];
  constructor(private cService:ClienteService ) { }

  ngOnInit(): void {
    this.cService.clientefrecuente().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
