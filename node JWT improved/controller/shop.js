
const securePage = (req, res) => {
    res.json({ message: 'This is a secured route', user: req.user });
}

const shop = (req, res) => {
    res.json({ message: 'This is a shop route', user: req.user });
}

const addToCart = (req, res) => {
    res.json({ message: 'This is a addToCart route', user: req.user });
}

export {securePage, shop, addToCart}