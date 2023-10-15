// console.log('olay başladı')

// 1.adım tıklanılna kotugun sarıya boyanması
// 2.adım toplam ücretin hesaplanması
// 2.Adımın yapımı için ;
// 1.adım önce tıklamılan elemanların seat ve selected olanları bul
// film fiyatını bul


const seats=document.querySelectorAll('.seat:not(.reserved')
// console.log(seats)



const calculateTotal=()=>{
    // console.log('heasplama calıstı')
    
    console.log(movie.value)


    // her tıklamada fonksiyon calısır ve hem seat hemde selected calsına sahip elemedti bulur ve değişkena atar
    let selectedSeatsCount=container.querySelectorAll('.seat.selected').length
    // console.log(selectedSeatsCount)

    if(selectedSeatsCount > 0){
     infoText.style.display='block'   
    }else{
       infoText.style.display='none' 
    }

    let price=movie.value
    // console.log(price)
    let total=price*selectedSeatsCount
    // console.log(total)

    infoText.innerHTML=`
    <span >${selectedSeatsCount} </span>Koltuk İçin Hesaplanan <span >${total}</span>TL
 
    `
saveToDatebase(selectedIndexs)


}


calculateTotal()



// htmldeki clası çağırıyoruz
const container=document.querySelector('.container')
// console.log(container)

const infoText=document.querySelector('.infoText')
// console.log(infoText)

const movie=document.getElementById('movie')
// console.log(movie.value)

// addeventlistener ile bu html  elamanına olay izleyisicisi veriyıruz burada olay clik oluyor
// mouseEvent ise (e) ile yazılabilir genelde ve mouse event bize her tıklamada bir takım paramterleer döndurur
container.addEventListener('click',(mouseEvent)=>{      
// console.log(mouseEvent.target.offsetParent)

// 1-tıklanılan elemanın classlisti seat clasını içerecek reserced clası içermeycek
// 2-yukardaki aşamayaı sağlayacak sorgu olusturacagız
// 3-sorgunun olumlu sonuclanması halnde gelen eleman bizim boş koltugumzudur
// 4-toogle ile tıklanınca selected clasını ekle cıkar yapacagız 
if(mouseEvent.target.offsetParent.classList.contains('seat')&&
!mouseEvent.target.offsetParent.classList.contains('reserved')){
 
    
mouseEvent.target.offsetParent.classList.toggle('selected')

}


})


movie.addEventListener('change',()=>{
    // console.log(movie.value)
})
const getSeatsDataFromDatabase=()=>{
//secilen filmin index verisini getirtoruzzzzzz

const  dbselectedMovie=JSON.parse(localStorage.getItem('movieIndex'))
if(dbselectedMovie)
{
  movie.selectedIndexs=dbselectedMovie  
}
const dbselectSeats=JSON.parse(localStorage.getItem('selectedIndex'))
// console.log(dbselectSeats)

if(dbselectSeats!==null&& dbselectSeats.length>0){


    seats.forEach((seat,index)=>{
        if(dbselectSeats.indexOf(index) > -1){
            seat.classList.add('selected')
        }

    })
}
}
//veritabanı kayıt fonsiyonu
const saveToDatebase=(seatIndexData)=>{   
    
    
    ///LOCAL STORAGE BASİT VERİLERİ TARAYICI HAFIZASINDA TUTMAK İÇİN KLLANIRILIR
    //VERİLERİ JSON FORMATINDA KAYDEDER
    //LOCAL STORAGE SETITEM(KEY VALUE VERİ EKLER)
    //LOCALSTORAGE.GET ITEM(KEY) VERİLERİ OKUR
localStorage.setItem('selectedIndex',JSON.stringify(seatIndexData))
localStorage.setItem('movieIndex',JSON.stringify(movie.selectedIndexs))
}




//getSeatsDataFromDatabase()
// ****veritabanı işlemleri*****

// 1-secilen koltukların bilgisi
// 2-tüm koltukalrın indeksi

const selectedSeats=container.querySelectorAll('.seat.selected')
// console.log(selectedSeats)


// tüm secilen koltukları nodelisten normal diziye döndürürken kullanacagız
const allSeatsArray=[]
const allSelectedSeatsArray=[]

seats.forEach((seat)=>{
    allSeatsArray.push(seat)
})
// console.log(allSeatsArray)


selectedSeats.forEach((selectedSeat)=>{
    allSelectedSeatsArray.push(selectedSeat)
})

// console.log(allSelectedSeatsArray)

let selectedIndexs=allSelectedSeatsArray.map((allSelectedSeat)=>{
    console.log(allSeatsArray.indexOf(allSelectedSeat))
})

//onsole.log(selectedIndexs)