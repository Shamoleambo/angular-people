import { Component } from '@angular/core';
import { People } from '../model/People';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styles: ['.persons-container {max-width: 100%;}'],
})
export class PeopleComponent {
  public people: People[] = [
    new People('Mano', 30, ['jogar futebol', 'malhar', 'ler'], 'Estilista'),
    new People(
      'Truta',
      29,
      [
        'escrever contos',
        'montar quebra-cabeças',
        'colecionar selos',
        'assistir filmes italianos',
        'provar novos restaurantes',
      ],
      'Crítico Literário'
    ),
    new People('Tiu', 31, ['crochê', 'tiro ao alvo'], 'Torneiro Mecânico'),
    new People(
      'Pedro Silveira',
      23,
      ['mtg', 'jogos da from software'],
      'Motorista de Fuguete'
    ),
    new People(
      'Kayla Figueiredo',
      29,
      ['clonar pessoas', 'deixar chaves secretas por aí'],
      'Contadora'
    ),
  ];
}
