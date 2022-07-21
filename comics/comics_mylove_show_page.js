let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4')
let div_btns = document.querySelector('#div_btns')

window.addEventListener('mousewheel', (e) => {
    if (e.wheelDelta > 0) {
        // alert("滑輪向上滾動");
        img1.style.transform = "translateY(20%)"
        img2.style.transform = "translateY(30%)"
        img3.style.transform = "translateY(40%)"
        img4.style.transform = "translateY(50%)"
        div_btns.style.transform = "translateY(-30px)"

    }
    if (e.wheelDelta < 0) {
        // alert("滑輪向下滾動");
        img1.style.transform = "translateY(0%)"
        img2.style.transform = "translateY(0%)"
        img3.style.transform = "translateY(0%)"
        img4.style.transform = "translateY(0%)"
        div_btns.style.transform = "translateY(100px)"
    }
})

function Open_del_page() {
    window.open("https://fan-hua-hsuan.github.io/comics/comics_mylove_del_comics");
}