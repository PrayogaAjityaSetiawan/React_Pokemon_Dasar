import { useEffect, useState } from "react";
import pokemonJSON from "../../data/pokemon.json";
import PokemonItems from "../PokemonItems/PokemonItems";
import { Input } from "@/components/ui/input";
import error from "../../assets/communication.png"

interface Pokemon {
  name: string;
  imageUrl: any;
  description: string;
  color: string;
}

const PokemonList: React.FC = () => {
  const [pokemon] = useState<Pokemon[]>(pokemonJSON);
  const [search, setSearch] = useState<string>("");
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>(pokemon);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = pokemon.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredPokemon(filtered);
  };

  useEffect (() => {
    setFilteredPokemon(pokemon);
  }, [pokemon]);

  return (
    <div className="w-full">
      <div className="mx-5 mt-5 md:w-1/2 md:mx-auto">
        <Input
          type="text"
          placeholder="Cari Pokemon"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {filteredPokemon.length === 0 ? (
        <div className="flex flex-col h-screen justify-center items-center gap-5">
          <h1 className="text-3xl font-bold">Pokemon not found</h1>
          <img src={error} alt="" />
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5 mx-5">
          {filteredPokemon.map((item, index) => (
            <PokemonItems key={index} pokemon={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;

