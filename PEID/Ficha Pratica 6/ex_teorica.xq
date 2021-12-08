(:declare function local:nomeAutor(
  $nome as xs:string?)
  {
    for $book in doc("bookstore.xml")//book
    
    return if ($book/author = $nome) then $book
  };
  
   local:nomeAutor("James McGovern"):)
  
 (:declare function local:state(
  $books)
  {
    for $book in $books/book
    return (
     <book category="{$book/@category}">
       {$book/title,
       $book/author,
       $book/year,
       $book/price}
     <state>{if($book/year > 2010) then "recente" else "antigo"}</state>
   </book>)
  };
  
   local:state(doc("bookstore.xml")/bookstore):)
   
   
  (:count(doc("bookstore.xml")//book[year > 2008]):)
  
  (:some $book in doc("bookstore.xml")//book
  satisfies $book/price < 5:)
  
  (:for $book in doc("bookstore.xml")//bookstore
  return if($book/book/@category = "CHILDREN") then $book:)
  
for $books in doc("bookstore.xml")/bookstore
return if (every $book in $books/book satisfies $book/price < 60) then $books