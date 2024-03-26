export function classnames(objeto) {
    for (const key in objeto) {
        if (objeto[key]) {
            return key
        }else{
            return ""
        }
    }    
}