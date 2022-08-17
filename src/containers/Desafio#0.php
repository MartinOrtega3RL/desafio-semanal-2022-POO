<?php

function fizzbuzz($num)
{
    if ($num % 3 == 0 && $num % 5 == 0) 
    {
        print "FizzBuzz" . PHP_EOL; //PHP_EOL; Se usa para dar saltos de pagina
    } 
    else 
    {
        if ($num % 3 == 0) 
        {
            print "Fizz" . PHP_EOL;
        } 
        else 
        {
            if ($num % 5 == 0) 
            {
                echo "Buzz" . PHP_EOL;
            } 
            else 
            {
                echo $num . PHP_EOL;
            }
        }
    }
}
for ($i = 0; $i <= 100; $i++) 
{
    fizzbuzz($i);
}



