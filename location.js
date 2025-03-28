const lat  = document.querySelector('#lat')
const long = document.querySelector('#long')

if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition
    ((location) => { //callback de SUCESSO
        
        long.innerHTML += location.coords.longitude
        lat.innerHTML  += location.coords.latitude

    }, 
    (error) => { //callback de ERRO
        console.log('error ao acessar localização: ' + error)
    })

}