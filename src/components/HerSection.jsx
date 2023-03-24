import React from 'react'
import { Cards } from './Cards'
import { cardsHero } from './ProductDetails';

export const HerSection = () => {
    return (
        <div className='d-flex flex-wrap container border border-primary border-2 p-2'>
            {cardsHero.map((elements) => {
                return (
                    <>
                        <div className='m-2'>
                            <Cards img={elements.cardImage} cardTitle={elements.cardTitle} />
                        </div>
                    </>
                )
            })}
        </div>
    )
}
