import { Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables)
@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit{

  
  ngOnInit(): void {
  

}
}
  

  // updateChart(){
  //   console.log('Botón de actualizar clicado')
  //   this.RenderChart
  // }

