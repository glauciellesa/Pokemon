import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon/pokemon.model';
import { ApiService } from 'src/app/other/Services/api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {


  constructor(private _pokeService : ApiService) { }

  pokemons : pokemon[] = this._pokeService.getAllPokemons()
  selectionPokemon : pokemon[] = []
  compteurPokemonMin : number = 0
  compteurPokemonMax : number = 12

  ngOnInit(): void {
    this.selectionPokemon = this.pokemons.slice(this.compteurPokemonMin,this.compteurPokemonMax)
  }

  selectionPlus(){
    this.compteurPokemonMin += 12
    this.compteurPokemonMax += 12
    console.log(this.compteurPokemonMin)
    console.log(this.compteurPokemonMax)
    this.selectionPokemon = this.pokemons.slice(this.compteurPokemonMin,this.compteurPokemonMax)
  }

  selectionMoins(){
    this.compteurPokemonMin -= 12
    this.compteurPokemonMax -= 12
    console.log(this.compteurPokemonMin)
    console.log(this.compteurPokemonMax)
    this.selectionPokemon = this.pokemons.slice(this.compteurPokemonMin,this.compteurPokemonMax)
  }
}
