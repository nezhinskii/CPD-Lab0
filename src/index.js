/**
 * @param {Number} x
 * @returns {Number}
 */
function myFunc(x) {
    return 4*x - x * x
}

/**
 * @param {Function} func - function for integration
 * @param {Number} start - integration lower bound
 * @param {Number} end - integration upper bound
 * @returns {Number}
 */
function integral(func, start, end) {
    const integrationSteps = 100
    const delatX = (end - start)/integrationSteps
    let x = start
    let result = 0
    for (let i = 0; i < integrationSteps; i++){
        result += func(x + delatX/2)
        x += delatX
    }
    return result * delatX
}

function enterValues() {
    hideError()
    const userInput = prompt('Введите интервал интегрирования (2 числа через пробел)', '0 100')
    if (userInput === null){
        return
    }
    const words = userInput.replace(',','.').split(' ')
    if (words.length < 2){
        showError()
        return
    }
    const point1 = Number.parseFloat(words[0])
    const point2 = Number.parseFloat(words[1])
    if (isNaN(point1) || isNaN(point2)){
        showError()
        return
    }
    const start = Math.min(point1, point2)
    const end = Math.max(point1, point2)
    const result = integral(myFunc, start, end)
    const resultTag = document.getElementById('resultText')
    resultTag.innerHTML = `Интервал: ${start} ${end}; Результат: ${result}`
}

const errorTagId = 'errorText'

function showError() {
    const errorTag = document.getElementById(errorTagId)
    errorTag.innerHTML = 'Интервал интегрирования введен неверно!'
}

function hideError() {
    const errorTag = document.getElementById(errorTagId)
    errorTag.innerHTML = '';
}
