export default function guest({next, store}) {
    if (store.user.loggedIn) {
        return next({
            name: 'dashboard'
        })
    }

    return next()
}