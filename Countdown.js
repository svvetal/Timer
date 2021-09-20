function countdown(){
    var now = new Date() ;
    var eventDate = new Date(2021 , 11 , 25) ;

    var CurrentTime = now.getTime() ;
    var eventTime = eventDate.getTime();

    var remTime = eventTime - CurrentTime ;

    var sec = Math.floor(remTime / 1000) ;
    var min = Math.floor(sec / 60) ;
    var hr = Math.floor(min / 60) ;
    var dy = Math.floor(hr / 24) ;

    hr %= 24 ;
    min %= 60 ;
    sec %= 60 ;

    hr = (hr < 10) ? "0" + hr : hr ;
    min = (min < 10) ? "0" + min : min ;
    sec = (sec < 10) ? "0" + sec : sec ;

    document.getElementById("day").innerText = dy ;
    document.getElementById("hour").innerText = hr ;
    document.getElementById("minute").innerText = min ;
    document.getElementById("second").innerText = sec ;

    
}
setInterval(function(){
    countdown();
},1000)
