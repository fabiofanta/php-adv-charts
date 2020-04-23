$(document).ready(function () {

	lineChart();


	function lineChart() {
		$.ajax({
			url:'server.php',
			method: 'GET',
			success:function(data) {
				var jsonData = JSON.parse(data);
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

			},

			error:function() {
				alert('Errore');
			}


		});
	}
});
