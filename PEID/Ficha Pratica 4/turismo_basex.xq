(:/turismo/clientes:)
(:/turismo/agencias/agencia/nome:)
(:distinct-values(/turismo/hoteis//morada/distrito):)
(:/turismo//hotel[@id = 1]/nome:)
(:/turismo//cliente/morada[contains(distrito, "Braga")]/codigoPostal:)
(:/turismo/reservas/reserva[@hotel = 1]/numeroNoites:)
(:sum(/turismo/reservas/reserva[@hotel = 1]/numeroHospedes):)
(:/turismo//hotel/*[3]:)
(:/turismo//hotel[caracteristicas/caracteristica = "ginásio"]/nome:)
(:sum(/turismo/reservas/reserva[@hotel = 2]/preco):)
(:/turismo/reservas/reserva[count(pedidosCliente) = 0]/@id:)
avg(/turismo/reservas/reserva/numeroNoites)