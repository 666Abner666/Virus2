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

// 获取侧边栏菜单项和对应的内容区域
const menuItems = document.querySelectorAll('.sidebar-menu ul li');
const contentSections = document.querySelectorAll('.main-content');

// 遍历菜单项
menuItems.forEach((menuItem, index) => {
    // 监听菜单项的点击事件
    menuItem.addEventListener('click', () => {
        // 隐藏所有内容区域
        contentSections.forEach((section) => {
            section.classList.add('hidden');
        });
        // 显示对应的内容区域
        const contentSection = contentSections[index];
        contentSection.classList.remove('hidden');
    });
});

window.onload = function () {
    // 使用 Fetch API 发起 GET 请求获取用户数据
    fetch('/users')
        .then(response => response.json())
        .then(users => {
            // 将用户数据插入到表格中
            const tableBody = document.querySelector('#user-table tbody');
            console.log(users)
            console.log(users.users)
            for (let i = 0; i < users.users.length; i++) {
                console.log(users.users[i]);
                console.log("Name=" + users.users[i].name);
                console.log("Password=" + users.users[i].password);

                // 获取ul元素
                const userList = document.getElementById('user-list');

                // 创建li元素
                const userCard = document.createElement('li');
                userCard.classList.add('user-card');

                // 创建img元素
                const userAvatar = document.createElement('img');
                userAvatar.src = 'https://via.placeholder.com/50x50';
                userAvatar.alt = '用户头像';

                // 创建div元素
                const userInfo = document.createElement('div');
                userInfo.classList.add('user-info');

                // 创建h3元素
                const userName = document.createElement('h3');
                userName.textContent = users.users[i].name;

                // 创建p元素
                const userPassword = document.createElement('p');
                userPassword.textContent = '密码: ' + users.users[i].password;

                const userId = document.createElement('p');
                userId.textContent = 'ID: 654321';

                const userRegistrationMethod = document.createElement('p');
                userRegistrationMethod.textContent = '注册方式: Facebook';

                // 创建button元素
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-btn');
                deleteButton.textContent = '删除';

                // 将创建的元素添加到li元素中
                userInfo.appendChild(userName);
                userInfo.appendChild(userPassword);
                userInfo.appendChild(userId);
                userInfo.appendChild(userRegistrationMethod);

                userCard.appendChild(userAvatar);
                userCard.appendChild(userInfo);
                userCard.appendChild(deleteButton);

                // 将li元素添加到ul元素中
                userList.appendChild(userCard);

            }

            var deleteButtons = document.querySelectorAll('.delete-btn');
            console.log('aaa' + deleteButtons.length)
            deleteButtons.forEach(deleteButton => {
                deleteButton.addEventListener('click', function () {
                    const userName = this.parentNode.querySelector('h3').textContent;
                    console.log(userName);

                    $.ajax({
                        url: '/delete_user',
                        type: 'POST',
                        data: { name: userName },
                        success: function (response) {
                            console.log(response);
                        }
                    });

                    const userList = this.parentNode.parentNode;
                    userList.removeChild(this.parentNode);


                });
            });

            // users.forEach(user => {
            //     for (let i = 0; i < users.users.length; i++) {
            //         console.log(users.users[i]);
            //     }
            // });
        })
        .catch(error => console.error(error));



    // // 使用 Fetch API 发起 GET 请求获取用户数据
    // fetch('/users')
    //     .then(response => response.json())
    //     .then(data => {
    //         const users = Array.isArray(data) ? data : [data];
    //         console.log(users);
    //         const U = users.users
    //         console.log(U)
    //         users.forEach(user => {
    //             console.log(user.user)
    //             for (let i = 0; i < U.length; i++) {
    //                 console.log(U[i]);
    //             }
    //         });
    //     })
    //     .catch(error => console.error(error));


    // console.log('aaa' + deleteButtons.length)
    // deleteButtons.forEach(deleteButton => {
    //     deleteButton.addEventListener('click', function () {
    //         const userName = this.parentNode.querySelector('h3').textContent;
    //         console.log(userName);
    //         const userList = this.parentNode.parentNode;
    //         userList.removeChild(this.parentNode);
    //     });
    // });
}

