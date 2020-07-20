var fs = require('fs');
let source = `任务三十七：浮出层组件实现

任务三十八：支持表头排序功能的表格组件实现

任务三十九：首行冻结表格组件实现

任务四十：简单日历组件实现

任务四十一：日历组件升级

任务四十二：支持日期段选择的日历组件实现

任务四十三：拼图布局

任务四十四：瀑布布局

任务四十五：木桶布局

任务四十六：游戏界面元素的简单实现

任务四十七：与游戏中元素的互动实现

任务四十八：游戏地图的实现

任务四十九：更炫酷的游戏实现`;
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