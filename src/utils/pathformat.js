export default (prefix, lastPrefix) => {
    let decodePrefix = decodeURIComponent(prefix);
    return decodePrefix.substr(0, decodePrefix.length - 1);
};