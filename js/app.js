    document.getElementById('form2').style.display="none"
    document.getElementById('buttomuwu').addEventListener("click", function(event){
        event.preventDefault()
      });
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

    let usuario = document.getElementById("user-login")
    let contraseña = document.getElementById("user-password")
    let usuario1 = document.getElementById("user-register")
    let contraseña1 = document.getElementById("user-password1")
    var usuario2 = "dfgdfgdfg"
    var contraseña2 = "gfdgdfgdfg"
        
    function validar(){

    
        if ( usuario.value == usuario2 && contraseña.value == contraseña2)
        {
            
            alert("datos validados")
            location.href = "index.html";
        } 
            else{ 
                    alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
            } 
        } 
  
    function registro(){


        if (usuario1.value != "" && contraseña1.value != "" ){
            usuario2 = usuario1.value
            contraseña2 = contraseña1.value
            
            alert("Registro exitoso")
            document.getElementById('form2').style.display="none"
            document.getElementById('form1').style.display="block"
        }
            else{
                alert("Complete todos los campos")
            }


    }
    function aparece(){
        document.getElementById('form2').style.display="block"
        document.getElementById('form1').style.display="none"
    }

    function desaparece(){
        document.getElementById('form2').style.display="none"
        document.getElementById('form1').style.display="block"
    }