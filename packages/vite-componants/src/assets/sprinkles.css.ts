import {
    defineProperties,
    createSprinkles
} from '@vanilla-extract/sprinkles'
import { type } from 'os'

const spaces = {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
}

const responsiveProperties = defineProperties({
    conditions: {
        mobile: {},
        tablet: { '@media': 'screen and (min-width: 768px)' },
        desktop: { '@media': 'screen and (min-width: 1024px)' },
    },
    defaultCondition: 'mobile',
    properties: {
        display: ['none', 'block', 'inline-block'],
        margin: spaces,
        padding: spaces,
    },
})


export const sprinkles = createSprinkles(responsiveProperties)
export type sprinklesType = Parameters<typeof sprinkles>[0]