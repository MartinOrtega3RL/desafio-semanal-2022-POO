for i in range(2,101):  ##Para que cuente 100 tambien
    for n in range(2,i): ##  va a ir dividiendo los numeros anteriores a i ejemplo  i=6 n=2   6/2=3 6/3=2 6/4=1 6/5=1
        if i%n==0: ##si el resto entre i/n=0  para la iteracion.
            break
    else:
        print(i)
