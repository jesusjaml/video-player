/* ==== Variables de botones del reproductor de video ====*/
/* ==== Convenciones ====*/
/* $ → Hace referencia a etiquetas HTML */

const $video = document.getElementById('video');
const $play = document.getElementById('play');
const $pause = document.getElementById('pause');
const $rewind = document.getElementById('rewind')
const $forward = document.getElementById('forward')

/* ==== Evento que escucha el click y luego ejecuta una función ====*/

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$rewind.addEventListener('click', handleRewind);
$forward.addEventListener('click', handleForward);

/* ==== Funcion que se ejecuta al hacer click ====*/

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    $video.pause()
    $play.hidden = false;
    $pause.hidden = true;
}

function handleRewind() {
    $video.currentTime -= 10;
 }

 function handleForward() {
    $video.currentTime += 10;
 }

 /* ==== Variable barra de prgreso del video  ====*/

 const $progress = document.getElementById('progress');

 /* ==== Evento que activa una funcion ====*/

/*  loadedmetadata => nos dara la duracion total del video */
 $video.addEventListener('loadedmetadata', handleLoaded);
 /*  timeupdate => ejecutara la funcion cada vez que actualicemos el tiempo de reproducion */
 $video.addEventListener('timeupdate', handleTimeUpdate);
 /*  timeupdate => ejecutara la funcion cada vez que actualicemos el tiempo de reproducion */
 $progress.addEventListener('input', handleInput)

 /* ==== Funcion que se ejecutan ====*/

 function handleLoaded() {
     $progress.max = $video.duration;
    //  console.log('Ha empezado el video', $video.duration);
 }

 function handleTimeUpdate() {
     $progress.value = $video.currentTime;
    //  console.log('El tiempo actual /*  */es', $video.currentTime);
 }

 function handleInput() {
     $video.currentTime = $progress.value;
    //  console.log($progress.value)
 }

 function time(seconds){

    let date= new Date(seconds*1000);

    var hour= (date.getHours()==0)?23:date.getHours()-1;
    var hour = (hour<9)?"0"+hour:hour;
    let minute = (date.getMinutes()<9)?"0"+date.getMinutes():date.getMinutes();
    let second = (date.getSeconds()<9)?"0"+date.getSeconds():date.getSeconds();

     return minute+":"+second;
    }

 $video.addEventListener('timeupdate',function(){
    document.getElementById("count1").innerHTML= time($video.currentTime);
    });
    $video.addEventListener('loadedmetadata',function(){
        document.getElementById("count2").innerHTML= time($video.duration);
    })