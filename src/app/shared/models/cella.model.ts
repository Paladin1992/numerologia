export class Cella {
  datumbolDarab: number;
  osszevontDarab: number;
  latensDarab: number;
  piramisDarab: number;

  constructor(masik: Cella) {
    this.datumbolDarab = masik.datumbolDarab || 0;
    this.osszevontDarab = masik.osszevontDarab || 0;
    this.latensDarab = masik.latensDarab || 0;
    this.piramisDarab = masik.piramisDarab || 0;
  }
}
