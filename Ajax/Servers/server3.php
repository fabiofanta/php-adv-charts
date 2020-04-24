<?php

	include __DIR__ . '/../Database/data3.php';
	include __DIR__ . '/../Access/access.php';
	$months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

	if ($access_level == 0) {
		$montly_revenue['type'] = $graphs[0]['fatturato']['type'];
		$montly_revenue['labels'] = $months;
		$montly_revenue['data'] = $graphs['fatturato']['data'];

		echo JSON_encode($montly_revenue);

	} elseif ($access_level > 0) {
		$agent_revenue['type'] = $graphs[1]['fatturato_by_agent']['type'];
		$agent_revenue['labels'] = [];
		$agent_revenue['data'] = [];

		foreach ($graphs[1]['fatturato_by_agent']['data'] as $key => $value) {
			$agent_revenue['labels'][] = $key;
			$agent_revenue['data'][] = $value;

			echo JSON_encode($agent_revenue);
		};

	} elseif ($access_level > 1) {
		$team_efficiency['type'] = $graphs[2]['team_efficiency']['type'];
		$team_efficiency['labels'] = $months;
		$team_efficiency['data'] = $graphs['team_efficiency']['data'];

		echo JSON_encode($team_efficiency);

	};


 ?>
