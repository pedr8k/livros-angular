import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule, RouterModule], // <- aqui!
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];

  constructor(
    private controleLivros: ControleLivrosService,
    private controleEditoras: ControleEditoraService
  ) {}

  ngOnInit(): void {
    this.livros = this.controleLivros.getLivros();
  }

  getNomeEditora(codEditora: number): string {
    return this.controleEditoras.getNomeEditora(codEditora);
  }

  excluir(codLivro: number): void {
    this.controleLivros.excluir(codLivro);
    this.livros = this.controleLivros.getLivros();
  }
}