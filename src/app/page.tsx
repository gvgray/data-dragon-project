import { ItemsDictionary, Item } from './types'
import { MainPageComponent } from './Components/MainPageComponent'

export default async function Home() {
  const dDragonItemsResponse = await fetch('http://ddragon.leagueoflegends.com/cdn/13.17.1/data/en_US/item.json')
  const dDragonItemsJson = await dDragonItemsResponse.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {<MainPageComponent dDragonItemsJson={dDragonItemsJson.data as ItemsDictionary}/>}
    </main>
  )
}
