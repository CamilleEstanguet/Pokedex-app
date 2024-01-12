import { Component, OnInit } from "@angular/core"
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common"
import { RouterOutlet } from "@angular/router"
import { POKEMONS } from "../pokemons/mock-pokemon"
import { Pokemon } from "../pokemons/pokemon"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS
  pokemonSelected: Pokemon | undefined
  justLoaded: boolean = true

  ngOnInit(): void {
    console.table(this.pokemonList)
  }

  selectPokemon(pokemonId: string) {
    const id = +pokemonId
    this.pokemonSelected = this.pokemonList.find((pokemon) => pokemon.id == +pokemonId)
    if(this.justLoaded == true) 
      this.justLoaded = false
  }

  searchPokemon(pokemonName: string) {
    const name = pokemonName
    this.pokemonSelected = this.pokemonList.find((pokemon) => pokemon.name == pokemonName)
    if(this.justLoaded == true) 
      this.justLoaded = false
  }
}
