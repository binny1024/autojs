
// 比手速脚本
auto.waitFor();


let i = 0;

var id = setInterval(function () {
    console.log(++i);
    _swipe();
}, 0);
setTimeout(function () {
    clearInterval(id);
}, 10 * 1000);



//  快速滑动
let start_x = end_x = 1000;
let start_y = 1000;
let end_y = 500;
let duration = 200;
function _swipe(){
    swipe(start_x, start_y, end_x, end_y, duration);
}
//启用按键监听
// let stop = false;
// events.observeKey();
// // 监听菜单键按下
// events.onKeyDown("menu", function (event) {
//     toast("菜单键被按下了");
// });
// events.onKeyDown('back', function (events) {
//     toast("返回键键被按下了");
//     exit();
// })