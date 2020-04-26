$(document).ready(function () {

	chartBuilder();




	function chartBuilder() {
		$.ajax({
			url:'Servers/server3.php',
			method: 'GET',
			success:function(data) {
				var jsonData = JSON.parse(data);
				console.log(jsonData);


				chartGenerator('#chart-1',chart1Setting(jsonData.chart1.type,jsonData.chart1.labels,jsonData.chart1.data));


				chartGenerator('#chart-2',chart2Setting(jsonData.chart2.type,jsonData.chart2.labels,jsonData.chart2.data));

				var dataTeamEff = chart3Builder(jsonData);

				chartGenerator('#chart-3',chart3Setting(jsonData.chart3.type,jsonData.chart3.labels,dataTeamEff));


			},

			error:function() {
				alert('Error');
			}


		});
	}

	function chartGenerator(selector,data) {
		if ($(selector).length != 0) {
			var ctx = $(selector);
			var myChart = new Chart(ctx,data);
		};
	}

	function chart3Builder(datasets) {
		var teams = [];

		for (var variable in datasets.chart3.data) {
			teams.push({label: variable,data:datasets.chart3.data[variable],backgroundColor:randomColor(),borderColor:randomColor()});
		};

		return teams
	}

	function chart1Setting(ghType,labels,data) {
		data = {
			type: ghType,
			data: {
				labels: labels,
				datasets: [{
					label: 'Vendite',
					data: data,
					backgroundColor: randomColor(),
					borderColor: randomColor(),
				}]
			},
		}
		return data;
	}

	function chart2Setting(ghType,labels,data) {
		data = {
			type: ghType,
			data: {
				labels: labels,
				datasets: [{
					label: 'Revenue By Agent',
					data: data,
					backgroundColor: [randomColor(),randomColor(),randomColor(),randomColor()],
				}]
			},
		}
		return data;
	}

	function chart3Setting(ghType,labels,data) {
		data = {
			type: ghType,
			data: {
				labels: labels,
				datasets: data
			},
		}
		return data;
	}

	function randomColor() {
		var rdNum = Math.floor(Math.random() * 256);
		var color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) +')';

		return color
	}
});
