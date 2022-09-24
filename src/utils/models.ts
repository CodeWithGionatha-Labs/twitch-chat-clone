export interface MessageModel {
    id: string
    author: Author
    content: string
}

export interface Author {
    rgbColor: string
    username: string
    badges: Badge[]
}

export type Badge = 'moderator' | 'vip' | 'prime' | 'turbo'
