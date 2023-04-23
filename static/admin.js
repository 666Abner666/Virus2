// 获取侧边栏元素和侧边栏菜单元素
var sidebar = document.querySelector('.sidebar');
var sidebarMenu = document.querySelector('.sidebar-menu');


// 给侧边栏元素绑定鼠标移入和移出事件
sidebar.addEventListener('mouseenter', function () {
    sidebar.classList.add('expand');
    setTimeout(function () {
        sidebarMenu.classList.add('expanded');
    }, 80); // 80 毫秒延迟
});

sidebar.addEventListener('mouseleave', function () {
    sidebar.classList.remove('expand');
    setTimeout(function () {
        sidebarMenu.classList.remove('expanded');
    }, 80); // 80 毫秒延迟
});

