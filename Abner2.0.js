var num = false
var tb = false
var namereg = 'Abner'
var passwordreg = 'Abner666'



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




function empty2(){
    if (document.getElementById('name').value.length==0){
        alert('请输入账号!');
        document.getElementById('name').focus();
        return false;
    }


    if (document.getElementById('password').value.length==0){
        alert('请输入密码!');
        document.getElementById('password').focus();
        return false;
    }
    
    if ((document.getElementById('name').value == 'Abner' || document.getElementById('name').value == namereg.value) && (document.getElementById('password').value == 'Abner666' || document.getElementById('password').value == passwordreg.value)){
    document.getElementById('ueser-name').innerHTML = document.getElementById('name').value
    alert('登录成功')
    num = true}

    else{
        alert('用户名或密码错误！')
        console.log(document.getElementById('name').value)
        console.log(document.getElementById('password').value)
    }   
}

function reg1(){
    var reg1 = document.getElementById('button-reg')
    var name = document.getElementById('name-reg')
    var password = document.getElementById('password-reg')
    var settings = document.getElementsByClassName('reg')

    if (document.getElementById('name-reg').value.length==0){
        alert('请输入账号!');
        document.getElementById('name-reg').focus();
        return false;
    }

    if (document.getElementById('password-reg').value.length==0){
        alert('请输入密码!');
        document.getElementById('password-reg').focus();
        return false;
    }

    if (document.getElementById('password-reg2').value.length==0){
        alert('你的 ‘确认密码’ 未填写');
        document.getElementById('password-reg').focus();
        return false;
    }

    if (document.getElementById('password-reg2').value != document.getElementById('password-reg').value){
        alert('你第二次输入的密码与第一个密码不相等!')
        document.getElementById('password-reg').focus();
        return false;
    }

    else{
        console.log(name.value)
        console.log(password.value)
        namereg = name
        passwordreg = password
        console.log(namereg.value)
        console.log(passwordreg.value)
        alert('注册成功!')
    }
}

function btn1(){
    light[0].style.display = 'block'
}

function btn2(){
    light2[0].style.display = 'block'
}

function exit(){
    light[0].style.display = 'none'
    light2[0].style.display = 'none'
    document.getElementById('name').value = ''
    document.getElementById('password').value = ''
    document.getElementById('name-reg').value = ''
    document.getElementById('password-reg').value = ''
    document.getElementById('password-reg2').value = ''
    regbtn[0].style.backgroundColor = 'gray'
    ueserbtn[0].style.backgroundColor = 'white'
    login1[0].style.display = 'inline-block'
    login2[0].style.display = 'none'
}

function login(){
    regbtn[0].style.backgroundColor = 'gray'
    ueserbtn[0].style.backgroundColor = 'white'
    login1[0].style.display = 'inline-block'
    login2[0].style.display = 'none'
}

