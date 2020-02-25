



// Slide Menu

    function openSlideMenu() {
        document.getElementById('side-menu').style.width = '250px';

}

    function closeSlideMenu(){
        document.getElementById('side-menu').style.width = '0';
                document.getElementById('side-menu').onclick = function(e) {
            e.preventDefault();
            return false;
        };

    }
