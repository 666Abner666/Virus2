var num = false
var tb = false
var namereg = 'Abner'
var passwordreg = 'Abner666'
var LOGIN = false
var LANGUGE = navigator.language
var DL = null
OnClick = false
console.log(LANGUGE)
HACK_IN = null
var NONE = false

var ueser = document.getElementsByClassName('ueser')
var settings = document.getElementsByClassName('settings')
var settings2 = document.getElementsByClassName('settings2')
var light = document.getElementsByClassName('light-settings')
var light2 = document.getElementsByClassName('light-settings2')
var light3 = document.getElementsByClassName('light-settings3')
var ueserbtn = document.getElementsByClassName('btn1')
var regbtn = document.getElementsByClassName('btn2')
var login1 = document.getElementsByClassName('enterbox')
var login2 = document.getElementsByClassName('reg')
var mainthings1 = document.getElementsByClassName('mainthings1')
var mainthings2 = document.getElementsByClassName('mainthings2')
var outline = document.getElementsByClassName('out-line')
var selectbar = document.getElementsByClassName('Language')
var regtest = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[^]{4,12}$/
var regpass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[^]{4,12}$/
var alert = document.getElementsByClassName('alert')
var danger = document.getElementsByClassName('danger')
var success = document.getElementsByClassName('success')
var info = document.getElementsByClassName('info')
Data = null
// selectbar[0].value = null 拿不到

// fetch('/send_data')
//     .then(response => response.json())
//     .then(data => {
//         // 处理返回的数据
//         console.log('DATA=' + data);
//         Data = data
//     });


if (LANGUGE == 'zh-CN' || LANGUGE == 'zh') {
    DL = 'cn'
    // console.log('VALUE = ' + selectbar[0].value) 拿不到
    // selectbar = DL
    // submit() // 调用funtction 结果报错
    ChangeToChinese()
    console.log(DL)
    console.log('中文')
}

else if (LANGUGE == 'en-US' || LANGUGE == 'en') {
    DL = 'en'
    // selectbar = DL
    // submit() // 调用funtction 结果报错
    ChangeToEnglish()
    selectbar[0].value = 'en'
    console.log(DL)
    console.log('ENGLISH')
}


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

ID = null

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    const responsePayload = decodeJwtResponse(response.credential);

    console.log("ID: " + responsePayload.sub);
    ID = responsePayload.sub
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);

    var name = responsePayload.name
    var img = responsePayload.picture
    document.getElementsByClassName('ueser-name')[0].innerHTML = name;
    document.getElementsByClassName('ueser-name')[1].innerHTML = name;
    document.getElementById('img').src = img;
    document.getElementById('img2').src = img;
    exit();
    LOGIN = true;
    // 将用户的访问令牌保存到 Cookie 中
    // var expires = new Date();
    // expires.setTime(expires.getTime() + (30 * 60 * 1000)); // 令牌将在 30 分钟后过期
    // document.cookie = 'access_token=' + requestAccessToken() + '; expires=' + expires.toUTCString() + '; path=/';
}

// 用户登出后的回调函数
function onUserSignedOut() {
    // 删除保存在 Cookie 中的访问令牌
    // document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    LOGIN = false
    exit()
    onUserLoggedOut()
    document.getElementsByClassName('ueser-name')[0].innerHTML = '未登录';
    document.getElementsByClassName('ueser-name')[1].innerHTML = '未登录';
    document.getElementById('img').src = "../img/Black_colour.jpg";
    document.getElementById('img2').src = "../img/Black_colour.jpg";
    games[0].style.display = 'inline-block'
    web[0].style.display = 'none'
    virus[0].style.display = 'none'
    other[0].style.display = 'none'
    BQB[0].style.display = 'none'
    console.log('games')
    ID = null
    HACK_IN = false
    if (selectbar[0].value == 'cn') {
        if (OnClick == false) {
            info[0].style.display = 'inline-block';
            document.getElementsByClassName('msg')[3].innerHTML = '已退出登录'
            document.getElementsByClassName('info')[0].style.zIndex = '9999'
            $('.info').addClass("show");
            $('.info').removeClass("hide");
            $('.info').addClass("showAlert");
            OnClick = true
            setTimeout(function () {
                $('.info').removeClass("show");
                $('.info').addClass("hide");
                OnClick = false
                NONE = false
            }, 2000);
        }
    }
    else if (selectbar[0].value == 'cn') {
        if (OnClick == false) {
            info[0].style.display = 'inline-block';
            document.getElementsByClassName('msg')[3].innerHTML = 'Logged out'
            document.getElementsByClassName('info')[0].style.zIndex = '9999'
            $('.info').addClass("show");
            $('.info').removeClass("hide");
            $('.info').addClass("showAlert");
            OnClick = true
            setTimeout(function () {
                $('.info').removeClass("show");
                $('.info').addClass("hide");
                OnClick = false
                NONE = false
            }, 2000);
        }
    }

}

function decodeJwtResponse(response) {
    const encodedPayload = response.split('.')[1];
    const base64 = encodedPayload.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = atob(base64);
    const jwtPayload = JSON.parse(decodedPayload);
    return jwtPayload;
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

function init() {
    console.log('Function init()')
    // 从 Cookie 中获取用户登录状态、用户名和密码
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf('LOGIN=') === 0) {
            LOGIN = cookie.substring('LOGIN='.length) === 'true';
        } else if (cookie.indexOf('namereg=') === 0) {
            username = decodeURIComponent(cookie.substring('namereg='.length));
        } else if (cookie.indexOf('passwordreg=') === 0) {
            password = decodeURIComponent(cookie.substring('passwordreg='.length));
        }
    }

    // 根据用户登录状态显示不同的内容
    if (LOGIN) {
        showLoggedInContent();
        console.log('已登陆init(COOKIE)')
    } else {
        showLoggedOutContent();
        console.log('未登陆init(COOKIE)')
    }
}

// 用户登录后的回调函数
function onUserLoggedIn() {
    // 获取用户名和密码
    namereg = document.getElementById('name').value;
    passwordreg = document.getElementById('password').value;
    console.log(namereg)
    console.log(passwordreg)

    // 将用户登录状态、用户名和密码保存到 Cookie 中
    var expires = new Date();
    expires.setTime(expires.getTime() + (30 * 60 * 1000)); // 登录状态将在 30 分钟后过期
    document.cookie = 'LOGIN=true; expires=' + expires.toUTCString() + '; path=/';
    document.cookie = 'namereg=' + encodeURIComponent(namereg) + '; expires=' + expires.toUTCString() + '; path=/';
    document.cookie = 'passwordreg=' + encodeURIComponent(passwordreg) + '; expires=' + expires.toUTCString() + '; path=/';

    console.log('登陆回调(COOKIE)')

    // 显示登录后的内容
    showLoggedInContent();
}

//查找Cookie
function getCookie(name) {
    // console.log('name=' + name)
    const cookieString = document.cookie;
    if (cookieString) {
        const cookies = cookieString.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
    }
    return '';
}

// 用户登出后的回调函数
function onUserLoggedOut() {
    // 删除保存在 Cookie 中的登录状态、用户名和密码
    document.cookie = 'LOGIN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'namereg=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'passwordreg=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // 显示登出后的内容
    showLoggedOutContent();
}

// 显示已登录的内容
function showLoggedInContent() {
    console.log('已登陆(COOKIE)')
    document.getElementsByClassName("ueser-name")[0].innerHTML = getCookie('namereg')
    document.getElementsByClassName("ueser-name")[1].innerHTML = getCookie('namereg')
    LOGIN = true
}

