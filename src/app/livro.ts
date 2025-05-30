export class Livro {
  codLivro: number;
  titulo: string;
  codEditora: number;
  autores: string[];
  resumo: string;

  constructor(
    codLivro: number = 0,
    titulo: string = '',
    codEditora: number = 0,
    autores: string[] = [],
    resumo: string = ''
  ) {
    this.codLivro = codLivro;
    this.titulo = titulo;
    this.codEditora = codEditora;
    this.autores = autores;
    this.resumo = resumo;
  }
}
