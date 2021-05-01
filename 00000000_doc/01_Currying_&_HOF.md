- Currying & HOF 筆記

- [參考網址](https://cythilya.github.io/2019/02/06/currying-decorator-hoc/)

- What is Currying?
    1. 通過函式調用繼續返回函式的方式，實現多次接收參數最後統一處理的函式編碼形式
    2. 指函式一次接受一個參數，利用 closure（閉包）特性，將它們存放在另一個函式中並回傳，直到參數蒐集完畢才做計算，目的是將大問題切割成小問題，以便逐步解決。
- What is HOF(High-Order Function)?
    1. 如果一個function 符合下面兩個狀況中的任何一個，則此function 就是高階函式(high-order function)
        1. 若A function，**接收的parameter 是一個function**，此時A function 就可稱為high-order function
        2. 若B function，**return 的內容是一個function**，此時B function 就可稱為high-order function





