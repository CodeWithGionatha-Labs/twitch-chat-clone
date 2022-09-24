import { faker } from '@faker-js/faker'
import { Badge, MessageModel } from './models'

export const generateFakeMessage = (): MessageModel => {
    return {
        id: faker.datatype.uuid(),
        author: {
            rgbColor: faker.internet.color(250, 250, 250),
            username: faker.internet.userName(),
            badges: generateRandomBadges(),
        },
        content: faker.lorem.sentence(),
    }
}

const generateRandomBadges = (): Badge[] => {
    const badge = (badge: Badge, prob: number) =>
        faker.helpers.maybe(() => badge, { probability: prob })

    return [
        badge('vip', 0.1),
        badge('moderator', 0.1),
        badge('prime', 0.2),
        badge('turbo', 0.1),
    ].filter((x) => x !== undefined) as Badge[]
}
