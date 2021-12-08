(:for $clientes in doc("turismo.xml")//cliente
where $clientes//morada/distrito = "Braga"
order by $clientes/nome  
return $clientes :)

for $reserva in doc("turismo.xml")//reserva

let $nomeHotel := //hotel[@id = $reserva/@hotel]/nome/text()
let $nomeCliente := //cliente[@id = $reserva/@cliente]/nome/text()

order by $nomeHotel descending, $nomeCliente ascending

return <reserva idReserva = "{$reserva/@id}">
<nomeHotel>{$nomeHotel}</nomeHotel>
<nomeCliente>{$nomeCliente}</nomeCliente>
{
  if ($reserva/numeroNoites < 7) 
  then <tipoEstadia>Curta</tipoEstadia> 
  else <tipoEstadia>Longa</tipoEstadia>
  }
</reserva>