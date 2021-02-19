import { Component } from '@angular/core';
import { faArrowLeft, faInfo, faBars } from '@fortawesome/free-solid-svg-icons';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /** 
   * Inicia variables de iconos
  */
  faArrowLeft = faArrowLeft
  faInfo = faInfo;
  faBars = faBars;
  /**
   * Se decalar objeto que lamacenera respuesta del servicio
   */
  public cliente : Object = {};

  constructor(private clienteService: ClienteService) {  }

  /**
   * Consumo el servico cuando inica la aplicación
   */
  ngOnInit () {
    let id = "800220154";
    // consumo el servicio suscribiendome al mapa que devuelve el servicio
    this.clienteService.getCliente(id).subscribe(result => {
      this.cliente = result;
    })
  }
}
