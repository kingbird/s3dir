export default (filename) => {
    let index1 = filename.lastIndexOf('.');
    let index2 = filename.length;
    let type = filename.substring(index1, index2);
    return type.replace('.', '').toLocaleUpperCase();
};