// 显示未登录的内容
function showLoggedOutContent() {
    console.log('未登录(COOKIE)')
    LOGIN = false
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

function login123() {
    var username = $('#name').val();
    var password = $('#password').val();
    $.ajax({
        url: '/login',
        data: {
            'username': username,
            'password': password
        },
        type: 'POST',
        success: function (response) {
            if (response.success) {
                console.log('登录成功')
                // 跳转到其他页面
                LS()
            } else {
                if (response.message == 'username_not_found') {
                    if (selectbar[0].value == 'cn') {
                        if (OnClick == false) {
                            alert[0].style.display = 'inline-block';
                            console.log(document.getElementById('name').value)
                            console.log(document.getElementById('password').value)
                            document.getElementsByClassName('msg')[0].innerHTML = '用户名错误！'
                            document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                            $('.alert:eq(0)').addClass("show");
                            $('.alert:eq(0)').removeClass("hide");
                            $('.alert:eq(0)').addClass("showAlert");
                            OnClick = true
                            setTimeout(function () {
                                $('.alert:eq(0)').removeClass("show");
                                $('.alert:eq(0)').addClass("hide");
                                OnClick = false
                                NONE = false
                            }, 2000);
                        }
                    }

                    else if (selectbar[0].value == 'en') {
                        if (OnClick == false) {
                            alert[0].style.display = 'inline-block';
                            console.log(document.getElementById('name').value)
                            console.log(document.getElementById('password').value)
                            console.log(document.getElementById('name').value)
                            console.log(document.getElementById('password').value)
                            document.getElementsByClassName('msg')[0].innerHTML = 'ERROR! Incorrect username'
                            document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                            $('.alert:eq(0)').addClass("show");
                            $('.alert:eq(0)').removeClass("hide");
                            $('.alert:eq(0)').addClass("showAlert");
                            OnClick = true
                            setTimeout(function () {
                                $('.alert:eq(0)').removeClass("show");
                                $('.alert:eq(0)').addClass("hide");
                                OnClick = false
                                NONE = false
                            }, 2000);
                        }
                    }
                }
                else if (response.message == 'password_incorrect') {
                    if (selectbar[0].value == 'cn') {
                        if (OnClick == false) {
                            alert[0].style.display = 'inline-block';
                            console.log(document.getElementById('name').value)
                            console.log(document.getElementById('password').value)
                            document.getElementsByClassName('msg')[0].innerHTML = '密码错误！'
                            document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                            $('.alert:eq(0)').addClass("show");
                            $('.alert:eq(0)').removeClass("hide");
                            $('.alert:eq(0)').addClass("showAlert");
                            OnClick = true
                            setTimeout(function () {
                                $('.alert:eq(0)').removeClass("show");
                                $('.alert:eq(0)').addClass("hide");
                                OnClick = false
                                NONE = false
                            }, 2000);
                        }
                    }

                    else if (selectbar[0].value == 'en') {
                        if (OnClick == false) {
                            alert[0].style.display = 'inline-block';
                            console.log(document.getElementById('name').value)
                            console.log(document.getElementById('password').value)
                            console.log(document.getElementById('name').value)
                            console.log(document.getElementById('password').value)
                            document.getElementsByClassName('msg')[0].innerHTML = 'ERROR! Incorrect Password!'
                            document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                            $('.alert:eq(0)').addClass("show");
                            $('.alert:eq(0)').removeClass("hide");
                            $('.alert:eq(0)').addClass("showAlert");
                            OnClick = true
                            setTimeout(function () {
                                $('.alert:eq(0)').removeClass("show");
                                $('.alert:eq(0)').addClass("hide");
                                OnClick = false
                                NONE = false
                            }, 2000);
                        }
                    }
                }
            }
        },
        error: function () {
            if (OnClick == false) {
                if (selectbar[0].value == 'cn') {
                    if (OnClick == false) {
                        danger[0].style.display = 'inline-block';
                        document.getElementsByClassName('msg')[1].innerHTML = '请求出错，请重试'
                        $('.danger').addClass("show");
                        $('.danger').removeClass("hide");
                        $('.danger').addClass("showAlert");
                        OnClick = true
                        setTimeout(function () {
                            $('.danger').removeClass("show");
                            $('.danger').addClass("hide");
                            OnClick = false
                            NONE = false
                        }, 2000);
                    }
                }
                else if (selectbar[0].value == 'en') {
                    if (OnClick == false) {
                        danger[0].style.display = 'inline-block';
                        document.getElementsByClassName('msg')[1].innerHTML = 'Request error, please try again'
                        $('.danger').addClass("show");
                        $('.danger').removeClass("hide");
                        $('.danger').addClass("showAlert");
                        OnClick = true
                        setTimeout(function () {
                            $('.danger').removeClass("show");
                            $('.danger').addClass("hide");
                            OnClick = false
                            NONE = false
                        }, 2000);
                    }
                }
            }
        }
    });
}



function empty2() {
    if (document.getElementById('name').value.length == 0) {
        if (selectbar[0].value == 'cn') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                console.log(document.getElementById('name').value)
                console.log(document.getElementById('password').value)
                document.getElementsByClassName('msg')[0].innerHTML = '请输入账号!'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
            document.getElementById('name').focus();
            return false;
        }

        else if (selectbar[0].value == 'en') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                console.log(document.getElementById('name').value)
                console.log(document.getElementById('password').value)
                document.getElementsByClassName('msg')[0].innerHTML = 'Please enter your ueser name!'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
            document.getElementById('name').focus();
            return false;
        }
    }


    if (document.getElementById('password').value.length == 0) {
        if (selectbar[0].value == 'cn') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                console.log(document.getElementById('name').value)
                console.log(document.getElementById('password').value)
                document.getElementsByClassName('msg')[0].innerHTML = '请输入密码!'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
            document.getElementById('password').focus();
            return false;
        }

        else if (selectbar[0].value == 'en') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                console.log(document.getElementById('name').value)
                console.log(document.getElementById('password').value)
                document.getElementsByClassName('msg')[0].innerHTML = 'Please enter your password!'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
            document.getElementById('password').focus();
            return false;
        }
    }
    else {
        if (selectbar[0].value == 'cn') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                console.log(document.getElementById('name').value)
                console.log(document.getElementById('password').value)
                document.getElementsByClassName('msg')[0].innerHTML = '用户名或密码错误！'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
        }

        else if (selectbar[0].value == 'en') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                console.log(document.getElementById('name').value)
                console.log(document.getElementById('password').value)
                console.log(document.getElementById('name').value)
                console.log(document.getElementById('password').value)
                document.getElementsByClassName('msg')[0].innerHTML = 'ERROR! Incorrect username or password!'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
        }
    }
}

