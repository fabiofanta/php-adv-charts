<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
		<title></title>
	</head>
	<body>

		<style>

			.clearfix::after {
				content: '';
				display: table;
				clear: both;
			}

			.container {
				padding: 60px 0 20px 20px;
			}


			.container .chart {
				float: left;
				width: 50%;
			}

		</style>

		<div class="container clearfix">
			<?php
				include __DIR__ . '/Access/get_access.php';
				include __DIR__ . '/Access/access_translator.php';

				if ($access_level >= 0) { ?>
					<div class="chart">
						<canvas id="chart1"></canvas>
					</div>
		  	<?php };  ?>
			<?php if ($access_level >=1) { ?>
					<div class="chart">
						<canvas id="chart2"></canvas>
					</div>
			<?php  }; ?>
		    <?php if ($access_level >= 2) { ?>
					<div class="chart">
	   				 	<canvas id="chart3"></canvas>
	   			 	</div>
		  <?php  }; ?>

		</div>

		<?php
			file_put_contents("Access/access_bridge.php",'<?php $access_lv = ' . $access_level. ' ?>');
		  ?>
	</body>
	<script src="js/main.js" charset="utf-8"></script>
</html>
