window.onload=function () {
    let code=new Code(1,Math.floor(Math.random()+1));
    code.start();
    document.onclick=function () {
        code.Time();
    }
};