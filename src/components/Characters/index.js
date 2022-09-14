import React from 'react'
import CharacterItem from '../CharacterItem'
import Spinner from '../Spinner'

export const CharacterGrid = ({ item ,loading}) => {
  return (
    loading ? (<Spinner />) : (
       <section className='cards'> 
        {item.map((item) => (
            <CharacterItem key={item.char_id} item={item} />
        ))}
       </section>
    )
  )
}
