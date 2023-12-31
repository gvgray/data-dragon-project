"use client"
import Image from 'next/image'
import { Item } from '../types'

type Props = {
    item: Item
}
export const ItemComponent = (props: Props) => {
    const imageUrl = `http://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/${props.item.image.full}`
          return (
            <div>
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                {props.item.name}
                <Image
                    src={imageUrl}
                    alt="Vercel Logo"
                    width={props.item.image.w}
                    height={props.item.image.h}
                    priority
                />
              </p>
            </div>
          )
}