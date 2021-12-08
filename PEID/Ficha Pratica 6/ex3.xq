(:distinct-values(doc("voos.xml")//passageiro/pais):)

(:for $p in doc("voos.xml")//voo
return if($p[contains(@id, "FR")]) then $p :)

(:for $p in doc("voos.xml")//voo
return if($p[contains(@id, "FR")]) then 
   <voo id="{$p/@id}">
     {$p/origem,
     $p/destino}
   </voo>:)
   
(:some $p in doc("voos.xml")/doc
satisfies $p//voo/data = "2021-08-30" and $p//aeroporto/@abreviatura = "NPL":)

some $p in doc("voos.xml")/doc
satisfies $p//voo/data = "2021-08-30" and $p//aeroporto/@abreviatura = "NPL" and $p//passageiro/nome = "Santa Claus"