import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Location } from '../types'
import Country from './Country'

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`

function CountryList() {
    const { loading, error, data } = useQuery(GET_LOCATIONS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>

    const { locations } = data

    return locations.map(({ id, name, description, photo }: Location) => (
      <Country id={id} name={name} description={description} photo={photo}/>
    ))
}

export default CountryList
