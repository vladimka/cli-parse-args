// `` 0 \ + =

/**
 * Парсит массив элементов
 * 
 * Examples:
 * 
 *      const args = require('arguments-parser')(process.argv)
 * 
 * @param {Array} array Массив элементов для парсинга
 * @returns {Object} Обьект значений параметров
 */

function parse(array){
    let args = {};
    array.splice(0, 2);

    array.forEach((item, pos) => {
        if(/--.+/i.test(item)){
            let args1 = item.match(/--(?<name>.+)/i);
            if(array[pos+1] == '=') args[args1.groups.name] = array[pos+2];
            else args[args1.groups.name] = true;
        }
    });

    return args;
}

module.exports = parse;