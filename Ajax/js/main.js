$(document).ready(function () {

	chartBuilder();




	function chartBuilder() {
		$.ajax({
			url:'Servers/server3.php',
			method: 'GET',
			success:function(data) {
				var jsonData = JSON.parse(data);
				console.log(jsonData);

				for (var variable in jsonData) {
					var selector = '#' + variable + '';
					if ($(selector).length != 0) {
						chartGenerator(selector,chartSetting(jsonData[variable].type, jsonData[variable].labels, jsonData[variable].data));
					};
				};
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

	function chartSetting(ghType,labels,data) {
		data = {
			type: ghType,
			data: {
				labels: labels,
				datasets: data
			}
		}
		return data;
	}

});
