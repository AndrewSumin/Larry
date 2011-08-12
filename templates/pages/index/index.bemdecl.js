exports.blocks = [
    { name: 'page' },
    { name: 'head',
        elems: [{ name: 'logo' }] },
    { name: 'menu',
        mods: [{ name: 'size',
            vals: ['small'] }],
        elems: [{ name: 'item',
            mods: [{ name: 'state',
                vals: ['current'] }] }] },
    { name: 'main' },
    { name: 'foot' }
]
