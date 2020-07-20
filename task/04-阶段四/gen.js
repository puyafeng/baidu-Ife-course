var fs = require('fs');
let source = `任务五十：RIA 问卷管理平台

任务五十一：高级相册

任务五十二：王牌特工游戏`;
source = source.replace(/ +/g, "").replace(/\//g, "、");
console.log(source);
let array = source.split(/\n+/g);
console.log(array);
array = array.map((ele, index) => {
    return (index + 1 + "").replace(/(^\d$)/g, "0$1") + "-" + ele;
});
var fs = require('fs');
array.forEach(ele => {
    fs.mkdir(ele, function (err) {
        if (!err) {
            console.log(ele);
            fs.writeFile(`./${ele}/ReadMe.md`, "", function (err, data) {
                if (err) {
                    console.log(err);
                }
            });
        } else {
            console.log(err);
        }
    });
});