const yeniSatir = "\n"

let secim = Number(prompt("Lütfen kullanmak istediğiniz uygulamanın numarasını giriniz : " + yeniSatir +
    "1-Asal Sayı Bulma" + yeniSatir +
    "2-Faktöriyel bulma" + yeniSatir +
    "3-Armstrong sayı bulma" + yeniSatir +
    "4-Mükemmel sayı bulma" + yeniSatir +
    "5-Çarpım tablosu yazdırma"))

switch (secim) {
    case 1:
        //Asal sayı
        let sayi = Number(prompt("Lütfen bir sayı giriniz : "))
        if (2 < sayi) {
            for (let i = 2; i < (sayi / 2); i++) {
                if (sayi % i == 0) {
                    alert(sayi + " : Asal sayı değildir !")
                    break;
                } else {
                    alert(sayi + " : Asal sayıdır !")
                    break;
                }
            }
        } else {
            alert("Lütfen 2'den büyük bir sayı giriniz !")
        }
        break;

    case 2:
        //Faktöriyel
        let toplam = 1
        let sayi1 = Number(prompt("Lütfen bir sayı giriniz : "))
        if (1 < sayi1) {
            for (let i = 1; i <= sayi1; i++) {
                toplam = toplam * i
            } alert(sayi1+"! = "+toplam)
        } else {
            alert("Lütfen 1'den büyük bir sayı giriniz !")
        } break;

    case 3:
        //Armstrong
        let sayi2 = prompt("Lütfen bir sayı giriniz : ")
        let toplam2 = 0

        if (0 < sayi2) {
            for (let i = 0; i < sayi2.length; i++) {
                toplam2 += sayi2.charAt(i) ** 3
            }
            if (toplam2 == sayi2) {
                alert(sayi2 + " : Armstrong sayıdır !")
            } else {
                alert(sayi2 + " : Armstrong sayı değildir !")
            }
        } else {
            alert("Lütfen 0'dan büyük bir sayı giriniz")
        } break;
    case 4:
        //Mükemmel sayi
        let sayi3 = Number(prompt("Lütfen bir sayı giriniz : "))
        let toplam3 = 0
        for (let i = 2; i <= sayi3 / 2; i++) {
            if (sayi3 % i == 0) {
                toplam3 += i
            }
        }
        toplam3 += 1 + sayi3
        if (toplam3 == sayi3 * 2) {
            alert(sayi3+" : Mükemmel Sayıdır !")
        } else {
            alert(sayi3+" : Mükemmel Sayı Değildir !")
        } break;
    case 5:
        //Çarpım tablosu
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                console.log(i + "x" + j + "=" + (i * j))
            }
            console.log("------------------")
        } alert("Çarpım tablosu konsol'a yazdırıldı !")
        break;
    default:
        alert("Lütfen 1-5 arası bir sayı giriniz !")
}