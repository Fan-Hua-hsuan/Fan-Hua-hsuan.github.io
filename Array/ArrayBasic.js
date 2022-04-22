let Price = [100, 200, 300];

//傳統寫法，加上5%營業稅
let priceArray = [];
Price.forEach((p) => {
    priceArray.push(p * 1.05);
});
console.log(priceArray);

// Map()
let PriceTax = Price.map(x => x * 1.05);

let PriceWithTax = Price.map(function (p) {
    p = p * 1.05; //plus 5% sales tax
    p = p / 29; //Convert to US dollars

    return p
});

let PriceTax = Price.reduce(PriceConputer);







// 傳統寫法，計算加總
let Total = 0;
Price.forEach9((p) => {
    Total = Total + p;
});
console.log(Total);