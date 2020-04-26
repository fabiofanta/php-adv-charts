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
			<?php
				include __DIR__ . '/Access/get_access.php';
				include __DIR__ . '/Access/access_translator.php';

				if ($access_level >= 0) { ?>
					<canvas id="chart-1"></canvas>
		  	<?php };  ?>
			<?php if ($access_level >=1) { ?>
				  <canvas id="chart-2"></canvas>
			<?php  }; ?>
		    <?php if ($access_level >= 2) { ?>
			  <canvas id="chart-3"></canvas>
		  <?php  }; ?>

		</div>

		<?php
			file_put_contents("Access/access_bridge.php",'<?php $access_lv = ' . $access_level. ' ?>');
		  ?>
	</body>
	<script src="js/main.js" charset="utf-8"></script>
</html>
