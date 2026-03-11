export const matchingPairs = [
    {
        term: 'tabindex="0"',
        definition: 'Makes element focusable in natural tab order'
    },
    {
        term: 'tabindex="-1"',
        definition: 'Makes element programmatically focusable only'
    },
    {
        term: 'tabindex="1" or higher',
        definition: 'Creates explicit tab order (anti-pattern)'
    },
    {
        term: 'Roving tabindex',
        definition: 'Only one item in a group is in tab order at a time'
    },
    {
        term: 'Focus trap',
        definition: 'Keeps focus within a specific container'
    },
    {
        term: 'aria-activedescendant',
        definition: 'Manages virtual focus while container keeps real focus'
    }
];

export const correctMatches = {
    'tabindex="0"': 'Makes element focusable in natural tab order',
    'tabindex="-1"': 'Makes element programmatically focusable only',
    'tabindex="1" or higher': 'Creates explicit tab order (anti-pattern)',
    'Roving tabindex': 'Only one item in a group is in tab order at a time',
    'Focus trap': 'Keeps focus within a specific container',
    'aria-activedescendant': 'Manages virtual focus while container keeps real focus'
};
