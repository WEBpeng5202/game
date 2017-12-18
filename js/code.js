class Code{
    constructor(length,speed){
        this.char=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        this.length=length;
        this.current=[];
        this.speed=speed;
    }
    start(){
        this.getChars(this.length);
        this.drop();
    }
    getChars(length){
        for (let i=0;i<length;i++){
            this.getChar();
        }
    }
    randomBgColor(){
        let r=Math.floor(Math.random()*255);
        let g=Math.floor(Math.random()*255);
        let b=Math.floor(Math.random()*255);
        let a=Math.random();
        return `rgb(${r},${g},${b})`;
    }
    /*产生字符*/
    getChar(){
        let num=Math.floor(Math.random()*this.char.length);
        let divs=document.createElement('div');
        let tops=Math.random()*100;
        let lefts=Math.random()*(window.innerWidth-400)+200;
        divs.style.cssText=`width:50px;height:50px;background:${this.randomBgColor()};color:${this.randomBgColor()};border-radius:50%;font-size:20px;position:absolute;top:${tops}px;left:${lefts}px;line-height:50px;text-align:center;`;
        divs.innerText=this.char[num];
        document.body.appendChild(divs);
        this.current.push(divs);
    }
    drop(){
        let that=this;
        setInterval(function () {
            for (let i=0;i<that.current.length;i++){
                let tops=that.current[i].offsetTop+that.speed;
                that.current[i].style.top=tops+'px';
                if (tops>=600){
                    document.body.removeChild(that.current[i]);
                    that.current.splice(i,1);
                    that.getChar();
                }
            }
        },5)
    }
}