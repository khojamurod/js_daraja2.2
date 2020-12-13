
let x1 , x , y

do{x1 = +prompt('Sonni kriting: ')
while(isNaN(x1)){
    x1 = +prompt('Sonni boshqattan kriting: ')
} 
y= +prompt ("Uning darajasini kriting: ")
while(isNaN(y)){
    y = +prompt ("Darajasini boshqattan kriting oka: ")
}
for(x=x1 ; y>1 ; y--){
    x= x*x1
}
alert(x)
}while(true)









