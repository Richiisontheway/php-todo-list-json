<?php
    //per trasformare il tutto in una sola stringa
    $api_presa_dal_file = file_get_contents('array.json');

    header('Content-type: application/json');

    echo ($api_presa_dal_file);