function LS() {
    document.getElementsByClassName('ueser-name')[0].innerHTML = document.getElementById('name').value
    document.getElementsByClassName('ueser-name')[1].innerHTML = document.getElementById('name').value
    console.log('NAME = ' + document.getElementById('name').value)
    if (selectbar[0].value == 'cn') {
        onUserLoggedIn()
        if (OnClick == false) {
            success[0].style.display = 'inline-block';
            document.getElementsByClassName('msg')[2].innerHTML = '登陆成功'
            document.getElementsByClassName('success')[0].style.zIndex = '9999'
            $('.success').addClass("show");
            $('.success').removeClass("hide");
            $('.success').addClass("showAlert");
            OnClick = true
            setTimeout(function () {
                $('.success').removeClass("show");
                $('.success').addClass("hide");
                OnClick = false
                NONE = false
            }, 2000);
        }
        light[0].style.display = 'none'
        light2[0].style.display = 'none'
        document.getElementById('name').value = ''
        document.getElementById('password').value = ''
        document.getElementById('name-reg').value = ''
        document.getElementById('password-reg').value = ''
        document.getElementById('password-reg2').value = ''
        LOGIN = true
        num = true
    }

    else if (selectbar[0].value == 'en') {
        onUserLoggedIn()
        if (OnClick == false) {
            success[0].style.display = 'inline-block';
            document.getElementsByClassName('msg')[2].innerHTML = 'Login successfully!'
            document.getElementsByClassName('success')[0].style.zIndex = '9999'
            $('.success').addClass("show");
            $('.success').removeClass("hide");
            $('.success').addClass("showAlert");
            OnClick = true
            setTimeout(function () {
                $('.success').removeClass("show");
                $('.success').addClass("hide");
                OnClick = false
                NONE = false
            }, 2000);
        }
        light[0].style.display = 'none'
        light2[0].style.display = 'none'
        document.getElementById('name').value = ''
        document.getElementById('password').value = ''
        document.getElementById('name-reg').value = ''
        document.getElementById('password-reg').value = ''
        document.getElementById('password-reg2').value = ''
        LOGIN = true
        num = true
    }
}

function to_reg() {
    var box = document.getElementsByClassName('box')
    box[0].style.display = 'none'
    box[1].style.display = 'block'
}

function to_login() {
    var box = document.getElementsByClassName('box')
    box[1].style.display = 'none'
    box[0].style.display = 'block'
}

function checkUsername() {
    var username = $('#name-reg').val(); // 获取用户名

    // 发送 GET 请求到后端
    $.ajax({
        url: '/check_username',
        data: { 'name-reg': username },
        type: 'GET',
        success: function (response) {
            // 处理返回结果
            if (response.exists) {
                // 用户名已存在，给出提示
                if (selectbar[0].value == 'cn') {
                    if (OnClick == false) {
                        alert[0].style.display = 'inline-block';
                        console.log(document.getElementById('name').value)
                        console.log(document.getElementById('password').value)
                        document.getElementsByClassName('msg')[0].innerHTML = '用户名已存在！'
                        document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                        $('.alert:eq(0)').addClass("show");
                        $('.alert:eq(0)').removeClass("hide");
                        $('.alert:eq(0)').addClass("showAlert");
                        OnClick = true
                        setTimeout(function () {
                            $('.alert:eq(0)').removeClass("show");
                            $('.alert:eq(0)').addClass("hide");
                            OnClick = false
                            NONE = false
                        }, 2000);
                    }
                }

                else if (selectbar[0].value == 'en') {
                    if (OnClick == false) {
                        alert[0].style.display = 'inline-block';
                        console.log(document.getElementById('name').value)
                        console.log(document.getElementById('password').value)
                        console.log(document.getElementById('name').value)
                        console.log(document.getElementById('password').value)
                        document.getElementsByClassName('msg')[0].innerHTML = 'Username already exists!'
                        document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                        $('.alert:eq(0)').addClass("show");
                        $('.alert:eq(0)').removeClass("hide");
                        $('.alert:eq(0)').addClass("showAlert");
                        OnClick = true
                        setTimeout(function () {
                            $('.alert:eq(0)').removeClass("show");
                            $('.alert:eq(0)').addClass("hide");
                            OnClick = false
                            NONE = false
                        }, 2000);
                    }
                }
            } else {
                // 用户名不存在，可以继续注册
                var alert = document.getElementsByClassName('alert')
                var danger = document.getElementsByClassName('danger')
                var success = document.getElementsByClassName('success')
                var info = document.getElementsByClassName('info')

                alert[0].style.display = 'none';
                alert[1].style.display = 'none';
                danger[0].style.display = 'none';
                success[0].style.display = 'none';
                info[0].style.display = 'none';
                reg1()
            }
        },
        error: function () {
            // 请求出错，给出提示
            console.log("请求出错，请重试")
        }
    });
}


