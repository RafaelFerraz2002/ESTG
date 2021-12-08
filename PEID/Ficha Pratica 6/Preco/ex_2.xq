(:for $produtos in collection("../Preco")//produto
order by number($produtos/preco) descending
return $produtos:)

(:avg(collection("../Preco")//produto/preco):)

(:let $produtos := collection("../Preco")//produto
let $preco := ($produtos[nome = "lápis"]/preco, $produtos[nome = "borracha"]/preco * 2)
return sum($preco):)

for $produtos in collection("../Preco")//produto
return if(not($produtos/desconto)) then $produtos