
/*
Ödevimizde bir çiftçiye yardım edeceğiz. Niko Amca anlaşmalı oldugu çorbacıya gerçek zamanlı istatistik vermek istiyor. Müslüman olan çorbacı sorduğu anda çorbalarda kullanabileceği kaç tane hayvan bacağı olduğu bilgisini almak istiyor.
Çiftlikteki hayvanlar bir array içerisinde karışık şekilde tutulacak ve bu çiftlikte sadece şu hayvanlar var:
- inek
- tavuk
- domuz
- koyun

Array örnegi: [”inek“, ”inek“, ”tavuk“, ”tavuk“, ”tavuk“, ”domuz“, ”domuz“, ”koyun“, ”koyun“ ]

Program verilen array üzerinden Müslüman çorbacıda kullanılabilir toplam hayvan bacağı sayısını bulacak ve console’a bastıracak.

*/

let hayvanlar = ["inek", "inek", "tavuk", "tavuk", "tavuk", "domuz", "domuz", "koyun", "koyun" ]

let toplambacak = 0;

for(let i=0; i<hayvanlar.length; i++){

   
    if(hayvanlar[i]==="inek" ||hayvanlar[i]==="koyun"  ){

        toplambacak+=4;

    }else if(hayvanlar[i]=="tavuk"){

        toplambacak+=2;
    }
   
   
} console.log("toplam bacak sayisi :  " +  toplambacak);