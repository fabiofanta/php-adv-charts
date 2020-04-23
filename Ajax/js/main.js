$(document).ready(function () {

	lineChart();


	function lineChart() {
		$.ajax({
			url:'Servers/server2.php',
			method: 'GET',
			success:function(data) {
				var jsonDatas = JSON.parse(data);
				console.log(jsonDatas);
				var months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
				var revenuesXMonth = [];

				for (var i = 0; i < jsonDatas.fatturato.data.length; i++) {
					var jsonData = jsonDatas.fatturato.data[i];
					revenuesXMonth.push(jsonData);
				};

				chart('#line-chart',dataRevenue(jsonDatas.fatturato.type,months,revenuesXMonth));

				var agentName = [];
				var revenuesXAgent = [];

				for (var variable in jsonDatas.fatturato_by_agent.data) {
					agentName.push(variable);
					revenuesXAgent.push(jsonDatas.fatturato_by_agent.data[variable]);
				};

				chart('#pie-chart',dataRevByAgent(jsonDatas.fatturato_by_agent.type,agentName,revenuesXAgent));


			},

			error:function() {
				alert('Errore');
			}


		});
	}

	function chart(selector,data) {
		var ctx = $(selector);
		var myChart = new Chart(ctx,data);
	}

	function dataRevenue(ghType,labels,data) {
		data = {
			type: ghType,
			data: {
				labels: labels,
				datasets: [{
					label: 'Vendite',
					data: data,
					backgroundColor: 'green',
					borderColor: 'red',
				}]
			},
		}
		return data;
	}

	function dataRevByAgent(ghType,labels,data) {
		data = {
			type: ghType,
			data: {
				labels: labels,
				datasets: [{
					label: 'Revenue By Agent',
					data: data,
					backgroundColor: 'yellow',
					borderColor: 'red',
				}]
			},
		}
		return data;
	}
});
