import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHoooks = () => {

    const {counter, increment, decrement} = useCounter(1);

    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    console.log(counter);

  return (
    <>
    <h1>Información del Pokemón</h1>
    <hr />

    { 
    isLoading? 
    <LoadingMessage/>
    : (
        < PokemonCard 
            id={data.id} 
            name={data.name}
            sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
            ]}
        />
      ) 
    }
    

    {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
    <h3> {data?.name} </h3>

    <button
        onClick={ () => decrement(1)}
        className='btn btn-primary mt-2'
    >
        Anterior
    </button>
    <button
        onClick={ () => increment(1)}
        className='btn btn-primary mt-2'
    >
        Siguiente
    </button>

    </>
  )
}
