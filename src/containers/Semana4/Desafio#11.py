def cadena(str1,str2):
   Lista1=[]
   Lista2=[]

   for unelemento in str1:
    Lista1.append(unelemento)

   for unelemento in str2:
    Lista2.append(unelemento)

   A=set(Lista1)
   B=set(Lista2)
   out1=list(A-B)
   out2=list(B-A)

   print("Caracteres presentes en la str1 pero NO  presentes en str2: ",out1)
   print("Caracteres presentes en la str2 pero NO  presentes en str1: ",out2)



cadena("Hola","Abecedario")