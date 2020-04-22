<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
		<title></title>
	</head>
	<body>
		<div class="container">
			<canvas id="line-chart"></canvas>
		</div>
	</body>
	<script>
		$(document).ready(function () {
			<?php
				include 'data.php';
			 ?>
			var jsonData = <?php echo JSON_encode($data) ?>;
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
	</script>
</html>
