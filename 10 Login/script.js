var validUsername = 'test';
var validPassword = '1234';

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "" || password === "") {
      alert('아이디와 비밀번호를 입력해주세요.');
    } else if (username === validUsername && password === validPassword) {
        alert('로그인 성공!');
    } else {
        alert('ID 혹은 비밀번호가 잘못되었습니다.');
    }
}
