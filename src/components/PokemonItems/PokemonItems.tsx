import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react";


interface Pokemon {
  name: string;
  imageUrl: any;
  description: string;
  color: string;
  types: string[];
}

interface PokemonItemsProps {
  pokemon: Pokemon;
}

const PokemonItems: React.FC<PokemonItemsProps> = ({ pokemon }) => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setShowMore(false);
  }, [pokemon]);
  
  return (
    <>
    <div>

    <Card style={{backgroundColor:`${pokemon.color}`}}>
        <CardHeader>
          <img src={pokemon.imageUrl} 
          width={250} alt="Pokemon" 
          className="mx-auto" 
        />
        <CardTitle >{pokemon.name}</CardTitle>
        </CardHeader>
        <CardContent>
            {showMore ? pokemon.description : `${pokemon.description.substring(0, 25)}`}
            <span className="inline-flex text-blue-800 font-semibold cursor-pointer" onClick={() => setShowMore(!showMore)}>learn more</span>
        </CardContent>
        <CardFooter className="flex justify-center gap-5">
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className="bg-blue-100 px-5 py-2 rounded-md border-2 border-black"
            >
              {type}
            </span>
          ))}
        </CardFooter>
      </Card>
    </div>
    </>
  );
}

export default PokemonItems;
