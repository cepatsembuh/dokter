// Initialize Firebase
var config = {
	 apiKey: "fFRaVtFRskcRYpFdbbLC6NaGz8JSEpGPggQrudgF",
	 authDomain: "cepatsembuh.firebaseapp.com",
	 databaseURL: "https://cepatsembuh.firebaseio.com"
};
firebase.initializeApp(config);

var ref = firebase.database().ref();
var date = new Date();
var label = document.getElementById('jumlah');

var puskesmas = ref.child('puskesmas'),
	faskes = puskesmas.child('kelapa_gading'),
	pasien = puskesmas.child('pasien');

var year = date.getFullYear(),
	month = date.getMonth() + 1,
	day = date.getDate();

var right_now = year + '-' + month + '-' + day,
	today = pasien.child(right_now),
	poli = today.child('bpu');

var millie_brown = firebase.database().ref('puskesmas/kelapa_gading/pasien/' + right_now + '/bpu')

function loadData() {
	'use strict';
	millie_brown.on('value', function(snapshot) {
	  label.innerText = snapshot.numChildren()
	});
}