$(document).ready(function () {

	chartBuilder();




	function chartBuilder() {
		$.ajax({
			url:'Servers/server3.php',
			method: 'GET',
			success:function(data) {
				var jsonData = JSON.parse(data);
				console.log(jsonData);

				var dataRevenues = dataRevenuesBuilder(jsonData); // data builder for chart.js

				chartGenerator('#montly-revenue-chart',chartRevSetting(jsonData.montly_revenue.type,dataRevenues.labels,dataRevenues.data));

				var dataRevsByAgent = dataRevByAgentBuilder(jsonData); // data builder for chart.js

				chartGenerator('#agent-revenue-chart',chartRevByAgentSetting(jsonData.agent_revenue.type,dataRevsByAgent.labels,dataRevsByAgent.data));

				var dataTeamEff = teamEffBuilder(jsonData);

				chartGenerator('#team-efficiency-chart',chartTeamEff(jsonData.team_efficiency.type,dataTeamEff.labels,dataTeamEff.data));


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
		var months = datasets.montly_revenue.labels;
		var revenuesXMonth = [];

		for (var i = 0; i < datasets.montly_revenue.data.length; i++) {
			var dataset = datasets.montly_revenue.data[i];
			revenuesXMonth.push(dataset);
		};
		return {data:revenuesXMonth,labels:months}
	}

	function dataRevByAgentBuilder(datasets) {
		var agentName = [];
		var revenuesXAgent = [];

		for (var variable in datasets.agent_revenue.data) {
			agentName.push(datasets.agent_revenue.labels[variable]);
			revenuesXAgent.push(datasets.agent_revenue.data[variable]);
		};

		return {data:revenuesXAgent,labels:agentName}
	}

	function teamEffBuilder(datasets) {
		var months = datasets.team_efficiency.labels;
		var teams = [];

		for (var variable in datasets.team_efficiency.data) {
			teams.push({label: variable,data:datasets.team_efficiency.data[variable],backgroundColor:randomColor(),borderColor:randomColor()});
		};

		return {data:teams,labels:months}
	}

	function chartRevSetting(ghType,labels,data) {
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

	function chartRevByAgentSetting(ghType,labels,data) {
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

	function chartTeamEff(ghType,labels,data) {
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
