// Initialize Firebase
var config = {
	 apiKey: "fFRaVtFRskcRYpFdbbLC6NaGz8JSEpGPggQrudgF",
	 authDomain: "cepatsembuh.firebaseapp.com",
	 databaseURL: "https://cepatsembuh.firebaseio.com"
};
firebase.initializeApp(config);

var label = document.getElementById('bigOne');
var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    right_now = year + '-' + month + '-' + day,
    today = ref.child(right_now);

function loadData() {
	'use strict';
	today.once('value', snap => label.innerText = snap.numChildren());
}