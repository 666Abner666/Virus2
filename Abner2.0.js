var num = false
var tb = false
var namereg = 'Abner'
var passwordreg = 'Abner666'
var LOGIN = false
var LANGUGE = navigator.language
var DL = null
console.log(LANGUGE)

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
// selectbar[0].value = null 拿不到

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


function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    const responsePayload = decodeJwtResponse(response.credential);

    console.log("ID: " + responsePayload.sub);
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
    var expires = new Date();
    expires.setTime(expires.getTime() + (30 * 60 * 1000)); // 令牌将在 30 分钟后过期
    document.cookie = 'access_token=' + requestAccessToken() + '; expires=' + expires.toUTCString() + '; path=/';
}

// 用户登出后的回调函数
function onUserSignedOut() {
    // 删除保存在 Cookie 中的访问令牌
    document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    LOGIN = false
    document.getElementsByClassName('ueser-name')[0].innerHTML = '未登录';
    document.getElementsByClassName('ueser-name')[1].innerHTML = '未登录';
    document.getElementById('img').src = "../img/Black_colour.jpg";
    document.getElementById('img2').src = "../img/Black_colour.jpg";
}   

function decodeJwtResponse(response) {
    const encodedPayload = response.split('.')[1];
    const base64 = encodedPayload.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = atob(base64);
    const jwtPayload = JSON.parse(decodedPayload);
    return jwtPayload;
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */


function empty2() {
    if (document.getElementById('name').value.length == 0) {
        if (selectbar[0].value == 'cn') {
            alert('请输入账号!');
            document.getElementById('name').focus();
            return false;
        }

        else if (selectbar[0].value == 'en') {
            alert('Please enter your ueser name!');
            document.getElementById('name').focus();
            return false;
        }
    }


    if (document.getElementById('password').value.length == 0) {
        if (selectbar[0].value == 'cn') {
            alert('请输入密码!');
            document.getElementById('password').focus();
            return false;
        }

        else if (selectbar[0].value == 'en') {
            alert('Please enter your password!');
            document.getElementById('password').focus();
            return false;
        }
    }

    if ((document.getElementById('name').value == 'Abner' || document.getElementById('name').value == namereg.value) && (document.getElementById('password').value == 'Abner666' || document.getElementById('password').value == passwordreg.value)) {
        document.getElementsByClassName('ueser-name')[0].innerHTML = document.getElementById('name').value
        document.getElementsByClassName('ueser-name')[1].innerHTML = document.getElementById('name').value
        if (selectbar[0].value == 'cn') {
            alert('登录成功!')
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
            alert('Login successfully!')
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

    else {
        if (selectbar[0].value == 'cn') {
            console.log(document.getElementById('name').value)
            console.log(document.getElementById('password').value)
            alert('用户名或密码错误！')
        }

        else if (selectbar[0].value == 'en') {
            console.log(document.getElementById('name').value)
            console.log(document.getElementById('password').value)
            alert('ERROR Incorrect username or password!')
        }
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



function reg1() {
    var reg1 = document.getElementById('button-reg')
    var name = document.getElementById('name-reg')
    var password = document.getElementById('password-reg')
    var settings = document.getElementsByClassName('reg')

    if (document.getElementById('name-reg').value.length == 0) {
        if (selectbar[0].value == 'cn') {
            alert('请输入账号!');
            document.getElementById('name-reg').focus();
            return false;
        }

        else if (selectbar[0].value == 'en') {
            alert('Please enter your ueser name!');
            document.getElementById('name-reg').focus();
            return false;
        }
    }

    if (document.getElementById('password-reg').value.length == 0) {
        if (selectbar[0].value == 'cn') {
            alert('请输入密码!');
            document.getElementById('password-reg').focus();
            return false;
        }

        else if (selectbar[0].value == 'en') {
            alert('Please enter your password!');
            document.getElementById('password-reg').focus();
            return false;
        }
    }

    if (document.getElementById('password-reg2').value.length == 0) {
        if (selectbar[0].value == 'cn') {
            alert('你的 ‘确认密码’ 未填写');
            document.getElementById('password-reg2').focus();
            return false;
        }

        else if (selectbar[0].value == 'en') {
            alert('Your ‘Confirmation password’ is not filled in');
            document.getElementById('password-reg2').focus();
            return false;
        }
    }

    if (document.getElementById('password-reg2').value != document.getElementById('password-reg').value) {
        if (selectbar[0].value == 'cn') {
            alert('你第二次输入的密码与第一个密码不相符!')
            return false;
        }

        else if (selectbar[0].value == 'en') {
            alert('The password you entered for the second time does not match the first one!')
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
        if (selectbar[0].value == 'cn') {
            alert('注册成功! 已为您自动登录!')
        }

        else if (selectbar[0].value == 'en') {
            alert('Registered successfully! You have been automatically logged in!')
        }
    }

    else {
        if (selectbar[0].value == 'cn') {
            alert('名字和密码的内容需要包含：小写字母，大写字母和数字，且不能小于4和大于12个字符')
            console.log('名字=' + document.getElementById('name-reg').value)
            console.log('密码=' + document.getElementById('password-reg').value)
            return false
        }

        else if (selectbar[0].value == 'en') {
            alert('The name and password must contain lowercase letters, uppercase letters, and numbers, also cannot be less than 4 characters or more than 12 characters')
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


function games1() {
    games[0].style.display = 'inline-block'
    web[0].style.display = 'none'
    virus[0].style.display = 'none'
    other[0].style.display = 'none'
    console.log('games')
}

function web1() {
    games[0].style.display = 'none'
    web[0].style.display = 'inline-block'
    virus[0].style.display = 'none'
    other[0].style.display = 'none'
    console.log('web')
}

function virus1() {
    games[0].style.display = 'none'
    web[0].style.display = 'none'
    virus[0].style.display = 'inline-block'
    other[0].style.display = 'none'
    console.log('virus')
}

function other1() {
    games[0].style.display = 'none'
    web[0].style.display = 'none'
    virus[0].style.display = 'none'
    other[0].style.display = 'inline-block'
    console.log('other')
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
        //console.log(selectbar[0].value)
        if (selectbar[0].value == 'cn') {
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
            console.log('Chinese')
        }

        else if (selectbar[0].value == 'en') {
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
            SI[0].innerHTML = 'Sign in'
            UAP[0].innerHTML = 'UserName'
            UAP[1].innerHTML = 'Password'
            OS[0].innerHTML = 'Forgot Password?'
            OS[1].innerHTML = 'Signup'
            LE[0].innerHTML = 'Login'
            EXIT[0].style.left = '382px'
            UAP[2].innerHTML = 'UserName'
            UAP[3].innerHTML = 'Password'
            UAP[4].innerHTML = 'Confirm password'
            OS[3].innerHTML = 'Go Login'
            LE[1].innerHTML = 'Signup'
            SI[1].innerHTML = 'Signup'
            console.log('English')
        }
        clearTimeout(timer)
    })
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

function start_game() {
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
            alert('猜对了!')
        }

        else if (selectbar[0].value == 'en') {
            alert('Bingo!')
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
            alert('猜大了')
            input.value = ''
        }

        else if (selectbar[0].value == 'en') {
            if (input.value < big) {
                big = input.value
                word.innerHTML = 'Please enter a number between ' + small + ' and ' + big
                console.log('改变数字 大 en')
            }
            alert('The number is too big')
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
            alert('猜小了')
            input.value = ''
        }

        else if (selectbar[0].value == 'en') {
            if (input.value > small) {
                small = input.value
                word.innerHTML = 'Please enter a number between ' + small + ' and ' + big
                console.log('改变数字 小 en')
            }
            alert('The number is too small')
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
            alert('请输入数字')
            input.value = ''
        }

        else if (selectbar[0].value == 'en') {
            alert('Please enter a number')
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
    SI[0].innerHTML = 'Sign in'
    UAP[0].innerHTML = 'UserName'
    UAP[1].innerHTML = 'Password'
    OS[0].innerHTML = 'Forgot Password?'
    OS[1].innerHTML = 'Signup'
    LE[0].innerHTML = 'Login'
    EXIT[0].style.left = '382px'
    UAP[2].innerHTML = 'UserName'
    UAP[3].innerHTML = 'Password'
    UAP[4].innerHTML = 'Confirm password'
    OS[3].innerHTML = 'Go Login'
    LE[1].innerHTML = 'Signup'
    SI[1].innerHTML = 'Signup'
    console.log('English')
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

function Calculator() {
    light3[1].style.display = 'block'
    outline[1].style.display = 'inline-block'
}





window.onload = function () {

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

    mainthings2[0].onclick = function () {
        if (LOGIN == true) {
            if (selectbar[0].value == 'cn') {
                alert('病毒将会在倒数结束后运行，请尽快推出否则网页将会卡死！！')
            }

            else if (selectbar[0].value == 'en') {
                alert('The virus will run after the countdown ends, please exit it as soon as possible or the webpage will be stuck! !')
            }
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
        else {
            if (selectbar[0].value == 'cn') {
                alert('请先登录！')
            }

            else if (selectbar[0].value == 'en') {
                alert('Login first!')
            }
        }
    }

    // if(LOGIN == true){
    //     console.log('1')
    // }

}




