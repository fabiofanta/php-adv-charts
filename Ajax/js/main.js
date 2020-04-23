$(document).ready(function () {

	chartBuilder();





	function chartBuilder() {
		$.ajax({
			url:'Servers/server2.php',
			method: 'GET',
			success:function(data) {
				var jsonData = JSON.parse(data);

				var dataRevenues = dataRevenuesBuilder(jsonData); // data builder for chart.js

				chartGenerator('#montly-revenue-chart',chartRevSetting(jsonData.fatturato.type,dataRevenues.labels,dataRevenues.data));

				var dataRevsByAgent = dataRevByAgentBuilder(jsonData); // data builder for chart.js 

				chartGenerator('#agent-revenue-chart',chartRevByAgentSetting(jsonData.fatturato_by_agent.type,dataRevsByAgent.labels,dataRevsByAgent.data));


			},

			error:function() {
				alert('Error');
			}


		});
	}

	function chartGenerator(selector,data) {
		var ctx = $(selector);
		var myChart = new Chart(ctx,data);
	}

	function dataRevenuesBuilder(datasets) {
		var months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
		var revenuesXMonth = [];

		for (var i = 0; i < datasets.fatturato.data.length; i++) {
			var dataset = datasets.fatturato.data[i];
			revenuesXMonth.push(dataset);
		};
		return {data:revenuesXMonth,labels:months}
	}

	function dataRevByAgentBuilder(datasets) {
		var agentName = [];
		var revenuesXAgent = [];

		for (var variable in datasets.fatturato_by_agent.data) {
			agentName.push(variable);
			revenuesXAgent.push(datasets.fatturato_by_agent.data[variable]);
		};

		return {data:revenuesXAgent,labels:agentName}
	}

	function chartRevSetting(ghType,labels,data) {
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

	function chartRevByAgentSetting(ghType,labels,data) {
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
