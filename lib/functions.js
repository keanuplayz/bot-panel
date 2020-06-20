function remove(item) {
    switch(item) {
        case "token": {
            if (window.localStorage.getItem('token') !== null) {
                window.localStorage.removeItem('token')
                return logger(`Sucessfully removed ${item} from localStorage.`, 'log')
            } else {
                return logger(`${item} does not exist in localStorage.`, 'warn')
            }
        }
        case "channel": {
            if (window.localStorage.getItem('messageChannel') !== null) {
                window.localStorage.removeItem('messageChannel')
                return logger(`Sucessfully removed ${item} from localStorage.`, 'log')
            } else {
                return logger(`${item} does not exist in localStorage.`, 'warn')
            }
        }
        default:
            return logger("Nothing has been removed, please choose 'channel' or 'token'.", 'error')
    }
}