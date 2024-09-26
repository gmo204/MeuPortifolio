import { Component } from '@angular/core';
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { SobreComponent } from "./componentes/secoes/sobre/sobre.component";
import { HabilidadesComponent } from "./componentes/secoes/habilidades/habilidades.component";
import { FooterComponent } from "./componentes/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,
      SobreComponent,
      HabilidadesComponent, 
      FooterComponent],
  templateUrl: "app.component.html",
})
export class AppComponent {}
