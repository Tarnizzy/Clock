document.addEventListener('DOMContentLoaded', function(){

    function clock(){

        let date = new Date()
    
    
        let Month = date.getMonth()
    
        let Day = date.getDay()
    
        let Hour = date.getHours()
    
        let Min = date.getMinutes()
    
    
    
        let Sec = date.getSeconds()
    
    
        document.querySelector('h1').innerHTML = Hour+":"+Min+":"+Sec
    
        }
    
    
    clock()
    
    setInterval(clock, 1000)


})

















