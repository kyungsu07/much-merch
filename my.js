
function joinform_check() {
    let uid = document.getElementById('uid')
    let pwd = document.getElementById('pwd')
    let repwd = document.getElementById('repwd')
    let mobile1 = document.getElementById('moblie1')
    if(uid.value == ""){
        alert('아이디 입력하시오')
        uid.focus()
        return false
    }

    if(pwd.value == ""){
        alert('패스워드 입력하시오')
        uid.focus()
        return false
    }
    let pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if(!pwdCheck.test(pwd.value)){
        alert('형식에 맞게 입력바람')
        pwd.focus()
        return false
    }
    if(repwd.value !== pwd.value){
        alert('비밀번호 일치하지 않음')
        repwd.focus()
        return false
    }

    let reg = /^[0-9]+/g
    if(!reg.test(mobile1.value)) {
        alert('숫자만 입력바람')
        mobile1.focus()
        return false
    }

}


function id_check(){
    window.open('','','width=300, height=100, left=300, top=100')
}

function chang_email() {
    let email_add = document.getElementById('email_add')
    let email_sel = document.getElementById('email_sel')

    let idx = email_sel.options.selectedIndex;
    let val = email_sel.options[idx].value
    email_add.value = val
}

$(function(){
    $('.ham').click(function(){
        $(this).hide()
        $('.close').show()
        $('.ham_menu').fadeIn()
    })
    $('.close').click(function(){
        $(this).hide()
        $('.ham').show()
        $('.ham_menu').fadeOut()
    })

    $('.mobile_top').click(function(){
        $(this).hide()
        $('.close').show()
        $('.m_top_menu').fadeIn()
    })
    $('.close').click(function(){
        $(this).hide()
        $('.mobile_top').show()
        $('.m_top_menu').fadeOut()
    })
})