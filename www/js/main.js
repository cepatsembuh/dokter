window.onload = loadData();
var ref = new Firebase('https://dr-iqbal.firebaseio.com');

var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    right_now = year + '-' + month + '-' + day,
    today = ref.child(right_now);

function loadData() {
	today.once('value', function(snapshot){
		var data = snapshot.numChildren(),
		label = document.getElementById('jumlah');

		label.innerHTML = data;
	});
}