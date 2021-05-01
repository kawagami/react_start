覺得是重點的筆記

- 20210428
    1. setState() 存回class 的值不一定會當下更新成最新的，找到的消息是說為了效能考量，有許多不同的解法，最重要的是要知道有這件事!!!
    2. class 裡面的methods 開啟了嚴格模式(use strick)，不透過instance直接調用this 會是undefine
        想用this 要bind綁定後才有this 能用，不然會是undefine
            有看到一種寫法，在事件綁定時直接寫成 {this.methodName.bind(this)} 直接綁this，在method 裡面才有this 能用
    3. onClick、onChange...等等的事件綁定要用小駝峰的型式
    4. render 裡面的函式要寫的時候要注意不要加() ，讓react 框架幫我在設定事件綁定的時間點調用函式

- 20210429
    1. 類中的方法可用箭頭函式的方式撰寫，可不用另外bind(this)。
        箭頭函式本身沒有this ，在其中使用this 的話會往外部(層)尋找可用的this ，在這狀況下會找到class 實體化後instance 的this
    2. 在constructor 中的this.state = {xxx:xxx...} 可寫在外層，state = {xxx:xxx...} 的型式。
        需要接值的話還是得靠在constructor

- 20210430
    1. 展開運算符 ...object
        在原生JS下 let object2 = {...object} 是代表複製一份資料給object2
        在react + babel 的情況下(只)可以在標籤內加{...object}使用，在此的含意是展開其內容
    2. 在class 中constructor 是否要接props 且 傳props給super 取決於是否要在constructor 中使用 this.props
    3. ref 使用方法有三種
        a. string 形式 : 會造成效率不佳，官方不推薦使用
        b. callback 形式 : 值的存取不是放在this.refs{} 算是利用ref 會自動callback的性質附值在instance 身上
        c. createRef API 形式 : 會將使用此容器的node 存回容器，要取值的話 容器.current.value
            用React.createRef() 產生的容器只能存一筆資料，後面再call 同一個容器的話會被後面的資料覆蓋過去
            要存一筆資料就要有一個容器
    4. react class 中的 methods 第一個參數是被call 當下的event
        在form 中被call 的狀況可在method 內的第一行執行event.preventDefault() 來停止form 預設的get 傳參

- 20210501
    1. Uncontrolled Component 隨傳隨用，主要使用refs 取得外部傳入的資料使用，官網推薦少用refs (效能問題)
    2. Controlled Component 儲存後需要時再取用，使用state 配合onChange...等等的事件處理達成目的
    3. 在 onChange={this.saveFormData} 這種語句中，代表將class 內的方法saveFormData 交給react 在該事件時幫我call
        1. onChange={this.saveFormData(parament)} 寫了小括號後react 會call 的部份是**該方法的return 部份**
        ```js
        // parament 是小括號傳入的參數
        // event 是react 包好的SyntheticEvent 當下element 的object
        savaFormData = (parament) => {
            return (event) => {
                this.setState({ [parament]: event.target.value })
            }
        }
        ```
    



