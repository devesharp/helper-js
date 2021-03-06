"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Case = require("case");
function after(string, value) {
    const split = string.split(value);
    split.splice(0, 1);
    return split.join(value);
}
exports.after = after;
function before(string, value) {
    const split = string.split(value);
    return split[0];
}
exports.before = before;
function startsWith(string, beginWith) {
    const reg = new RegExp(`^${beginWith}.*`);
    return reg.test(string);
}
exports.startsWith = startsWith;
function endsWith(string, endWith) {
    const reg = new RegExp(`.*${endWith}$`);
    return reg.test(string);
}
exports.endsWith = endsWith;
function camel(string) {
    return Case.camel(string);
}
exports.camel = camel;
function kebab(string) {
    return Case.kebab(string);
}
exports.kebab = kebab;
function studly(string) {
    return Case.pascal(string);
}
exports.studly = studly;
function snake(string) {
    return Case.snake(string);
}
exports.snake = snake;
function contains(string, needles) {
    const reg = new RegExp(`.*\\${needles}.*`);
    return reg.test(string);
}
exports.contains = contains;
function containsAll(string, needles) {
    const truthy = needles.map(value => contains(string, value));
    return truthy.reduce((previous, current) => previous && current);
}
exports.containsAll = containsAll;
function equalsAny(string, needles) {
    const truthy = needles.map(value => string === value);
    return truthy.reduce((previous, current) => previous || current);
}
exports.equalsAny = equalsAny;
function finish(string, char) {
    return string[string.length - 1] !== char ? string + char : string;
}
exports.finish = finish;
function start(string, char) {
    return string[0] !== char ? char + string : string;
}
exports.start = start;
function limit(string, limit, end = '...') {
    return string.substr(0, limit) + end;
}
exports.limit = limit;
function replaceArray(search, replace, subject) {
    replace.forEach(i => {
        subject = subject.replace(search, i);
    });
    return subject;
}
exports.replaceArray = replaceArray;
function replaceFirst(search, replace, subject) {
    return subject.replace(search, replace);
}
exports.replaceFirst = replaceFirst;
function replaceLast(search, replace, subject) {
    return (subject.substring(0, subject.lastIndexOf(search)) +
        replace +
        subject.substring(subject.lastIndexOf(search) + search.length));
}
exports.replaceLast = replaceLast;
//# sourceMappingURL=Str.js.map