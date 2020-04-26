<?php

	include __DIR__ . '/../Database/data3.php';

	$months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

	//build first chart data

	$data['montly_revenue']['type'] = $graphs['fatturato']['type'];
	$data['montly_revenue']['labels'] = $months;
	$data['montly_revenue']['data'][0]['data'] = $graphs['fatturato']['data'];
	$data['montly_revenue']['data'][0]['backgroundColor'] = randomColor();
	$data['montly_revenue']['data'][0]['borderColor'] = randomColor();
	$data['montly_revenue']['data'][0]['label'] = 'Vendite';
	$data['montly_revenue']['access'] = $graphs['fatturato']['access'];


	//build second chart data

	$data['agent_revenue']['type'] = $graphs['fatturato_by_agent']['type'];

	foreach ($graphs['fatturato_by_agent']['data'] as $key => $value) {
		$data['agent_revenue']['labels'][] = $key;
		$data['agent_revenue']['data'][0]['data'][] = $value;
		$data['agent_revenue']['data'][0]['backgroundColor'][] = randomColor();
	};

	$data['agent_revenue']['access'] = $graphs['fatturato_by_agent']['access'];
	$data['agent_revenue']['data'][0]['label'] = 'Revenue By Agent';


	//build third chart data

	$data['team_efficiency']['type'] = $graphs['team_efficiency']['type'];
	$data['team_efficiency']['labels'] = $months;

	$i = -1;

	foreach ($graphs['team_efficiency']['data'] as $key => $value) {

		$i += 1;
		$data['team_efficiency']['data']['' . $i .'']['label'] = $key;
		$data['team_efficiency']['data']['' . $i .'']['data'] = $value;
		$data['team_efficiency']['data']['' . $i .'']['backgroundColor'] = randomColor();
		$data['team_efficiency']['data']['' . $i .'']['borderColor'] = randomColor();
	};

	$data['team_efficiency']['access'] = $graphs['team_efficiency']['access'];





	function randomColor() {
		$rdNum = rand(0,255);
		$color = 'rgb(' . rand(0,255) . ',' . rand(0,255) . ',' . rand(0,255) . ')';

		return $color;
	}

 ?>
