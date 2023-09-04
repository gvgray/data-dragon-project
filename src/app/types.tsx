export interface Item {
        name: string,
        description: string,
        colloq: string,
        plaintext: string,
        into?: string[],
        image:{
           full: string,
           sprite: string,
           group: string,
           x: number,
           y: number,
           w: number,
           h: number
        },
        gold: {
           base: number,
           purchasable: boolean,
           total: number,
           sell: number
        },
        tags: string[],
        maps: {
            [key: string]: boolean
        },
        stats:{
            [key: string]: number
        },
        from?: string[],
        depth?: number,
        requiredChampion?: string,
        inStore?: boolean
}

export interface ItemsDictionary {
    [key: string]: Item
}