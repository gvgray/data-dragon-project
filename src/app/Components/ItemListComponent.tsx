"use client"
import { useState } from 'react'
import { Item, ItemsDictionary } from '../types'
import { ItemComponent } from './ItemComponent'
import { SearchBoxComponent } from './SearchBoxComponent'
type Props = {
    dDragonItemsJson: ItemsDictionary
}
export const ItemListComponent = (props: Props) => {
    const items: Item[] = Object.values(props.dDragonItemsJson as ItemsDictionary).filter((item: Item) => item.inStore !== false && item.maps['11'] === true) // seems like map 11 is summoner's rift?
    return (
        <div>
            {items.map((item: Item) => <ItemComponent item={item}/>)}
        </div>
    )
}