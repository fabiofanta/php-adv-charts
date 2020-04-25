<?php
	$access_level = '';
	$access_level = $_GET['level'];

	if ($access_level == 'guest' | $access_level == NULL) {
		$access_level = 0;
	} elseif ($access_level == 'employee') {
		$access_level = 1;
	} elseif ($access_level == 'clevel') {
		$access_level = 2;
	}

 ?>
