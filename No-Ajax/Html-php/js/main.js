$(document).ready(function () {

	var jsonData = $('#line-chart').data('database');
	var mesi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

	var ctx = $('#line-chart');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: mesi,
			datasets: [{
				label: 'Vendite',
				data: jsonData,
				backgroundColor: 'green',
				borderColor: 'red',
			}]
		},
	});
});
