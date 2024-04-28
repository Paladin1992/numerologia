import { Injectable } from '@angular/core';

import { Bemenet } from '../models/bemenet.model';
import { Eredmeny } from '../models/eredmeny.model';
import { PiramisCsucs } from '../models/piramis-csucs.model';
import { Datum } from '../models/datum.model';
import { Matrix } from '../models/matrix.model';
import { Nyilak } from '../models/nyilak.model';

@Injectable()
export class KalkulatorService {
  BETU_SZAM = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    O: 6,
    P: 7,
    Q: 8,
    R: 9,
    S: 1,
    T: 2,
    U: 3,
    V: 4,
    W: 5,
    X: 6,
    Y: 7,
    Z: 8
  } as const;

  constructor() {}

  elemez(bemenet: Bemenet): Eredmeny {
    const teljesDatum = `${bemenet.szuletesiIdo.ev}${bemenet.szuletesiIdo.honap}${bemenet.szuletesiIdo.nap}`;

    const altipus = this.osszeadSzamjegyenkent(teljesDatum);

    const altipusOsszeg = this.osszeadSzamjegyenkent(altipus);
    let latens, dominans;

    if (altipusOsszeg >= 10 && altipusOsszeg <= 11) {
      latens = altipusOsszeg;
      dominans = this.osszeadSzamjegyenkent(latens);
    } else {
      dominans = altipusOsszeg;
    }

    const evszam = this.osszeadSzamjegyenkent(bemenet.szuletesiIdo.ev);
    const honapszam = this.osszeadSzamjegyenkent(bemenet.szuletesiIdo.honap);
    const napszam = this.osszeadSzamjegyenkent(bemenet.szuletesiIdo.nap);

    const matrix = this.matrixotSzamol();
    const nyilak = this.nyilakatSzamol(matrix);
    const piramis = this.piramistSzamol(bemenet.szuletesiIdo, dominans);

    const eredmeny: Eredmeny = {
      altipus,
      latens,
      dominans,
      evszam,
      honapszam,
      napszam,
      matrix,
      nyilak,
      piramis
    };

    return eredmeny;
  }

  osszeadSzamjegyenkent(szam: string | number): number {
    const szamjegyek = szam.toString().split('');
    return szamjegyek.reduce((osszeg, szamjegy) => osszeg + parseInt(szamjegy), 0);
  }

  osszeadAmigNagyobbMintMax(szam: string | number, max: number): number {
    let osszeg = 0;

    do {
      osszeg = this.osszeadSzamjegyenkent(szam);
      szam = osszeg;
    } while (osszeg > max);

    return osszeg;
  }

  piramistSzamol(szuletesiDatum: Datum, dominans: number): PiramisCsucs[] {
    const kezdoKor = 36 - dominans;

    // 1. csúcs = hónap + nap
    const csucs1: PiramisCsucs = {
      szam: this.osszeadAmigNagyobbMintMax(szuletesiDatum.honap + szuletesiDatum.nap, 9),
      kor: kezdoKor,
      ev: parseInt(szuletesiDatum.ev) + kezdoKor
    };

    // 2. csúcs = nap + év
    const csucs2: PiramisCsucs = {
      szam: this.osszeadAmigNagyobbMintMax(szuletesiDatum.nap + szuletesiDatum.ev, 9),
      kor: csucs1.kor + 9,
      ev: csucs1.ev + 9
    };

    // 3. csúcs = 1. csúcs + 2. csúcs
    const csucs3: PiramisCsucs = {
      szam: this.osszeadAmigNagyobbMintMax(csucs1.szam + csucs2.szam, 11),
      kor: csucs2.kor + 9,
      ev: csucs2.ev + 9
    };

    // 4. csúcs = hónap + év
    const csucs4: PiramisCsucs = {
      szam: this.osszeadAmigNagyobbMintMax(szuletesiDatum.honap + szuletesiDatum.ev, 11),
      kor: csucs3.kor + 9,
      ev: csucs3.ev + 9
    };

    return [csucs1, csucs2, csucs3, csucs4];
  }

  matrixotSzamol(): Matrix {
    // TODO
    return [];
  }

  vanAdottSzamMatrixban(matrix: Matrix, szam: number): boolean {
    // TODO

    return true;
  }

  nyilakatSzamol(matrix: Matrix): Nyilak {
    // TODO
    const nyilak: Nyilak = {
      eltokeltseg: false,
      halogatas: false,
      spiritualitas: false,
      szkepticizmus: false,
      intellektus: false,
      rosszMemoria: false,
      erzelmiKiegyensulyozottsag: false,
      hipererzekenyseg: false,
      gyakorlatiassag: false,
      rendezetlenseg: false,
      tervezes: false,
      akarat: false,
      csalodottsag: false,
      aktivitas: false,
      passzivitas: false
    };

    return nyilak;
  }
}
