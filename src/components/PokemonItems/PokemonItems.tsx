import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface Pokemon {
  name: string;
  imageUrl: any;
  description: string;
  color: string
}

interface PokemonItemsProps {
  pokemon: Pokemon;
}

const PokemonItems: React.FC<PokemonItemsProps> = ({ pokemon }) => {
  return (
    <>
    <div>

    <Card style={{backgroundColor:`${pokemon.color}`}}>
        <CardHeader>
          <img src={pokemon.imageUrl} 
          width={250} alt="Pokemon" 
          className="mx-auto" 
        />
        </CardHeader>
        <CardContent>
            <CardTitle>{pokemon.name}</CardTitle>
            <CardDescription>{pokemon.description}</CardDescription>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
    </>
  );
}

export default PokemonItems;
