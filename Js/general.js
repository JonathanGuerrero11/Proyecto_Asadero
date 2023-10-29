function irArriba(){
    window.addEventListener('scroll',() => {
        var scroll = document.documentElement.scrollTop;
        var botonarriba = document.getElementById('botonarriba');

        if(scroll >600)
        {
            botonarriba.style.visibility = "visible"
        }
        else
        {
            botonarriba.style.visibility = "hidden"
        }

    })
}

irArriba();