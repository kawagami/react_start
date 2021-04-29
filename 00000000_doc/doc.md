覺得是重點的筆記

20210428
    1. setState() 存回class 的值不一定會當下更新成最新的，找到的消息是說為了效能考量，有許多不同的解法，最重要的是要知道有這件事!!!
    2. class 裡面的methods 開啟了嚴格模式(use strick)，不透過instance直接調用this 會是undefine
        想用this 要bind綁定後才有this 能用，不然會是undefine
            有看到一種寫法，在事件綁定時直接寫成 {this.methodName.bind(this)} 直接綁this，在method 裡面才有this 能用
    3. onClick、onChange...等等的事件綁定要用小駝峰的型式
    4. render 裡面的函式要寫的時候要注意不要加() ，讓react 框架幫我在設定事件綁定的時間點調用函式

20210429
    1. 類中的方法可用箭頭函式的方式撰寫，可不用另外bind(this)。
        箭頭函式本身沒有this ，在其中使用this 的話會往外部(層)尋找可用的this ，在這狀況下會找到class 實體化後instance 的this
    2. 在constructor 中的this.state = {xxx:xxx...} 可寫在外層，state = {xxx:xxx...} 的型式。
        需要接值的話還是得靠在constructor

