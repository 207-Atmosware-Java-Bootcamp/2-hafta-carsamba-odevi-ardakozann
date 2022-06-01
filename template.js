// Kullanıcıda tarafından aldığımız 2 tane sayının
 var number1,number2;
 number1=Number(prompt("1.sayıyı giriniz"));
 number2=Number(prompt("2.sayıyı giriniz"));

// s1-) Bu sayılardan en küçüğü nedir ?
 document.write("En küçüğü: "+ Math.min(number1,number2)+"<br/>")

// s2-) Bu sayılardan en büyüğü nedir ?
 document.write("En büyüğü: "+ Math.max(number1,number2)+"<br/>")

// s3-) Bu sayılardan en küçüğü karekökü nedir ?
 document.write("en küçüğü karekök: "+Math.sqrt(Math.abs(Math.min(number1,number2)))  +"<br/>")

// s4-) Bu sayılardan en küçüğü karekökünün üste yuvarlıyalım nedir ?
document.write("en küçüğü karekökünün üste yuvarlı: "+Math.ceil(Math.sqrt(Math.abs(Math.min(number1,number2))))    +"<br/>")

// s5-) Bu sayılardan en büyüğü mutlak nedir ?
document.write("en büyüğünün mutlak değeri: " + Math.abs(Math.max(number1,number2))+"<br/>");

// s6-) Bu sayılardan en büyüğü alt taban en küçüğü üst taban şeklinde üstünü alalım
 document.write(  "En büyüğü alt taban en küçüğü üst taban: "+
   Math.pow(Math.abs(Math.max(number1,number2)), Math.abs(Math.min(number1,number2))) + "<br/>");

////////////////////////////////////////////////

// kullanıcı tarafından girilen bir kelimenin
var kelime;
kelime=prompt("Kelime giriniz");
//S-1) Kaç karakterlidir ?
document.write(kelime.length+"<br/>");
//S-2) boşluklar alınarak Kaç karakterlidir ?
document.write(kelime.trim().length+"<br/>");
//S-3) bütün kelimeyi küçük harfle göstermek ?
document.write(kelime.toLowerCase()+"<br/>");
//S-4) bütün kelimeyi büyük harfle göstermek ?
document.write(kelime.toUpperCase()+"<br/>");
//S-5) ilk harf nedir  ?
document.write(kelime.charAt(0)+"<br/>");
//S-6) girdiğiniz kelime java ile başlıyor mu  ?
document.write(kelime.startsWith("java")+"<br/>");
//S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum"   ?
document.write(kelime.concat("-ben js öğreniyorum")+"<br/>");
//S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin   ?
var numberOfIndex=prompt("Sayı giriniz");
document.write(kelime.charAt(numberOfIndex)+"<br/>");
//S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?
var yeniKelime=prompt("Yeni kelimeyi giriniz");
kelime=kelime.replace(kelime,yeniKelime);
document.write(kelime+"<br/>");




