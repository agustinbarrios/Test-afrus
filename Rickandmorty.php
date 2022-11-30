<?php
require_once( ABSPATH . 'wp-load.php' );
/*
Plugin Name: Rick and Morty Characters
Plugin URI: https://example.com
Description: Display Rick and Morty characters
Version: 1.0
Author: Agustin Barrios
Author URI: https://www.linkedin.com/in/agustin-barrios/
License: GPLv2
*/

/* Shortcode – The Rick and Morty API Integration in cards*/
function fn_rick_and_morty_characters(){
	//Creación de una variable para almacenar la URL de la API
	$api_url = 'https://rickandmortyapi.com/api/character/';
	
	//realizamos una petición get a la API
	$response = wp_remote_get($api_url);
	
	//verificamos que la petición fue exitosa
	if( is_wp_error($response) ) {
		return;
	}
	
	//obtenemos el cuerpo de la respuesta en formato json
	$data = json_decode($response['body']);
	
	//verificamos que existan resultados
	if( empty($data->results) ) {
		return;
	}
	
	//recorremos cada uno de los resultados
	foreach ($data->results as $result) {
		//Creamos el html de cada tarjeta
		$output = '<div class="character-card">';
		$output .= '<h2>' . $result->name . '</h2>';
		$output .= '<img src="' . $result->image . '" />';
		$output .= '<p>' . $result->status . '</p>';
		$output .= '<p>' . $result->species . '</p>';
		$output .= '</div>';
		
		echo $output;
	}
	
}

//Agregamos el shortcode
add_shortcode("rick_and_morty_characters", "fn_rick_and_morty_characters");

?>