function reg1() {
    var reg1 = document.getElementById('button-reg')
    var name = document.getElementById('name-reg')
    var password = document.getElementById('password-reg')
    var settings = document.getElementsByClassName('reg')

    if (document.getElementById('name-reg').value.length == 0) {
        if (selectbar[0].value == 'cn') {
            alert[0].style.display = 'inline-block';
            if (OnClick == false) {
                document.getElementsByClassName('msg')[0].innerHTML = '请输入账号!'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
            document.getElementById('name-reg').focus();
            return false;
        }

        else if (selectbar[0].value == 'en') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[0].innerHTML = 'Please enter your ueser name!'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
            document.getElementById('name-reg').focus();
            return false;
        }
    }

    if (document.getElementById('password-reg').value.length == 0) {
        if (selectbar[0].value == 'cn') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[0].innerHTML = '请输入密码!'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
            document.getElementById('password-reg').focus();
            return false;
        }

        else if (selectbar[0].value == 'en') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[0].innerHTML = 'Please enter your password!'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
            document.getElementById('password-reg').focus();
            return false;
        }
    }

    if (document.getElementById('password-reg2').value.length == 0) {
        if (selectbar[0].value == 'cn') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[0].innerHTML = '你的 ‘确认密码’ 未填写'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
            document.getElementById('password-reg2').focus();
            return false;
        }

        else if (selectbar[0].value == 'en') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[0].innerHTML = 'Your "Confirm password" is not filled in'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
            document.getElementById('password-reg2').focus();
            return false;
        }
    }

    if (document.getElementById('password-reg2').value != document.getElementById('password-reg').value) {
        if (selectbar[0].value == 'cn') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[0].innerHTML = '你第二次输入的密码与第一个密码不相符!'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
            return false;
        }

        else if (selectbar[0].value == 'en') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[0].innerHTML = 'The password you entered for the second time does not match the first one!'
                document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    onclick = false
                    NONE = false
                }, 2000);
            }
            return false;
        }
    }

    if (regtest.test(document.getElementById('name-reg').value) && regpass.test(document.getElementById('password-reg').value)) {
        console.log(name.value)
        console.log(password.value)
        namereg = name
        passwordreg = password
        console.log(namereg.value)
        console.log(passwordreg.value)
        light[0].style.display = 'none'
        LOGIN = true
        document.getElementsByClassName('ueser-name')[0].innerHTML = document.getElementById('name-reg').value
        document.getElementsByClassName('ueser-name')[1].innerHTML = document.getElementById('name-reg').value
        namereg = document.getElementById('name-reg').value
        passwordreg = document.getElementById('password-reg').value
        onUserLoggedIn()

        namereg = document.getElementById('name-reg').value
        passwordreg = document.getElementById('password-reg').value
        onUserLoggedIn()

        $.ajax({
            type: "POST",
            url: "/data",
            data: { 'name': namereg, 'password': passwordreg, 'id': 1 },
            success: function (response) {
                console.log('数据传输成功')
                console.log(data)
            },
            error: function () {
                console.log('数据传输失败')
            }
        });



        if (selectbar[0].value == 'cn') {
            if (OnClick == false) {
                success[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[2].innerHTML = '注册成功! 已为您自动登录!'
                document.getElementsByClassName('success')[0].style.zIndex = '9999'
                $('.success').addClass("show");
                $('.success').removeClass("hide");
                $('.success').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.success').removeClass("show");
                    $('.success').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
        }

        else if (selectbar[0].value == 'en') {
            if (OnClick == false) {
                success[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[2].innerHTML = 'Registered successfully! You have been automatically logged in'
                document.getElementsByClassName('success')[0].style.zIndex = '9999'
                $('.success').addClass("show");
                $('.success').removeClass("hide");
                $('.success').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.success').removeClass("show");
                    $('.success').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
        }
    }

    else {
        if (selectbar[0].value == 'cn') {
            if (OnClick == false) {
                alert[1].style.display = 'inline-block';
                document.getElementsByClassName('msg2')[0].style.marginTop = '8px'
                document.getElementsByClassName('nmsg')[0].style.marginTop = '-14px'
                document.getElementsByClassName('nmsg')[0].innerHTML = '名字和密码的内容需要包含：小写字母，'
                document.getElementsByClassName('msg2')[0].innerHTML = '大写字母和数字，且不能小于4和大于12个字符'
                document.getElementsByClassName('alert')[1].style.height = '62px'
                document.getElementsByClassName('alert')[1].style.zIndex = '9999'
                $('.alert:eq(1)').addClass("show");
                $('.alert:eq(1)').removeClass("hide");
                $('.alert:eq(1)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(1)').removeClass("show");
                    $('.alert:eq(1)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2500);
            }
            console.log('名字=' + document.getElementById('name-reg').value)
            console.log('密码=' + document.getElementById('password-reg').value)
            return false
        }

        else if (selectbar[0].value == 'en') {
            if (OnClick == false) {
                alert[1].style.display = 'inline-block';
                document.getElementsByClassName('msg2')[0].style.marginTop = '6px'
                document.getElementsByClassName('nmsg')[0].innerHTML = 'The name and password must contain lowercase letters, uppercase letters,'
                document.getElementsByClassName('msg2')[0].innerHTML = ' and numbers, also cannot be less than 4 characters or more than 12 characters'
                document.getElementsByClassName('alert')[1].style.height = '62px'
                document.getElementsByClassName('alert')[1].style.zIndex = '9999'
                $('.alert:eq(1)').addClass("show");
                $('.alert:eq(1)').removeClass("hide");
                $('.alert:eq(1)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(1)').removeClass("show");
                    $('.alert:eq(1)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2500);
            }
            console.log('名字=' + document.getElementById('name-reg').value)
            console.log('密码=' + document.getElementById('password-reg').value)
            return false
        }
    }
}

function btn1() {
    if (LOGIN == false) {
        var box = document.getElementsByClassName('box')
        light[0].style.display = 'block'
        box[0].style.display = 'block'
        box[1].style.display = 'none'

    }

    else if (LOGIN == true) {
        light[1].style.display = 'block'
        console.log(LOGIN)
    }
}

function btn2() {
    light2[0].style.display = 'block'
}

function exit() {
    light[0].style.display = 'none'
    light[1].style.display = 'none'
    light2[0].style.display = 'none'
    document.getElementById('name').value = ''
    document.getElementById('password').value = ''
    document.getElementById('name-reg').value = ''
    document.getElementById('password-reg').value = ''
    document.getElementById('password-reg2').value = ''
    // regbtn[0].style.backgroundColor = 'gray'
    // ueserbtn[0].style.backgroundColor = 'white'
    // login1[0].style.display = 'inline-block'
    // login2[0].style.display = 'none'
}

function login() {
    regbtn[0].style.backgroundColor = 'gray'
    ueserbtn[0].style.backgroundColor = 'white'
    login1[0].style.display = 'inline-block'
    login2[0].style.display = 'none'
}

function reg() {
    regbtn[0].style.backgroundColor = 'white'
    ueserbtn[0].style.backgroundColor = 'gray'
    login1[0].style.display = 'none'
    login2[0].style.display = 'inline-block'
}

// var ctrl_games = document.getElementsByClassName('ctrl-btn1')
// var ctrl_web = document.getElementsByClassName('ctrl-btn2')
// var ctrl_virus = document.getElementsByClassName('ctrl-btn3')

var games = document.getElementsByClassName('games')
var web = document.getElementsByClassName('web')
var virus = document.getElementsByClassName('virus')
var other = document.getElementsByClassName('other')
var BQB = document.getElementsByClassName('BQB')

function games1() {
    games[0].style.display = 'inline-block'
    web[0].style.display = 'none'
    virus[0].style.display = 'none'
    other[0].style.display = 'none'
    BQB[0].style.display = 'none'
    console.log('games')
}

function web1() {
    games[0].style.display = 'none'
    web[0].style.display = 'inline-block'
    virus[0].style.display = 'none'
    other[0].style.display = 'none'
    BQB[0].style.display = 'none'
    console.log('web')
}

function virus1() {
    games[0].style.display = 'none'
    web[0].style.display = 'none'
    virus[0].style.display = 'inline-block'
    other[0].style.display = 'none'
    BQB[0].style.display = 'none'
    console.log('virus')
}

function other1() {
    games[0].style.display = 'none'
    web[0].style.display = 'none'
    virus[0].style.display = 'none'
    other[0].style.display = 'inline-block'
    BQB[0].style.display = 'none'
    console.log('other')
}

IDV = ['101500681671442069886', '115843620982578159736', '105127938811676800612', '109537578674873788955']

function BQB1() {
    if (ID == IDV || HACK_IN == true) {
        games[0].style.display = 'none'
        web[0].style.display = 'none'
        virus[0].style.display = 'none'
        other[0].style.display = 'none'
        BQB[0].style.display = 'inline-block'
        console.log('BQB')
    }
    else if (LOGIN == false) {
        if (selectbar[0].value == 'cn') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[0].innerHTML = '请先登录'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
        }
        else if (selectbar[0].value == 'en') {
            if (OnClick == false) {
                alert[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[0].innerHTML = 'Login First'
                $('.alert:eq(0)').addClass("show");
                $('.alert:eq(0)').removeClass("hide");
                $('.alert:eq(0)').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.alert:eq(0)').removeClass("show");
                    $('.alert:eq(0)').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
        }
    }

    else {
        if (OnClick == false) {
            if (selectbar[0].value == 'cn') {
                if (OnClick == false) {
                    danger[0].style.display = 'inline-block';
                    document.getElementsByClassName('msg')[1].innerHTML = '权限不足'
                    $('.danger').addClass("show");
                    $('.danger').removeClass("hide");
                    $('.danger').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.danger').removeClass("show");
                        $('.danger').addClass("hide");
                        OnClick = false
                        NONE = false
                    }, 2000);
                }
            }
            else if (selectbar[0].value == 'en') {
                if (OnClick == false) {
                    danger[0].style.display = 'inline-block';
                    document.getElementsByClassName('msg')[1].innerHTML = 'Insufficient permissions'
                    $('.danger').addClass("show");
                    $('.danger').removeClass("hide");
                    $('.danger').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.danger').removeClass("show");
                        $('.danger').addClass("hide");
                        OnClick = false
                        NONE = false
                    }, 2000);
                }
            }
        }

    }
}



/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

var random = null
function submit() {
    let timer = setTimeout(() => {
        var CB1 = document.getElementsByClassName('ctrl-btn1')
        var CB2 = document.getElementsByClassName('ctrl-btn2')
        var CB3 = document.getElementsByClassName('ctrl-btn3')
        var CB4 = document.getElementsByClassName('ctrl-btn4')
        var M1 = document.getElementsByClassName('mainthings1')
        var UB1 = document.getElementsByClassName('ueser-btn1')
        var UB2 = document.getElementsByClassName('ueser-btn2')
        var IW = document.getElementById('intro-word')
        var NB = document.getElementsByClassName('number-btn')
        var NB2 = document.getElementsByClassName('number-btn2')
        var num = document.getElementById('number')
        var LW = document.getElementById('Language-word')
        var submit = document.getElementsByClassName('submit')
        var VS = document.getElementById('virus-start')
        // var BW = document.getElementsByClassName('btn-word')
        // var L2 = document.getElementsByClassName('login2')
        // var na = document.getElementsByClassName('na')
        var NP = document.getElementById('name')
        var PWP = document.getElementById('password')
        // var LW1 = document.getElementById('login-word')
        var NRP = document.getElementById('name-reg')
        var PRP = document.getElementById('password-reg')
        var PRP2 = document.getElementById('password-reg2')
        // var RW = document.getElementById('reg-word')
        var SI = document.getElementsByClassName('SI')
        var UAP = document.getElementsByClassName('UAP')
        var OS = document.getElementsByClassName('OtherStuff')
        var LE = document.getElementsByClassName('Login_new')
        var EXIT = document.getElementsByClassName('test3')
        var BQB = document.getElementsByClassName('ctrl-btn5')
        //console.log(selectbar[0].value)
        if (selectbar[0].value == 'cn') {
            if (OnClick == false) {
                info[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[3].innerHTML = '已将语言换成中文'
                document.getElementsByClassName('info')[0].style.zIndex = '9999'
                $('.info').addClass("show");
                $('.info').removeClass("hide");
                $('.info').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.info').removeClass("show");
                    $('.info').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2500);
            }
            CB1[0].innerHTML = '小游戏'
            CB2[0].innerHTML = '快捷网页'
            CB3[0].innerHTML = '病毒'
            CB4[0].innerHTML = '其他'
            M1[0].innerHTML = '猜数字'
            UB1[0].innerHTML = '用户'
            UB2[0].innerHTML = '设置'
            IW.innerHTML = '游戏规则：<br>开始游戏后系统会随机生成一个数字，你可以在输入框里面猜一个1-100的数字，之后系统会告诉你，你猜的数字是猜大了，还是猜小了，猜对时游戏获胜'
            NB[0].innerHTML = '开始游戏'
            num.innerHTML = '请输入1到100之间的数字'
            NB2[0].innerHTML = '确定'
            LW.innerHTML = '语言：'
            submit[0].value = '确定'
            submit[0].style.left = '-19%'
            VS.innerHTML = '启动病毒！'
            // BW[0].innerHTML = '登录'
            // BW[1].innerHTML = '注册'
            // L2[0].innerHTML = '登录'
            // NP.setAttribute('placeholder','请输入账号')
            // na[0].innerHTML = '账号:'
            // na[1].innerHTML = '密码:'
            // PWP.setAttribute('placeholder','请输入密码')
            // LW1.innerHTML = '登录'
            // L2[1].innerHTML = '注册'
            // na[2].innerHTML = '账号:'
            // NRP.setAttribute('placeholder','请输入账号')
            // na[3].innerHTML = '密码:'
            // PRP.setAttribute('placeholder','请输入密码')
            // na[4].innerHTML = '确认密码:'
            // na[4].style.fontSize = '20px'
            // PRP2.setAttribute('placeholder','请再次输入密码')
            // RW.innerHTML = '注册'
            SI[0].innerHTML = '登录'
            UAP[0].innerHTML = '用户名'
            UAP[1].innerHTML = '密码'
            OS[0].innerHTML = '忘记密码?'
            OS[1].innerHTML = '注册'
            LE[0].innerHTML = '登录'
            EXIT[0].style.left = '361px'
            UAP[2].innerHTML = '用户名'
            UAP[3].innerHTML = '密码'
            UAP[4].innerHTML = '确认密码'
            OS[3].innerHTML = '去登录'
            LE[1].innerHTML = '注册'
            SI[1].innerHTML = '注册'
            BQB[0].innerHTML = '表情包'
            console.log('Chinese')
        }

        else if (selectbar[0].value == 'en') {
            if (OnClick == false) {
                info[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[3].innerHTML = 'language changed to English'
                document.getElementsByClassName('info')[0].style.zIndex = '9999'
                $('.info').addClass("show");
                $('.info').removeClass("hide");
                $('.info').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.info').removeClass("show");
                    $('.info').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2500);
            }
            CB1[0].innerHTML = 'Games'
            CB2[0].innerHTML = 'Website'
            CB3[0].innerHTML = 'Virus'
            CB4[0].innerHTML = 'Other'
            M1[0].innerHTML = 'Guess the number'
            UB1[0].innerHTML = 'User'
            UB2[0].innerHTML = 'Settings'
            IW.innerHTML = 'Game rule: <br> When you start the game, the system will generate a random number. You can guess a number from 1 to 100 in the input field.The system then tells you whether your guess is too high or too low, and the game wins when you guess correctly!'
            NB[0].innerHTML = 'Start Game'
            num.innerHTML = 'Please enter a number between 1 and 100'
            NB2[0].innerHTML = 'Confirm'
            LW.innerHTML = 'Language: '
            submit[0].value = 'Submit'
            submit[0].style.left = '-24%'
            VS.innerHTML = 'Start the virus!'
            // BW[0].innerHTML = 'Login'
            // BW[1].innerHTML = 'Register'
            // L2[0].innerHTML = 'Login'
            // na[0].innerHTML = 'Account:'
            // NP.setAttribute('placeholder','Please enter your ueser name')
            // na[1].innerHTML = 'Password:'
            // PWP.setAttribute('placeholder','Please enter your password')
            // LW1.innerHTML = 'Login'
            // L2[1].innerHTML = 'Register'
            // na[2].innerHTML = 'Account:'
            // NRP.setAttribute('placeholder','Please enter your ueser name')
            // na[3].innerHTML = 'Password:'
            // PRP.setAttribute('placeholder','Please enter your password')
            // na[4].innerHTML = 'Confirm password:'
            // na[4].style.fontSize = '18px'
            // PRP2.setAttribute('placeholder','Please confirm your password')
            // RW.innerHTML = 'Register'
            SI[0].innerHTML = 'Sign-in'
            UAP[0].innerHTML = 'UserName'
            UAP[1].innerHTML = 'Password'
            OS[0].innerHTML = 'Forgot Password?'
            OS[1].innerHTML = 'Sign-up'
            LE[0].innerHTML = 'Login'
            EXIT[0].style.left = '382px'
            UAP[2].innerHTML = 'UserName'
            UAP[3].innerHTML = 'Password'
            UAP[4].innerHTML = 'Confirm password'
            OS[3].innerHTML = 'Go Login'
            LE[1].innerHTML = 'Sign-up'
            SI[1].innerHTML = 'Sign-up'
            BQB[0].innerHTML = 'Emoticons'
            console.log('English')
        }
        clearTimeout(timer)
    })
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

function start_game() {
    document.getElementsByClassName('test4')[0].style.left = '-18px';
    document.getElementsByClassName('test4')[0].style.top = '220px';
    var before_start = document.getElementById('before-start')
    var intro = document.getElementById('intro')
    random = null
    before_start.style.display = 'inline-block'
    intro.style.display = 'none'
}

function Games1() {
    var before_start = document.getElementById('before-start')
    var intro = document.getElementById('intro')
    light3[0].style.display = 'block'
    outline[0].style.display = 'inline-block'
    intro.style.display = 'inline-block'
    before_start.style.display = 'none'
}

function exit_game1() {
    document.getElementsByClassName('test4')[0].style.left = '193px';
    document.getElementsByClassName('test4')[0].style.top = '-10px';
    var word = document.getElementById('number')
    var input = document.getElementById('input')
    outline[0].style.display = 'none'
    light3[0].style.display = 'none'
    input.value = ''
    big = 100
    small = 1
    if (selectbar[0].value == 'cn') {
        word.innerHTML = '请输入1到100之间的数字'
    }
    else if (selectbar[0].value == 'en') {
        'Please enter a number between 1 and 100'
    }

}

var big = 100
var small = 1
function button1() {
    var word = document.getElementById('number')
    if (random == null) {
        random = Math.floor(Math.random() * 100 + 1)
        console.log('random1=' + random)
    }
    var input = document.getElementById('input')
    console.log('input=' + input.value)

    console.log(parseInt(input.value) == parseInt(random))
    if (input.value == random) {
        if (selectbar[0].value == 'cn') {
            if (OnClick == false) {
                info[0].style.display = 'inline-block';
                document.getElementsByClassName('msg')[3].innerHTML = '猜对了！'
                document.getElementsByClassName('info')[0].style.zIndex = '9999'
                $('.info').addClass("show");
                $('.info').removeClass("hide");
                $('.info').addClass("showAlert");
                OnClick = true
                setTimeout(function () {
                    $('.info').removeClass("show");
                    $('.info').addClass("hide");
                    OnClick = false
                    NONE = false
                }, 2000);
            }
        }

        else if (selectbar[0].value == 'en') {
            if (selectbar[0].value == 'en') {
                if (OnClick == false) {
                    info[0].style.display = 'inline-block';
                    document.getElementsByClassName('msg')[3].innerHTML = 'BINGO!'
                    document.getElementsByClassName('info')[0].style.zIndex = '9999'
                    $('.info').addClass("show");
                    $('.info').removeClass("hide");
                    $('.info').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.info').removeClass("show");
                        $('.info').addClass("hide");
                        OnClick = false
                        NONE = false
                    }, 2000);
                }
            }
        }
    }
    else if (input.value > random) {
        console.log('big')
        //console.log('random2=' + random)
        console.log('大=' + small)
        console.log('input大=' + input.value)
        // var bignum = input.value
        // word.innerHTML = '请输入' + smallnum + '到' + bignum + '之间的数字'
        if (selectbar[0].value == 'cn') {
            if (input.value < big) {
                big = input.value
                word.innerHTML = '请输入' + small + '到' + big + '之间的数字'
                console.log('改变数字 大 cn')
            }
            if (selectbar[0].value == 'cn') {
                if (OnClick == false) {
                    info[0].style.display = 'inline-block';
                    document.getElementsByClassName('msg')[3].innerHTML = '猜大了！'
                    document.getElementsByClassName('info')[0].style.zIndex = '9999'
                    $('.info').addClass("show");
                    $('.info').removeClass("hide");
                    $('.info').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.info').removeClass("show");
                        $('.info').addClass("hide");
                        OnClick = false
                        NONE = false
                    }, 2000);
                }
            }
            input.value = ''
        }

        else if (selectbar[0].value == 'en') {
            if (input.value < big) {
                big = input.value
                word.innerHTML = 'Please enter a number between ' + small + ' and ' + big
                console.log('改变数字 大 en')
            }
            if (selectbar[0].value == 'en') {
                if (OnClick == false) {
                    info[0].style.display = 'inline-block';
                    document.getElementsByClassName('msg')[3].innerHTML = 'The number is too big!'
                    document.getElementsByClassName('info')[0].style.zIndex = '9999'
                    $('.info').addClass("show");
                    $('.info').removeClass("hide");
                    $('.info').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.info').removeClass("show");
                        $('.info').addClass("hide");
                        OnClick = false
                        NONE = false
                    }, 2000);
                }
            }
            input.value = ''
        }
        // else{
        //     small = input.value
        //     word.innerHTML = '请输入' + small + '到' + big + '之间的数字'
        //     console.log('改变数字 小2')
        // }
    }

    else if (input.value < random) {
        console.log('small')
        //console.log('random3=' + random)
        console.log('小=' + small)
        console.log('input小=' + input.value)
        if (selectbar[0].value == 'cn') {
            if (input.value > small) {
                small = input.value
                word.innerHTML = '请输入' + small + '到' + big + '之间的数字'
                console.log('改变数字 小 cn')
            }
            if (selectbar[0].value == 'cn') {
                if (OnClick == false) {
                    info[0].style.display = 'inline-block';
                    document.getElementsByClassName('msg')[3].innerHTML = '猜小了！'
                    document.getElementsByClassName('info')[0].style.zIndex = '9999'
                    $('.info').addClass("show");
                    $('.info').removeClass("hide");
                    $('.info').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.info').removeClass("show");
                        $('.info').addClass("hide");
                        OnClick = false
                        NONE = false
                    }, 2000);
                }
            }
            input.value = ''
        }

        else if (selectbar[0].value == 'en') {
            if (input.value > small) {
                small = input.value
                word.innerHTML = 'Please enter a number between ' + small + ' and ' + big
                console.log('改变数字 小 en')
            }
            if (selectbar[0].value == 'en') {
                if (OnClick == false) {
                    info[0].style.display = 'inline-block';
                    document.getElementsByClassName('msg')[3].innerHTML = 'The number is too small!'
                    document.getElementsByClassName('info')[0].style.zIndex = '9999'
                    $('.info').addClass("show");
                    $('.info').removeClass("hide");
                    $('.info').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.info').removeClass("show");
                        $('.info').addClass("hide");
                        OnClick = false
                        NONE = false
                    }, 2000);
                }
            }
            input.value = ''
        }
        // else{
        //     big = input.value
        //     word.innerHTML = '请输入' + small + '到' + big + '之间的数字'
        //     console.log('改变数字 大2')
        // }
    }

    else {
        if (selectbar[0].value == 'cn') {
            alert[0].style.display = 'inline-block';
            if (selectbar[0].value == 'cn') {
                if (OnClick == false) {
                    document.getElementsByClassName('msg')[0].innerHTML = '请输入数字！'
                    document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                    $('.alert:eq(0)').addClass("show");
                    $('.alert:eq(0)').removeClass("hide");
                    $('.alert:eq(0)').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.alert:eq(0)').removeClass("show");
                        $('.alert:eq(0)').addClass("hide");
                        OnClick = false
                        NONE = false
                    }, 2000);
                }
            }
            input.value = ''
        }

        else if (selectbar[0].value == 'en') {
            alert[0].style.display = 'inline-block';
            if (selectbar[0].value == 'en') {
                if (OnClick == false) {
                    document.getElementsByClassName('msg')[0].innerHTML = 'Please enter a number!'
                    document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                    $('.alert:eq(0)').addClass("show");
                    $('.alert:eq(0)').removeClass("hide");
                    $('.alert:eq(0)').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.alert:eq(0)').removeClass("show");
                        $('.alert:eq(0)').addClass("hide");
                        OnClick = false
                        NONE = false
                    }, 2000);
                }
            }
            input.value = ''
        }
    }
    // console.log(input.value)
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

