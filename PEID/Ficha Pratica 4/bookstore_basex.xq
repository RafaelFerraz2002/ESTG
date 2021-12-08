(:/bookstore/book/title[@lang="en-us"]/text():) 
(:count(/bookstore/book/title[@lang="en-us"]):) 
(:/bookstore/book//author[ contains(., "Laurentiis")]/text():)
(:/bookstore/book[price > 30]/title/text():)
(:/bookstore/*[last()]:)
(:/bookstore/*[1]:)
(:count(//*):)
(://book[1]/*[2]:)
//book[contains(title,"ay") or contains(title, "ry")]