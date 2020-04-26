<?php

	include __DIR__ . '/data_builder.php';
	include __DIR__ . '/../Access/access_bridge.php';

	$i = 0;
	foreach ($data as $key => $value) {
		$access_input = $value['access'];
		include __DIR__ . '/../Access/access_translator.php';

		$i += 1;

		if ($access_level <= $access_lv) { // if $_GET response = access in each chart data
			$data_graph['chart' . $i . '']['type'] = $value['type'];
			$data_graph['chart' . $i . '']['labels'] = $value['labels'];
			$data_graph['chart' . $i . '']['data'] = $value['data'];
		};

	};

	echo JSON_encode($data_graph);

 ?>
