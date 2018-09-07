//获取当前时间
export function getCurrentDay () {
    let oDate = new Date(),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay)
    return oTime;
}
//月 日补0操作
function addZero (num) {
    if (parseInt(num) < 10) {
        num = '0' + num;
    }
    return num;
}