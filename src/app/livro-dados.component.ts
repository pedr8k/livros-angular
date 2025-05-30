import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Livro } from './livro';
import { ControleLivrosService } from './controle-livros.service';
import { ControleEditoraService } from './controle-editora.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // <- aqui também!
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro();
  editoras: { codEditora: number, nome: string }[] = [];
  novoAutor: string = '';
  editando: boolean = false;

  constructor(
    private controleLivros: ControleLivrosService,
    private controleEditoras: ControleEditoraService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.editoras = this.controleEditoras.getEditoras();

    const codLivroParam = this.route.snapshot.paramMap.get('codLivro');
    if (codLivroParam) {
      const codLivro = Number(codLivroParam);
      const livroExistente = this.controleLivros.obterLivro(codLivro);
      if (livroExistente) {
        this.livro = { ...livroExistente }; // cópia do livro
        this.editando = true;
      } else {
        alert('Livro não encontrado.');
        this.router.navigate(['/']);
      }
    } else {
      this.livro.autores = ['']; // novo livro começa com um campo de autor vazio
    }
  }

  adicionarAutor(): void {
    this.livro.autores.push('');
  }

  removerAutor(index: number): void {
    this.livro.autores.splice(index, 1);
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }

  salvar(): void {
    if (
      !this.livro.titulo ||
      !this.livro.codEditora ||
      this.livro.autores.length === 0 ||
      this.livro.autores.some(a => !a.trim())
    ) {
      alert('Preencha todos os campos obrigatórios antes de salvar.');
      return;
    }

    if (this.editando) {
      this.controleLivros.atualizar(this.livro); // método para editar (vamos criar se não tiver)
    } else {
      this.controleLivros.incluir(this.livro);
    }

    alert('Livro salvo com sucesso!');
    this.router.navigate(['/']);
  }
}