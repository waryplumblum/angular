import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // Emitir el evento del 
  onDelete() {

  }

  onDeleteCharacter(index: number):void {
    //TODO: Emitir el ID del personaje
    console.log({index});
  }

}
