let bil = 'Ola mundo';

var tamanho = bil.length;

> let roberta =[]
undefined
> roberta.push(2, 4, 5)
3
> roberta
[ 2, 4, 5 ]
> roberta.pop(2)
5
> roberta
[ 2, 4 ]
> roberta.pop(0)
4
> roberta
[ 2 ]
> roberta.unshift('ola')
2
> roberta
[ 'ola', 2 ]
> roberta.unshift(3,7,4,2,456,75,3345, 3, ['lilostuart'])
11
> roberta
[ 3, 7, 4, 2, 456, 75, 3345, 3, [ 'lilostuart' ], 'ola', 2 ]
> roberta.some(item => item === 3) 
true
> roberta.every(item => item === 3)

false
> roberta.shift()
3
> roberta
[ 7, 4, 2, 456, 75, 3345, 3, [ 'lilostuart' ], 'ola', 2 ]
> roberta[2]
2
> roberta.includes('ola')
true
> roberta.length
10


// objects

> let objetinho = {bil: 12, lil: 'trevor'}
undefined
> typeof objetinho
'object'
> Object.values(objetinho)
[ 12, 'trevor' ]
> Object.keys(objetinho)
[ 'bil', 'lil' ]
> let dan = Object.keys(objetinho) 
undefined
> dan.includes('bil')
true
> objetinho['litostuart'] = 'bilbórios'
'bilbórios'
> dan
[ 'bil', 'lil' ]
> objetinho
{ bil: 12, lil: 'trevor', litostuart: 'bilbórios' }
> typeof dan
'object'