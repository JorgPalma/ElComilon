
    document.querySelectorAll('#menu .lista-menu li a').forEach((element) => {
        element.addEventListener('click', () => {
            document.querySelector('#menu .active').classList.remove('active')
            element.parentElement.classList.add('active')
        })
    })

    const showEntradas = () =>{
        document.getElementById('entrada').style.display = "flex"
        document.getElementById('principal').style.display = "none"
        document.getElementById('postre').style.display = "none"
        document.getElementById('sandwich').style.display = "none"
    }

    const showSandw = () => {
        document.getElementById('entrada').style.display = "none"
        document.getElementById('principal').style.display = "none"
        document.getElementById('postre').style.display = "none"
        document.getElementById('sandwich').style.display = "flex"
    }

    const showPrincipal = () => {
        document.getElementById('entrada').style.display = "none"
        document.getElementById('principal').style.display = "flex"
        document.getElementById('postre').style.display = "none"
        document.getElementById('sandwich').style.display = "none"
    }

    const showPostre = () => {
        document.getElementById('entrada').style.display = "none"
        document.getElementById('principal').style.display = "none"
        document.getElementById('postre').style.display = "flex"
        document.getElementById('sandwich').style.display = "none"
    }
