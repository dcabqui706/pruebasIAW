function factorial_recursivo (numero){

    if(numero==0)
        return 1;
    else
        return numero*factorial_recursivo (numero-1);
}