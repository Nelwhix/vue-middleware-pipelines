export default function isSubscribed({ next, store}) {
    if (!store.user.isSubscribed) {
        return next({
            name: 'dashboard'
        })
    }

    return next()
}