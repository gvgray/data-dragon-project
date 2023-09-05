"use client"
import { useState } from 'react'
import { Item, ItemsDictionary } from '../types'
import { ItemComponent } from './ItemComponent'

type Props = {
    searchText: string,
    setSearchText: (s: string) => void
}

export const SearchBoxComponent = (props: Props) => {
    return (
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={props.searchText} onChange={(s) => props.setSearchText(s.target.value)}/>
    )
}