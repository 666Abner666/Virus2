var num = false
var tb = false
var namereg = 'Abner'
var passwordreg = 'Abner666'



var ueser = document.getElementsByClassName('ueser')
var settings = document.getElementsByClassName('settings')
var settings2 = document.getElementsByClassName('settings2')
var light = document.getElementsByClassName('light-settings')
var light2 = document.getElementsByClassName('light-settings2')
var ueserbtn = document.getElementsByClassName('btn1')
var regbtn = document.getElementsByClassName('btn2')
var login1 = document.getElementsByClassName('enterbox')
var login2 = document.getElementsByClassName('reg')
var mainthings = document.getElementsByClassName('mainthings')



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

    for (var i = 0;mainthings[i].onmouseover;i++){
        console.log('123')
    }



}

