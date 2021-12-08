for $cd in doc("cd_catalog.xml")//CD
where $cd/YEAR > 1980 and $cd/YEAR < 1990
return $cd/text()