(:for $curso in doc("cursos.xml")//curso
return $curso/nome:)

(:for $curso in doc("cursos.xml")//curso
where $curso//disciplina = "Estatística"
return $curso/diretor_curso:)

(:for $curso in doc("cursos.xml")//curso
where $curso/@numero_vagas > 30
return $curso:)

(:for $curso in doc("cursos.xml")//curso
where count($curso//disciplina) = 5
return $curso/nome:)

(:count(distinct-values(//disciplina)):)

