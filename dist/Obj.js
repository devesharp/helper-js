"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Str = require("./Str");
function set(obj, key, value) {
    if (obj instanceof Object) {
        new Error('Parameter must be object');
    }
    return setObj(obj, key, value);
}
exports.set = set;
function dot(obj) {
    let newObject = {};
    if (obj instanceof Object) {
        new Error('Parameter must be object');
    }
    return passingLastKey(obj, null);
}
exports.dot = dot;
function setObj(obj, key, value) {
    if (Str.contains(key, '.')) {
        let split = key.split('.');
        let keyFirst = split[0];
        let newKey = split.splice(1, split.length).join('.');
        let newObj = obj[keyFirst] ? obj[keyFirst] : {};
        obj[keyFirst] = setObj(newObj, newKey, value);
    }
    else {
        obj[key] = value;
    }
    return obj;
}
function passingLastKey(obj, originalKey) {
    let newObject = {};
    originalKey = originalKey === null ? '' : originalKey + '.';
    Object.entries(obj).forEach(entry => {
        if (entry[1] instanceof Object) {
            Object.entries(entry[1]).forEach(entry2 => {
                let key = originalKey + entry[0];
                let value = entry2[1];
                if (entry2[1] instanceof Object) {
                    key = key + '.' + entry2[0];
                    newObject = Object.assign(Object.assign({}, newObject), passingLastKey(value, key));
                }
                else {
                    newObject[key + '.' + entry2[0]] = entry2[1];
                }
            });
        }
        else {
            newObject[originalKey + entry[0]] = entry[1];
        }
    });
    return newObject;
}
//# sourceMappingURL=Obj.js.map