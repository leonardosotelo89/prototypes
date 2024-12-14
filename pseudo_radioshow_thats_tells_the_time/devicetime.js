//const mainaudio = new Audio();
let tospeak = [];

const allhours = {
  0: 'lascero.mp3',
  1: 'launa.mp3',
  2: 'lasdos.mp3',
  3: 'lastres.mp3',
  4: 'lascuatro.mp3',
  5: 'lascinco.mp3',
  6: 'lasseis.mp3',
  7: 'lassiete.mp3',
  8: 'lasocho.mp3',
  9: 'lasnueve.mp3',
  10: 'lasdiez.mp3',
  11: 'lasonce.mp3',
  12: 'lasdoce.mp3',
  13: 'lastrece.mp3',
  14: 'lascatorce.mp3',
  15: 'lasquince.mp3',
  16: 'lasdiesiseis.mp3',
  17: 'lasdiesisiete.mp3',
  18: 'lasdiesiocho.mp3',
  19: 'lasdiesinueve.mp3',
  20: 'lasveinte.mp3',
  21: 'lasveintiuna.mp3',
  22: 'lasveintidos.mp3',
  23: 'lasveintitres.mp3',
};

const allminutes = {
  0: 'enpunto.mp3',
  1: 'uno.mp3',
  2: 'dos.mp3',
  3: 'tres.mp3',
  4: 'cuatro.mp3',
  5: 'cinco.mp3',
  6: 'seis.mp3',
  7: 'siete.mp3',
  8: 'ocho.mp3',
  9: 'nueve.mp3',
  10: 'diez.mp3',
  11: 'once.mp3',
  12: 'doce.mp3',
  13: 'trece.mp3',
  14: 'catorce.mp3',
  15: 'quince.mp3',
  16: 'diesiseis.mp3',
  17: 'diesisiete.mp3',
  18: 'diesiocho.mp3',
  19: 'diesinueve.mp3',
  20: 'veinte.mp3',
  21: 'veintiuno.mp3',
  22: 'veintidos.mp3',
  23: 'veintitres.mp3',
  24: 'veinticuatro.mp3',
  25: 'veinticinco.mp3',
  26: 'veintiseis.mp3',
  27: 'veintisiete.mp3',
  28: 'veintiocho.mp3',
  29: 'veintinueve.mp3',
  30: 'treinta.mp3',
  31: 'treintaiuno.mp3',
  32: 'treintaidos.mp3',
  33: 'treintaitres.mp3',
  34: 'treintaicuatro.mp3',
  35: 'treintaicinco.mp3',
  36: 'treintaiseis.mp3',
  37: 'treintaisiete.mp3',
  38: 'treintaiocho.mp3',
  39: 'treintainueve.mp3',
  40: 'cuarenta.mp3',
  41: 'cuarentaiuno.mp3',
  42: 'cuarentaidos.mp3',
  43: 'cuarentaitres.mp3',
  44: 'cuarentaicuatro.mp3',
  45: 'cuarentaicinco.mp3',
  46: 'cuarentaiseis.mp3',
  47: 'cuarentaisiete.mp3',
  48: 'cuarentaiocho.mp3',
  49: 'cuarentainueve.mp3',
  50: 'cincuenta.mp3',
  51: 'cincuentaiuno.mp3',
  52: 'cincuentaidos.mp3',
  53: 'cincuentaitres.mp3',
  54: 'cincuentaicuatro.mp3',
  55: 'cincuentaicinco.mp3',
  56: 'cincuentaiseis.mp3',
  57: 'cincuentaisiete.mp3',
  58: 'cincuentaiocho.mp3',
  59: 'cincuentainueve.mp3',
};
const itstime = [
  'itstimeattentionplease.mp3',
  'itstimeIneedyourattention.mp3'
  ];
const repeat = [
  'repeatIgonnarepeat.mp3', 'repeatonceagain.mp3'
  ];
const backtoshow = [
  'backtoshowwemustcontinue.mp3',
  'backtoshowletscontinue.mp3'
  ];



/*
function time() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  tospeak = [allhours[hour], allminutes[minute]];

  playAudioSequence();
}

function playAudioSequence() {
 if (tospeak.length === 0) return;//original statement
 
  mainaudio.src = "time sounds/" + tospeak.shift();
  mainaudio.play();
  mainaudio.onended = playAudioSequence;
}

*/
/*
// Example: Bind time() to a click event
document.body.onclick = time;
*/

/*
Key Improvements
Dynamic Mapping:
direct key access (allhours[hour] and allminutes[minute]).
tospeak Handling:

tospeak is cleared automatically after playback due to the shift-based logic in playAudioSequence().
Audio Playback:

Created a recursive playAudioSequence function to handle any number of audios in tospeak.
*/