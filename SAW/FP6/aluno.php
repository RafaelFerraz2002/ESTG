<?php
    $cod_estudante = '1234567';
    $pattern = '/^(?=.*[0-9]).{7}$/'>
    if(preg_match($pattern, $cod_estudante)){
        echo "Esta feito";
    } else {
        echo "try again";
    }
?>