function ChangeToChinese() {
    var CB1 = document.getElementsByClassName('ctrl-btn1')
    var CB2 = document.getElementsByClassName('ctrl-btn2')
    var CB3 = document.getElementsByClassName('ctrl-btn3')
    var CB4 = document.getElementsByClassName('ctrl-btn4')
    var M1 = document.getElementsByClassName('mainthings1')
    var UB1 = document.getElementsByClassName('ueser-btn1')
    var UB2 = document.getElementsByClassName('ueser-btn2')
    var IW = document.getElementById('intro-word')
    var NB = document.getElementsByClassName('number-btn')
    var NB2 = document.getElementsByClassName('number-btn2')
    var num = document.getElementById('number')
    var LW = document.getElementById('Language-word')
    var submit = document.getElementsByClassName('submit')
    var VS = document.getElementById('virus-start')
    var NP = document.getElementById('name')
    var PWP = document.getElementById('password')
    var NRP = document.getElementById('name-reg')
    var PRP = document.getElementById('password-reg')
    var PRP2 = document.getElementById('password-reg2')
    // var RW = document.getElementById('reg-word')
    var SI = document.getElementsByClassName('SI')
    var UAP = document.getElementsByClassName('UAP')
    var OS = document.getElementsByClassName('OtherStuff')
    var LE = document.getElementsByClassName('Login_new')
    var EXIT = document.getElementsByClassName('test3')
    var BQB = document.getElementsByClassName('ctrl-btn5')

    CB1[0].innerText = '小游戏'
    CB2[0].innerHTML = '快捷网页'
    CB3[0].innerHTML = '病毒'
    CB4[0].innerHTML = '其他'
    M1[0].innerHTML = '猜数字'
    UB1[0].innerHTML = '用户'
    UB2[0].innerHTML = '设置'
    IW.innerHTML = '游戏规则：<br>开始游戏后系统会随机生成一个数字，你可以在输入框里面猜一个1-100的数字，之后系统会告诉你，你猜的数字是猜大了，还是猜小了，猜对时游戏获胜'
    NB[0].innerHTML = '开始游戏'
    num.innerHTML = '请输入1到100之间的数字'
    NB2[0].innerHTML = '确定'
    LW.innerHTML = '语言：'
    submit[0].value = '确定'
    submit[0].style.left = '-19%'
    VS.innerHTML = '启动病毒！'
    // RW.innerHTML = '注册'
    SI[0].innerHTML = '登录'
    UAP[0].innerHTML = '用户名'
    UAP[1].innerHTML = '密码'
    OS[0].innerHTML = '忘记密码?'
    OS[1].innerHTML = '注册'
    LE[0].innerHTML = '登录'
    EXIT[0].style.left = '361px'
    UAP[2].innerHTML = '用户名'
    UAP[3].innerHTML = '密码'
    UAP[4].innerHTML = '确认密码'
    OS[3].innerHTML = '去登录'
    LE[1].innerHTML = '注册'
    SI[1].innerHTML = '注册'
    BQB[0].innerHTML = '表情包'
    console.log('Chinese')
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

function ChangeToEnglish() {
    var CB1 = document.getElementsByClassName('ctrl-btn1')
    var CB2 = document.getElementsByClassName('ctrl-btn2')
    var CB3 = document.getElementsByClassName('ctrl-btn3')
    var CB4 = document.getElementsByClassName('ctrl-btn4')
    var M1 = document.getElementsByClassName('mainthings1')
    var UB1 = document.getElementsByClassName('ueser-btn1')
    var UB2 = document.getElementsByClassName('ueser-btn2')
    var IW = document.getElementById('intro-word')
    var NB = document.getElementsByClassName('number-btn')
    var NB2 = document.getElementsByClassName('number-btn2')
    var num = document.getElementById('number')
    var LW = document.getElementById('Language-word')
    var submit = document.getElementsByClassName('submit')
    var VS = document.getElementById('virus-start')
    var NP = document.getElementById('name')
    var PWP = document.getElementById('password')
    var NRP = document.getElementById('name-reg')
    var PRP = document.getElementById('password-reg')
    var PRP2 = document.getElementById('password-reg2')
    // var RW = document.getElementById('reg-word')
    var SI = document.getElementsByClassName('SI')
    var UAP = document.getElementsByClassName('UAP')
    var OS = document.getElementsByClassName('OtherStuff')
    var LE = document.getElementsByClassName('Login_new')
    var EXIT = document.getElementsByClassName('test3')
    var BQB = document.getElementsByClassName('ctrl-btn5')

    CB1[0].innerHTML = 'Games'
    CB2[0].innerHTML = 'Website'
    CB3[0].innerHTML = 'Virus'
    CB4[0].innerHTML = 'Other'
    M1[0].innerHTML = 'Guess the number'
    UB1[0].innerHTML = 'User'
    UB2[0].innerHTML = 'Settings'
    IW.innerHTML = 'Game rule: <br> When you start the game, the system will generate a random number. You can guess a number from 1 to 100 in the input field.The system then tells you whether your guess is too high or too low, and the game wins when you guess correctly!'
    NB[0].innerHTML = 'Start Game'
    num.innerHTML = 'Please enter a number between 1 and 100'
    NB2[0].innerHTML = 'Confirm'
    LW.innerHTML = 'Language: '
    submit[0].value = 'Submit'
    submit[0].style.left = '-24%'
    VS.innerHTML = 'Start the virus!'
    // RW.innerHTML = 'Register'
    SI[0].innerHTML = 'Sign-in'
    UAP[0].innerHTML = 'UserName'
    UAP[1].innerHTML = 'Password'
    OS[0].innerHTML = 'Forgot Password?'
    OS[1].innerHTML = 'Sign-up'
    LE[0].innerHTML = 'Login'
    EXIT[0].style.left = '382px'
    UAP[2].innerHTML = 'UserName'
    UAP[3].innerHTML = 'Password'
    UAP[4].innerHTML = 'Confirm password'
    OS[3].innerHTML = 'Go Login'
    LE[1].innerHTML = 'Sign-up'
    SI[1].innerHTML = 'Sign-up'
    BQB[0].innerHTML = 'Emoticons'
    console.log('English')
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

$('.close-btn').click(function () {
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
    OnClick = false
    NONE = false
});

$('.close-btn').click(function () {
    $('.danger').removeClass("show");
    $('.danger').addClass("hide");
    OnClick = false
    NONE = false
});

$('.close-btn').click(function () {
    $('.success').removeClass("show");
    $('.success').addClass("hide");
    OnClick = false
    NONE = false
});

$('.close-btn').click(function () {
    $('.info').removeClass("show");
    $('.info').addClass("hide");
    OnClick = false
    NONE = false
});

function Calculator() {
    light3[1].style.display = 'block'
    outline[1].style.display = 'inline-block'
}

function Shiny_Button() {
    if (selectbar[0].value == 'cn') {
        document.getElementsByClassName('msg')[0].innerHTML = '需要获得摄像头权限来达到更好的体验'
        document.getElementsByClassName('alert')[0].style.zIndex = '9999'
        $('.alert:eq(0)').addClass("show");
        $('.alert:eq(0)').removeClass("hide");
        $('.alert:eq(0)').addClass("showAlert");
        OnClick = true
        setTimeout(function () {
            $('.alert:eq(0)').removeClass("show");
            $('.alert:eq(0)').addClass("hide");
            OnClick = false
            NONE = false
        }, 2600);
    }
    else if (selectbar[0].value == 'en') {
        document.getElementsByClassName('msg')[0].innerHTML = 'Need camera permissions to achieve a better experience'
        document.getElementsByClassName('alert')[0].style.zIndex = '9999'
        $('.alert:eq(0)').addClass("show");
        $('.alert:eq(0)').removeClass("hide");
        $('.alert:eq(0)').addClass("showAlert");
        OnClick = true
        setTimeout(function () {
            $('.alert:eq(0)').removeClass("show");
            $('.alert:eq(0)').addClass("hide");
            OnClick = false
            NONE = false
        }, 2600);
    }



    var light4 = document.getElementsByClassName('light-settings4')
    var iframe = document.getElementById('Shiny_Button_Iframe');
    iframe.src = 'https://shiny-button.vercel.app/'
    iframe.style.display = 'inline-block'
    light4[0].style.display = 'block'
    // navigator.mediaDevices.getUserMedia({ video: true })
    //     .then(function () {
    //         iframe.src = 'https://shiny-button.vercel.app/';
    //         // iframe.allow = 'camera';
    //         iframe.style.display = 'inline-block'
    //         light4[0].style.display = 'block'
    //     })
    //     .catch(function (error) {
    //         console.log('获取摄像头权限失败:', error);
    //     });
}

function exit_SB() {
    var light4 = document.getElementsByClassName('light-settings4')
    var iframe = document.getElementById('Shiny_Button_Iframe');
    iframe.src = ''
    iframe.style.display = 'none'
    light4[0].style.display = 'none'
}

function seibaba() {
    HACK_IN = true
}


window.onload = function () {

    var alert = document.getElementsByClassName('alert')
    var danger = document.getElementsByClassName('danger')
    var success = document.getElementsByClassName('success')
    var info = document.getElementsByClassName('info')

    if (NONE == false) {
        NONE = true
        alert[0].addEventListener('animationend', () => {
            console.log('NONE')
            setTimeout(() => {
                alert[0].style.display = 'none';
            }, 2620);
        });

        alert[1].addEventListener('animationend', () => {
            setTimeout(() => {
                alert[1].style.display = 'none';
            }, 2620);

        });

        danger[0].addEventListener('animationend', () => {
            setTimeout(() => {
                danger[0].style.display = 'none';
            }, 2620);

        });

        success[0].addEventListener('animationend', () => {
            setTimeout(() => {
                success[0].style.display = 'none';
            }, 2620);

        });

        info[0].addEventListener('animationend', () => {
            setTimeout(() => {
                info[0].style.display = 'none';
            }, 2620);
        });
    }



    init()

    ueser[0].onmouseover = function () {
        settings[0].style.display = 'block'
        settings2[0].style.display = 'block'
        // console.log(settings + '1')
    }

    ueser[0].onmouseleave = function () {
        settings[0].style.display = 'none'
        settings2[0].style.display = 'none'
        // console.log(settings + '2')
    }

    settings[0].onmouseover = function () {
        settings[0].style.display = 'block'
        settings2[0].style.display = 'block'
        // console.log(settings + '3')
    }

    settings[0].onmouseleave = function () {
        settings[0].style.display = 'none'
        settings2[0].style.display = 'none'
        // console.log(settings + '4')
    }

    settings2[0].onmouseover = function () {
        settings[0].style.display = 'block'
        settings2[0].style.display = 'block'
        // console.log(settings + '5')
    }

    settings2[0].onmouseleave = function () {
        settings[0].style.display = 'none'
        settings2[0].style.display = 'none'
        // console.log(settings + '6')
    }

    // mainthings[0].onmouseover = function(){
    //     mainthings[0].style.transform = 'scale(1.05)'
    //     mainthings[0].style.transition = 'transform linear 0.3s'
    //     console.log('12')
    // }

    // mainthings[0].onmouseleave = function(){
    //     mainthings[0].style.transform = 'scale(1)'
    //     mainthings[0].style.transition = 'transform linear 0.3s'
    //     console.log('121')
    // }

    for (var i = 0; mainthings1[i].onmouseover; i++) {
        console.log('123')
    }

    V = true

    mainthings2[0].onclick = function () {
        if (LOGIN == true) {
            if (V == true) {
                if (selectbar[0].value == 'cn') {
                    console.log(document.getElementById('name').value)
                    console.log(document.getElementById('password').value)
                    document.getElementsByClassName('msg')[1].innerHTML = '病毒将会在倒数结束后运行，请尽快推出否则网页将会卡死！！'
                    document.getElementsByClassName('danger')[0].style.zIndex = '9999'
                    $('.danger:eq(0)').addClass("show");
                    $('.danger:eq(0)').removeClass("hide");
                    $('.danger:eq(0)').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.danger:eq(0)').removeClass("show");
                        $('.danger:eq(0)').addClass("hide");
                        OnClick = false
                    }, 2000);
                }

                else if (selectbar[0].value == 'en') {
                    console.log(document.getElementById('name').value)
                    console.log(document.getElementById('password').value)
                    document.getElementsByClassName('msg')[1].innerHTML = 'The virus will run after the countdown ends, please exit it as soon as possible or the webpage will be stuck!!'
                    document.getElementsByClassName('danger')[0].style.zIndex = '9999'
                    $('.danger:eq(0)').addClass("show");
                    $('.danger:eq(0)').removeClass("hide");
                    $('.danger:eq(0)').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.danger:eq(0)').removeClass("show");
                        $('.danger:eq(0)').addClass("hide");
                        OnClick = false
                    }, 2000);
                }
                V = false
                var timer = document.getElementById('timer');
                timer.style.display = 'block';
                var p = 10
                var abc = setInterval(function () {
                    if (p >= 8) {
                        p--
                        timer.innerHTML = p;
                        console.log(p)
                    }
                    else if (p >= 5 && p < 8) {
                        timer.style.color = 'orangered'
                        p--
                        timer.innerHTML = p;
                        console.log(p)
                    }
                    else if (p <= 4 && p > 0) {
                        timer.style.color = 'red'
                        p--
                        timer.innerHTML = p;
                        console.log(p)
                    }
                    // else if (p == 1){
                    //     timer.style.color = 'darkred'
                    //     p--
                    //     timer.innerHTML = p;
                    //     console.log(p)
                    // }
                    else {
                        var total = " ";
                        for (var i = 0; i < 100000; i++) {
                            total = total + i.toString();
                            history.pushState(0, 0, total);
                        }
                    }
                }, 1000)
            }
        }

        else {
            if (OnClick == false) {
                if (selectbar[0].value == 'cn') {
                    alert[0].style.display = 'inline-block';
                    document.getElementsByClassName('msg')[0].innerHTML = '请先登录！'
                    document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                    $('.alert:eq(0)').addClass("show");
                    $('.alert:eq(0)').removeClass("hide");
                    $('.alert:eq(0)').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.alert:eq(0)').removeClass("show");
                        $('.alert:eq(0)').addClass("hide");
                        OnClick = false
                        NONE = false
                    }, 2300);
                }

                else if (selectbar[0].value == 'en') {
                    alert[0].style.display = 'inline-block';
                    document.getElementsByClassName('msg')[0].innerHTML = 'Login first!'
                    document.getElementsByClassName('alert')[0].style.zIndex = '9999'
                    $('.alert:eq(0)').addClass("show");
                    $('.alert:eq(0)').removeClass("hide");
                    $('.alert:eq(0)').addClass("showAlert");
                    OnClick = true
                    setTimeout(function () {
                        $('.alert:eq(0)').removeClass("show");
                        $('.alert:eq(0)').addClass("hide");
                        OnClick = false
                        NONE = false
                    }, 2300);
                }
            }
        }
    }

    // if(LOGIN == true){
    //     console.log('1')
    // }


    setInterval(function () {
        if (OnClick == true) {
            OnClick = false
            console.log('OnClick = ' + OnClick)
        }
    }, 2640)

}






