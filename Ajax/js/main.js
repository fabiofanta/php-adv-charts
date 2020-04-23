$(document).ready(function () {

	chartBuilder();


	function chartBuilder() {
		$.ajax({
			url:'Servers/server2.php',
			method: 'GET',
			success:function(data) {
				var jsonDatas = JSON.parse(data);
				console.log(jsonDatas);

				var dataRevenues = dataRevenueBuilder(jsonDatas);


				chart('#montly-revenue-chart',dataRevenue(jsonDatas.fatturato.type,dataRevenues.labels,dataRevenues.data));

				var dataRevsByAgent = dataRevByAgentBuilder(jsonDatas);


				chart('#agent-revenue-chart',dataRevByAgent(jsonDatas.fatturato_by_agent.type,dataRevsByAgent.labels,dataRevsByAgent.data));


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

	function dataRevenueBuilder(datasets) {
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
