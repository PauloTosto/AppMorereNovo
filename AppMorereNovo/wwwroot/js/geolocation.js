var elMap = document.getElementById('loc');
var msg = 'Sinto muito, não conseguimos determinar sua localização.';
if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(sucess, fail);
    elMap.textContent = 'Buscando a localização'
} else
{
    elMap.textContent = msg;
}

function sucess(position) {
    msg = '<h3>Longitude:<br>';
    msg += position.coords.latitude + '</h3>';
    msg += '<h3>Latitude:<br>';
    msg += position.coords.longitude + '</h3>';
    elMap.innerHTML = msg;

}
function fail(msg) {
    elMap.textContent = msg;
    console.log(msg.code);
}