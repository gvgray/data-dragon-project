import Image from 'next/image'
import { ItemsDictionary, Item } from './types'
import { useState } from 'react'

export default async function Home() {
  const dDragonItemsResponse = await fetch('http://ddragon.leagueoflegends.com/cdn/13.17.1/data/en_US/item.json')
  const dDragonItemsJson = await dDragonItemsResponse.json()
  const items: Item[] = Object.values(dDragonItemsJson.data as ItemsDictionary).filter((item: Item) => item.inStore !== false && item.maps['11'] === true) // seems like map 11 is summoner's rift?
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{flexDirection: 'column'}}>
        {items.map((item: Item) => {
          const imageUrl = `http://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/${item.image.full}`
          return (
            <div>
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                {item.name}
                <Image
              src={imageUrl}
              alt="Vercel Logo"
              width={item.image.w}
              height={item.image.h}
              priority
            />
              </p>
            
          </div>
        )
        })}
      </div>
    </main>
  )
}
