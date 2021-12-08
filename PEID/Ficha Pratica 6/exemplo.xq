module namespace page = "http://basex.otg/examples/web-page";

declare 
  %rest:path("/soma/{$num1}/{$num2}")
  %rest:GET
function page:soma($num1, $num2){
  <response>
  "A soma de" {$num1} "e" {$num2} "é" {$num1 + $num2}
  </response>
};