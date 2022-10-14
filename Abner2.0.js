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

function submit(){
    var selectbar = document.getElementsByClassName('Language')
    var CB1 = document.getElementsByClassName('ctrl-btn1')
    var CB2 = document.getElementsByClassName('ctrl-btn2')
    var CB3 = document.getElementsByClassName('ctrl-btn3')
    var CB4 = document.getElementsByClassName('ctrl-btn4')
    var M1 = document.getElementsByClassName('mainthings1')
    var UB1 = document.getElementsByClassName('ueser-btn1')
    //console.log(selectbar[0].value)
    if(selectbar[0].value == 'en'){
        CB1[0].innerHTML = 'Games'
        CB2[0].innerHTML = 'Website'
        CB3[0].innerHTML = 'Virus'
        CB4[0].innerHTML = 'Other'
        M1[0].innerHTML = 'Gess the number'
        UB1[0].innerHTML = 'Ueser'
        console.log('English')
    }
    else if(selectbar[0].value == 'cn'){
        CB1[0].innerHTML = '小游戏'
        CB2[0].innerHTML = '快捷网页'
        CB3[0].innerHTML = '病毒'
        CB4[0].innerHTML = '其他'
        M1[0].innerHTML = '猜数字'
        console.log('Chinese')
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
}

var small = 1
var big = 100
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
        alert('猜对了!')
    }
    else if(input.value > random){
        console.log('big')
        //console.log('random2=' + random)
        console.log('大=' + small)
        console.log('input大=' + input.value)
        // var bignum = input.value
        // word.innerHTML = '请输入' + smallnum + '到' + bignum + '之间的数字'
        if(input.value < big){
            big = input.value
            word.innerHTML = '请输入' + small + '到' + big + '之间的数字'
            console.log('改变数字 大')
        }
        // else{
        //     small = input.value
        //     word.innerHTML = '请输入' + small + '到' + big + '之间的数字'
        //     console.log('改变数字 小2')
        // }
        alert('猜大了')
    }
    else if(input.value < random){
        console.log('small')
        //console.log('random3=' + random)
        console.log('小=' + small)
        console.log('input小=' + input.value)
        if(input.value > small){
            small = input.value
            word.innerHTML = '请输入' + small + '到' + big + '之间的数字'
            console.log('改变数字 小')
        }
        // else{
        //     big = input.value
        //     word.innerHTML = '请输入' + small + '到' + big + '之间的数字'
        //     console.log('改变数字 大2')
        // }
        alert('猜小了')
    }
    else{
        alert('请输入数字')
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


