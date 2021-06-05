function checkIsNumber(input) {
    input = Number(input)
    if (Number.isNaN(input)) {
        throw new Error('Input is not number') // โยน
    } else {
        return input
    }
}

let data = '12a'

try { // ลองดู
    let output = checkIsNumber(data) // โยน
    console.log(output)
} catch (error) { // ผู้รับ
    alert(error)
}

// try {
//     // throw
// } catch (error) {
//     // throw
// } finally {
//     console.log('hi')
// }

console.log('Welcome to my program')
