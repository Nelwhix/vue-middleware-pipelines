export default function auth({ next, store }) {
    if (!store.user.loggedIn) {
        return next({
            name: 'login'
        })
    }
    return next()
}