import { Component } from '@angular/core';
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { SobreComponent } from "./componentes/secoes/sobre/sobre.component";
import { SkillsComponent } from "./componentes/secoes/habilidades/habilidades.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { BannerComponent } from "./componentes/secoes/banner/banner.component";
import { ContatoComponent } from "./componentes/secoes/contato/contato.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    SobreComponent,
    SkillsComponent,
    FooterComponent,
    BannerComponent,
    SkillsComponent,
    ContatoComponent
],
  templateUrl: "app.component.html",
})
export class AppComponent {}
