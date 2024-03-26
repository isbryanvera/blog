export function classnames(objeto) {
    let classes = '';
    for (const key in objeto) {
        if (objeto[key]) {
            classes += key + ' ';
        }
    }
    return classes.trim();
}