function reg(){
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


function games1(){
    games[0].style.display = 'inline-block'
    web[0].style.display = 'none'
    virus[0].style.display = 'none'
    other[0].style.display = 'none'
    console.log('games')
}

function web1(){
    games[0].style.display = 'none'
    web[0].style.display = 'inline-block'
    virus[0].style.display = 'none'
    other[0].style.display = 'none'
    console.log('web')
}

function virus1(){
    games[0].style.display = 'none'
    web[0].style.display = 'none'
    virus[0].style.display = 'inline-block'
    other[0].style.display = 'none'
    console.log('virus')
}

function other1(){
    games[0].style.display = 'none'
    web[0].style.display = 'none'
    virus[0].style.display = 'none'
    other[0].style.display = 'inline-block'
    console.log('other')
}

var random = null
var selectbar = document.getElementsByClassName('Language')
function submit(){
    var CB1 = document.getElementsByClassName('ctrl-btn1')
    var CB2 = document.getElementsByClassName('ctrl-btn2')
    var CB3 = document.getElementsByClassName('ctrl-btn3')
    var CB4 = document.getElementsByClassName('ctrl-btn4')
    var M1 = document.getElementsByClassName('mainthings1')
    var UB1 = document.getElementsByClassName('ueser-btn1')
    var UB2 = document.getElementsByClassName('ueser-btn2')
    var IW = document.getElementById('intro-word')
    var NB = document.getElementsByClassName('number-btn')
    var num = document.getElementById('number')
    var LW = document.getElementById('Language-word')
    var submit = document.getElementsByClassName('submit')
    var VS = document.getElementById('virus-start')
    var BW = document.getElementsByClassName('btn-word')
    var L2 = document.getElementsByClassName('login2')
    var na = document.getElementsByClassName('na')
    var NP = document.getElementById('name')
    var PWP = document.getElementById('password')
    var LW1 = document.getElementById('login-word')
    var NRP = document.getElementById('name-reg')
    var PRP = document.getElementById('password-reg')
    var PRP2 = document.getElementById('password-reg2')
    var RW = document.getElementById('reg-word')
    //console.log(selectbar[0].value)
    if(selectbar[0].value == 'cn'){
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
        NB[1].innerHTML = '确定'
        LW.innerHTML = '语言：'
        submit[0].value = '确定'
        VS.innerHTML = '启动病毒！'
        BW[0].innerHTML = '登录'
        BW[1].innerHTML = '注册'
        L2[0].innerHTML = '登录'
        na[0].innerHTML = '账号:'
        NP.setAttribute('placeholder','请输入账号')
        na[1].innerHTML = '密码:'
        PWP.setAttribute('placeholder','请输入密码')
        LW1.innerHTML = '登录'
        L2[1].innerHTML = '注册'
        na[2].innerHTML = '账号:'
        NRP.setAttribute('placeholder','请输入账号')
        na[3].innerHTML = '密码:'
        PRP.setAttribute('placeholder','请输入密码')
        na[4].innerHTML = '确认密码:'
        PRP2.setAttribute('placeholder','请再次输入密码')
        RW.innerHTML = '注册'
        console.log('Chinese')
    }

    else if(selectbar[0].value == 'en'){
        CB1[0].innerHTML = 'Games'
        CB2[0].innerHTML = 'Website'
        CB3[0].innerHTML = 'Virus'
        CB4[0].innerHTML = 'Other'
        M1[0].innerHTML = 'Guess the number'
        UB1[0].innerHTML = 'User'
        UB2[0].innerHTML = 'Setting'
        IW.innerHTML = 'Game rule: <br> When you start the game, the system will generate a random number. You can guess a number from 1 to 100 in the input field.The system then tells you whether your guess is too high or too low, and the game is won'
        NB[0].innerHTML = 'Start Game'
        num.innerHTML = 'Please enter a number between 1 and 100'
        NB[1].innerHTML = 'Confirm'
        LW.innerHTML = 'Language: '
        submit[0].value = 'Submit'
        VS.innerHTML = 'Start the virus!'
        BW[0].innerHTML = 'Login'
        BW[1].innerHTML = 'Register'
        L2[0].innerHTML = 'Login'
        na[0].innerHTML = 'Account:'
        NP.setAttribute('placeholder','Please enter account name')
        na[1].innerHTML = 'Password:'
        PWP.setAttribute('placeholder','Please enter your password')
        LW1.innerHTML = 'Login'
        L2[1].innerHTML = 'Register'
        na[2].innerHTML = 'Account:'
        NRP.setAttribute('placeholder','Please enter account name')
        na[3].innerHTML = 'Password:'
        PRP.setAttribute('placeholder','Please enter your password')
        na[4].innerHTML = 'Confirm password:'
        na[4].style.fontSize = '18px'
        PRP2.setAttribute('placeholder','Please confirm your password')
        RW.innerHTML = 'Register'
        console.log('English')
    }
}

function start_game(){
    var before_start = document.getElementById('before-start')
    var intro = document.getElementById('intro')
    random = null
    before_start.style.display = 'inline-block'
    intro.style.display = 'none'
}

function Games1(){
    var before_start = document.getElementById('before-start')
    var intro = document.getElementById('intro')
    light3[0].style.display = 'inline-block'
    outline[0].style.display = 'inline-block'
    intro.style.display = 'inline-block'
    before_start.style.display = 'none'
}

function exit_game1(){
    var word = document.getElementById('number')
    var input = document.getElementById('input')
    outline[0].style.display = 'none'
    light3[0].style.display = 'none'
    input.value = ''
    word.innerHTML = '请输入1到100之间的数字'
    big = 100
    small = 1
}

var big = 100
var small = 1
function button1(){
    var word = document.getElementById('number')
    if(random == null){
        random = Math.floor(Math.random()*100+1)
        console.log('random1=' + random)
    }
    var input = document.getElementById('input')
    console.log('input='+input.value)

    console.log(parseInt(input.value) == parseInt(random))
    if(input.value == random){
        if(selectbar[0].value == 'cn'){
            alert('猜对了!')
        }

        else if(selectbar[0].value == 'en'){
            alert('Bingo!')
        }
    }
    else if(input.value > random){
        console.log('big')
        //console.log('random2=' + random)
        console.log('大=' + small)
        console.log('input大=' + input.value)
        // var bignum = input.value
        // word.innerHTML = '请输入' + smallnum + '到' + bignum + '之间的数字'
        if(selectbar[0].value == 'cn'){
            if(input.value < big){
                big = input.value
                word.innerHTML = '请输入' + small + '到' + big + '之间的数字'
                console.log('改变数字 大 cn')
            }
            alert('猜大了')
        }

        else if(selectbar[0].value == 'en'){
            if(input.value < big){
                big = input.value
                word.innerHTML = 'Please enter a number between' + small + 'and' + big
                console.log('改变数字 大 en')
            }
            alert('The number is too big')
        }
        // else{
        //     small = input.value
        //     word.innerHTML = '请输入' + small + '到' + big + '之间的数字'
        //     console.log('改变数字 小2')
        // }
    }

    else if(input.value < random){
        console.log('small')
        //console.log('random3=' + random)
        console.log('小=' + small)
        console.log('input小=' + input.value)
        if(selectbar[0].value == 'cn'){
            if(input.value > small){
                small = input.value
                word.innerHTML = '请输入' + small + '到' + big + '之间的数字'
                console.log('改变数字 小 cn')
            }
            alert('猜小了')
        }

        else if(selectbar[0].value == 'en'){
            if(input.value > small){
                small = input.value
                word.innerHTML = 'Please enter a number between' + small + 'and' + big
                console.log('改变数字 小 en')
            }
            alert('The number is too small')
        }
        // else{
        //     big = input.value
        //     word.innerHTML = '请输入' + small + '到' + big + '之间的数字'
        //     console.log('改变数字 大2')
        // }
    }

    else{
        if(selectbar[0].value == 'cn'){
            alert('请输入数字')
        }

        else if(selectbar[0].value == 'en'){
            alert('Please enter a number')
        }
    }
    // console.log(input.value)
}



window.onload = function(){

    ueser[0].onmouseover = function(){
        settings[0].style.display = 'block'
        settings2[0].style.display = 'block'
        // console.log(settings + '1')
    }

    ueser[0].onmouseleave = function(){
        settings[0].style.display = 'none'
        settings2[0].style.display = 'none'
        // console.log(settings + '2')
    }

    settings[0].onmouseover = function(){
        settings[0].style.display = 'block'
        settings2[0].style.display = 'block'
        // console.log(settings + '3')
    }

    settings[0].onmouseleave = function(){
        settings[0].style.display = 'none'
        settings2[0].style.display = 'none'
        // console.log(settings + '4')
    }

    settings2[0].onmouseover = function(){
        settings[0].style.display = 'block'
        settings2[0].style.display = 'block'
        // console.log(settings + '5')
    }

    settings2[0].onmouseleave = function(){
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

    for (var i = 0;mainthings1[i].onmouseover;i++){
        console.log('123')
    }

    mainthings2[0].onclick = function(){
        if (num == true){
            alert('病毒将会在倒数结束后运行，请尽快推出否则网页将会卡死！！')
            var timer = document.getElementById('timer');
            timer.style.display = 'block';
            var p = 10
            var abc = setInterval(function(){
                if (p >= 8){
                    p--
                    timer.innerHTML = p;
                    console.log(p)
                }
                else if (p >= 5 && p < 8){
                    timer.style.color = 'orangered'
                    p--
                    timer.innerHTML = p;
                    console.log(p)
                }
                else if (p <= 4 && p > 0){
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
                else{
                    var total = " ";
                    for (var i = 0; i < 100000; i++)
                    {
                        total = total + i.toString();
                        history.pushState(0,0,total);
                    }
                }
            },1000)
        }
        else{
            alert('请先登录！')
        }
    }


    var hide1 = document.getElementById('hide1')
    var hide2 = document.getElementById('hide2')
    var submit = document.getElementsByClassName('submit')
    



    // submit[0].onclick = function(){
    //     var scan = $("input[name='hide1']:checked").val();
    //     alert("选中的radio的值是：" + scan);
    // }
}

