import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  livros = [];
  filmes = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getLivros().subscribe(livros => {
      this.livros = livros
    });

    this.getFilmes().subscribe(filmes => {
      this.filmes = filmes
    });
  }

  getLivros(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/livros')
  }

  getFilmes(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/movies')
  }

}
