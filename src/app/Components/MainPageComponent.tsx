"use client"
import { Item, ItemsDictionary } from '../types'
import { ItemComponent } from './ItemComponent'
import { SearchBoxComponent } from './SearchBoxComponent'
import { ItemListComponent } from './ItemListComponent'
import { useState } from 'react'
type Props = {
    dDragonItemsJson: ItemsDictionary
}
export const MainPageComponent = (props: Props) => {
    const [t, setT] = useState('')
    const setSearchText = (s: string) => setT(s)
    const filteredItems: ItemsDictionary = Object.keys(props.dDragonItemsJson).reduce((filteredItems, key) => {
      if (props.dDragonItemsJson[key].name.toLocaleLowerCase().includes(t.toLowerCase())) {
        filteredItems[key] = props.dDragonItemsJson[key]
      }
      return filteredItems
    }, {} as ItemsDictionary) ?? {}
    return (
        <div>
            <SearchBoxComponent searchText={t} setSearchText={setSearchText}/>
            <ItemListComponent dDragonItemsJson={filteredItems}/>
        </div>
    )
}