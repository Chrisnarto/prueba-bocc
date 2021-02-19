import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: String;

  constructor(private _http: Http) { 
    this.url = environment.baseUrl;
  }

  /**
   * Servicio que consume ekl servicio dispuesto en AWS.
   * @param id 
   */
  getCliente (id) {
    // Se arma request
    let request = {
      nit: id
    };

    // Se asigna cabecera para definir contenido
    const headers = new Headers({
      "Content-Type": "application/json"
    });

    let options = new RequestOptions({ headers: headers, body: JSON.stringify(request) });

    // Se usa el post de http 
    return this._http
      .post(
        this.url +
          "/cliente",
        request,
        options
      )
      .pipe(map((res: Response) => res.json()));
  }
}
