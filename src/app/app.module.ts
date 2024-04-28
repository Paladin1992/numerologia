import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatrixComponent } from './features/matrix/matrix.component';
import { NapkeresoComponent } from './features/napkereso/napkereso.component';
import { KapcsolatiSzamokComponent } from './features/kapcsolati-szamok/kapcsolati-szamok.component';
import { CellaComponent } from './shared/components/cella/cella.component';
import { KalkulatorService } from './shared/services/kalkulator.service';

@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    NapkeresoComponent,
    KapcsolatiSzamokComponent,
    CellaComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [KalkulatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
