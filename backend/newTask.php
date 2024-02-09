<?php
    //recuperare tutti i file;

    // trasformato tutto in stringa
    $array_json = file_get_contents('array.json');


    //trasformare la stringa JSON corrispondente ai todo già esistenti;
    $all_task = json_decode($array_json, true);
    
    //aggiungere la nuova task all'array;

    $new_task = [
        'name' => $_POST['name'],
        'status' => false
    ];
    //pusciamo adesso nell'array

    $all_task[] = $new_task;

    //ristrasformare l'array in una stringa JSON;
    $total_task = json_encode($all_task);

    //scrivere la stringa nel file array.JSON
    
    
    //il primo dato è il percorso del file nel quale 
    //vogliamo mandare i dati;

    // il secondo è la variabile che vogliamo mandare;

    file_put_contents('./array.json',$total_task );

    header('Content-Type: application/json');

    echo $total_task;