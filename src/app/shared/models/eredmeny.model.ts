import { Matrix } from './matrix.model';
import { Nyilak } from './nyilak.model';
import { PiramisCsucs } from './piramis-csucs.model';

export interface Eredmeny {
  evszam: number;
  honapszam: number;
  napszam: number;
  altipus: number;
  dominans: number;
  latens: number | undefined;
  matrix: Matrix;
  piramis: PiramisCsucs[];
  nyilak: Nyilak;
}
