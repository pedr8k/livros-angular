import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Livro[] = [
    new Livro(1, 'O Senhor dos Anéis', 1, ['J.R.R. Tolkien'], 'Um épico de fantasia.'),
    new Livro(2, '1984', 2, ['George Orwell'], 'Distopia sobre vigilância e controle.'),
    new Livro(3, 'Dom Casmurro', 3, ['Machado de Assis'], 'Clássico da literatura brasileira.')
  ];

  getLivros(): Livro[] {
    return this.livros;
  }

  excluir(codLivro: number): void {
    this.livros = this.livros.filter(livro => livro.codLivro !== codLivro);
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.livros.length > 0
      ? Math.max(...this.livros.map(l => l.codLivro)) + 1
      : 1;

    livro.codLivro = novoCodigo;
    this.livros.push(livro);
  }

  obterLivro(codLivro: number): Livro | undefined {
    return this.livros.find(l => l.codLivro === codLivro);
  }

  atualizar(livro: Livro): void {
    const index = this.livros.findIndex(l => l.codLivro === livro.codLivro);
    if (index !== -1) {
      this.livros[index] = { ...livro };
    }
  }
}