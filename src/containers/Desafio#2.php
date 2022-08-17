<?php
$a=1;
$b=0;

for($i=0; $i<=50; $i++)
{
    $b=$a+$b;
    $a=$b-$a;
    echo $a.PHP_EOL;
}