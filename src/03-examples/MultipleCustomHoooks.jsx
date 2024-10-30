import React from 'react'
import { useFetch } from '../hooks'

export const MultipleCustomHoooks = () => {

    const {data, hasError, isLoading} = useFetch('https://pokeapi.co/api/v2/pokemon/5');


  return (
    <>
    <h1>Información del Pokemón</h1>
    <hr />

    {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
    <h3> {data?.name} </h3>

    </>
  )
}
