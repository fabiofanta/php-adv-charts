<?php

	include __DIR__ . '/data3.php';

	$months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

	$data['montly_revenue']['type'] = $graphs['fatturato']['type'];
	$data['montly_revenue']['labels'] = $months;
	$data['montly_revenue']['data'] = $graphs['fatturato']['data'];
	$data['montly_revenue']['access'] = $graphs['fatturato']['access'];

	$data['agent_revenue']['type'] = $graphs['fatturato_by_agent']['type'];
	$data['agent_revenue']['labels'] = [];
	$data['agent_revenue']['data'] = [];
	$data['agent_revenue']['access'] = $graphs['fatturato_by_agent']['access'];

	foreach ($graphs['fatturato_by_agent']['data'] as $key => $value) {
		$data['agent_revenue']['labels'][] = $key;
		$data['agent_revenue']['data'][] = $value;
	}

	$data['team_efficiency']['type'] = $graphs['team_efficiency']['type'];
	$data['team_efficiency']['labels'] = $months;
	$data['team_efficiency']['data'] = $graphs['team_efficiency']['data'];
	$data['team_efficiency']['access'] = $graphs['team_efficiency']['access'];

 ?>
