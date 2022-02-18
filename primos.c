// Modelo hecho por fran de mates
#include <stdio.h>
void main(void){
	int n, i,test;
	test=0;
	printf("Introduce un numero mayor que 2:");
	scanf("%i",&n);
	for (i=1;i<=n;i++){
		if (n%i==0){
			test+=1;
		}
	}
	if (test==2){
		printf("\n el número %i es primo",n);
	} else {
		printf("\n el número %i es compuesto",n);
		}
}
