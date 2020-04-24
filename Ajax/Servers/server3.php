<?php

	include __DIR__ . '/../Database/data3.php';

	$months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

	 // $graphs['fatturato']['access']
	 $access_level = 2;

	if ($access_level >= 0) {
		$data['montly_revenue']['type'] = $graphs['fatturato']['type'];
		$data['montly_revenue']['labels'] = $months;
		$data['montly_revenue']['data'] = $graphs['fatturato']['data'];

	} if ($access_level >= 1) {
		$data['agent_revenue']['type'] = $graphs['fatturato_by_agent']['type'];
		$data['agent_revenue']['labels'] = [];
		$data['agent_revenue']['data'] = [];

		foreach ($graphs['fatturato_by_agent']['data'] as $key => $value) {
			$data['agent_revenue']['labels'][] = $key;
			$data['agent_revenue']['data'][] = $value;
		};

	} if ($access_level >= 2) {
		$data['team_efficiency']['type'] = $graphs['team_efficiency']['type'];
		$data['team_efficiency']['labels'] = $months;
		$data['team_efficiency']['data'] = $graphs['team_efficiency']['data'];

	};

	echo JSON_ENCODE($data);


 ?>
