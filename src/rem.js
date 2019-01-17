;(function (win) { 
    function responsive() {
        let screenWidth = win.innerWidth;
        if (screenWidth >= 750) {
            screenWidth = 750
        } else if (screenWidth <= 320) {
            screenWidth = 320
        }
        document.documentElement.style.fontSize = screenWidth / 7.5 + 'px';
    }
    responsive();
    win.addEventListener('resize', responsive)
 })(window)