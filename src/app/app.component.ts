import { Component } from '@angular/core';
import { faArrowLeft, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-bocc';
  faArrowLeft = faArrowLeft
  faHandHoldingUsd = faHandHoldingUsd;
  cliente = {
    nit: "800220154",
    nombre: "Flotas la Macarena",
    capa: "Oro",
    segmento: "A",
    gerenteRelacion: "Carlos Gómez"
  }
}
