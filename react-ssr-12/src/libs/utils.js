// 判断当前运行环境
export const isServer = () => {
    let is = true;
    try {
        if (window) {
            is = false;
        }
    } catch (e) {
        is = true;
    }
    return is;
}