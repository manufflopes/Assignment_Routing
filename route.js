function homeRoute(req, res) {
    res.send('Home Page')
}

function loginRoute(req, res) {
    res.send('Login Page')
}
function registerRoute(req, res) {
    res.send('Register Page')
}

module.exports = {
    root: homeRoute,
    loginRoute,
    registerRoute
}
