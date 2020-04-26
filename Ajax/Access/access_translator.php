<?php

	if ($access_input == 'guest' | $access_input == NULL) {
		$access_level = 0;
	} elseif ($access_input == 'employee') {
		$access_level = 1;
	} elseif ($access_input == 'clevel') {
		$access_level = 2;
	}

 ?>
