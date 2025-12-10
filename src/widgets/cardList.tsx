import { useState } from "react"
import { CardProps } from "../entities/intefaces"
import { Card } from "../features/card"

interface CardListProps {
  data: CardProps[];
}

export const CardList = ({data}: CardListProps) => {
    return (
        <ul className="grid grid-cols-1 gap-y-10 gap-x-6 items-start p-8">
            {data?.map((item, index) => (
    <Card key={index} name={item.name} price={item.price} tags={item.tags} city={item.city} description={item.description} />
)
            )}
        </ul>
    )
}