importScripts('/js/sha3.js');

onmessage = function(e) {
  console.log('['+Date.now()+'] received work:', e.data);
  var hash = CryptoJS.SHA3(e.data).toString();
  console.log('['+Date.now()+'] completed work:', hash);
  postMessage(hash);
};
