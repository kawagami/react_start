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
        1. onChange={this.saveFormData(parameter)} 寫了小括號後react 會call 的部份是**該方法的return 部份**
        ```js
        // parameter 是小括號傳入的參數
        // event 是react 包好的SyntheticEvent 當下element 的object
        savaFormData = (parameter) => {
            return (event) => {
                this.setState({ [parameter]: event.target.value })
            }
        }
        ```
        2. 所以如果return 部份是一個function 就能達成在onChange={} 中填入this.saveFormData(parameter) 這種形式
            1. 此狀況下return 的function 每次在其元素改變的時候就會被調用(reference)，且react 幫我調用的時候都會把包好的event 放進第一個參數
    
- 20210504
    1. shouldComponentUpdate <= setState()
        1. return 必須為true or false
        2. 預設為true
        3. return false 時 componentWillUpdate、render、componentDidUpdate、componentWillUnmount 皆不會被call
    2. componentWillUpdate <= forceUpdate()
        1. 不受shouldComponentUpdate return false 的阻擋，可強制更新。用於沒更新state 也要更新的狀況...之類的。
    3. parent component
        1. componentWillReceiveProps 在**初次render 頁面的時候不會被call**

- 20210505
    1. in old lifecycle, componentWillMount & componentWillReceiveProps & componentWillUpdate 在16版被列入未來可能要加**UNSAFE_**前綴
        1. componentWillMount : **掛載時**，constructor後，render前
        2. componentWillReceiveProps : **更新時**，shouldComponentUpdate前
        3. componentWillUpdate : **更新時**，shouldComponentUpdate後，render前
    2. in new lifecycle, adding getDerivedStateFromProps & getSnapshotBeforeUpdate 在17版新增
        1. getDerivedStateFromProps : **掛載時**，constructor後，render前。**更新時**，shouldComponentUpdate前
        2. getSnapshotBeforeUpdate : **更新時**，render後，componentDidUpdate前

- 20210506
    1. getDerivedStateFromProps(props, state) : 
        1. return obj 時會使state變成該obj ，如果return 的是接到的第一個參數props 就會使state變成props 的值並且無法修改

- 20210509
    1.  getSnapshotBeforeUpdate
        1. 需要取得目前scroll高度時會用到

- 20210512
    1. 在foreach中使用index當作key來用的話會有的問題
        1. 反向新增、反向刪除...等等類似的操作會造成
            1. **render數量-1的效能浪費**(數量越大越多沒必要的浪費)
            2. 結構中包含輸入類的DOM的話，資料會錯位、不相符
        * 建議使用唯一的識別資料(ex:id)來當作key

- 20210518
    1. 在import {xxx} from yyy 的 {xxx} 不是解構賦值的用法，而是在yyy 裡面有多個export 的輸出，其中之一是 export class xxx 這種形式
        - const {aaa} = bbb 這種才是解構賦值的用法
            - [參考影片](https://youtu.be/DxNQObgXCTY?list=PLmOn9nNkQxJFJXLvkNsGsoCUxJLqyLGxu&t=906)

- 20210519
    1. module of css
        * 在檔案名xxx.css 中間加入module 成為xxx.module.css 這種形式的話就能用import yyy from './路徑/xxx.module.css' 作為module import
            - 要使用的話是以**className={yyy.類名}**這種形式使用


