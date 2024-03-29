[‘👨’, ‘👩’].join([‘💘’]) // [‘👨💘👩’]

[‘😊’, ‘😎’].concat([‘😋’]) // [‘😊’, ‘😎’, ‘😋’]

[‘😊’, ‘😎’, ‘😋’].slice(2) // [‘😋’]

[‘😊’, ‘😎’, ‘😋’].splice(2, 0, ‘😍’) // [‘😊’, ‘😎’, ‘😍’, ‘😋’]

[‘😊’, ‘😎’, ‘😋’].indexOf(‘😎’) // 1

[‘😊’, ‘😎’, ‘😎’, ‘😋’].lastIndexOf(‘😎’) //2

[‘😊’, ‘😎’, ‘😋’].reverse() // [‘😋’, ‘😎’, ‘😊’]

[‘😊’, ‘😎’, ‘😋’].shift() // [‘😎’, ‘😋’]

[‘😊’, ‘😎’, ‘😋’].unshift(‘😏’) // [‘😏’, ‘😊’, ‘😎’, ‘😋’]

[‘😊’, ‘😎’, ‘😋’].push(‘😏’) // [‘😊’, ‘😎’, ‘😋’, ‘😏’]

[‘😊’, ‘😎’, ‘😋’].pop() // [‘😊’, ‘😎’]

[‘😊’, ‘😎’, ‘😋’].sort() //[‘😊’, ‘😋’, ‘😎’]

[‘😊’, ‘😎’, ‘😋’].fill(‘😎’, 1, 3) // [‘😊’, ‘😎’, ‘😎’]

[‘😀’, [‘😉’, ‘🥱’], [‘😛’, ‘😲’], [[[‘💰’]]]].flat(3) // [‘😀’, ‘😉’, ‘🥱’, ‘😛’, ‘😲’, ‘💰’]

[‘😊’, ‘😎’, ‘😋’].includes(‘😎’) // true

