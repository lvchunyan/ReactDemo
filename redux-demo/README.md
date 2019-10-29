![avatar](./image/Redux_list.png)

### Redux是一个用来管理管理数据状态和UI状态的JavaScript应用工具

### Redux工作流程

![avatar](./image/Redux_flow.png)

![avatar](./image/redux_flow_book.png)

### Ant Design介绍和环境初始化
 
 > npm install antd --save
 
### 创建Redux中的仓库-store和reducer

 > npm install --save redux
 
 - 编写创建store仓库
 
   在src目录下创建一个store文件夹,然后在文件夹下创建一个index.js文件
   ```js
   import { createStore } from 'redux'  // 引入createStore方法
   const store = createStore()          // 创建数据存储仓库
   export default store                 //暴露出去
   ```
   已经建立好了仓库，但是这个仓库很混乱，这时候就需要一个有管理能力的模块出现，这就是Reducers
 
 - 在store文件夹下，新建一个文件reducer.js
   ```js
    const defaultState = {}  //默认数据
    export default (state = defaultState,action)=>{  //就是一个方法函数
        return state
    }
   ```
   
 - 把reducer引入到store中,再创建store时，以参数的形式传递给store
   ```js
   import { createStore } from 'redux'  //  引入createStore方法
   import reducer from './reducer'    
   const store = createStore(reducer) // 创建数据存储仓库
   export default store   //暴露出去
   ```
   
 - 组件获得store中的数据
   
   在组件中，先引入store，在构造函数constructor使用this.state = store.getState()获取store中的信息直接复制给组件中的state
   
### 体验Redux的数据变化流程

 > 例如：通过input响应事件
 
 - 在Input组件上增加onChange响应事件
 
 ```js
  <Input 
      placeholder={this.state.inputValue} 
      style={{ width:'250px', marginRight:'10px'}}
      //---------关键代码----start
      onChange={this.changeInputValue}
      //---------关键代码----end
  />
 ```
 
 - 在constructor进行this的绑定，修改this的指向
 ```js
  constructor(props){
      super(props)
      this.state=store.getState();
      this.changeInputValue= this.changeInputValue.bind(this)
  }
 ```
 
 - 编写changeInputValue方法的代码, 创建Action
 
   想改变Redux里边State的值就要创建Action了。Action就是一个对象，这个对象一般有两个属性，第一个是对Action的描述，第二个是要改变的值。
 ```js
  changeInputValue(e){
      const action ={
          type:'change_input_value',
          value:e.target.value
      }
  }
  
  # action就创建好了，但是要通过dispatch()方法传递给store
  
  changeInputValue(e){
      const action ={
          type:'changeInput',
          value:e.target.value
      }
      store.dispatch(action)
  }
 ```
 
 - store的自动推送策略
 
   store只是一个仓库，它并没有管理能力，它会把接收到的action自动转发给Reducer,store文件夹下面的reducer.js文件
   
   ```js
   export default (state = defaultState,action)=>{
       console.log(state,action)
       return state
   }
   //state: 指的是原始仓库里的状态。
   //action: 指的是action新传递的状态。
   ```
   
   Reducer已经拿到了原来的数据和新传递过来的数据,改变store里的值，需要重新声明一个变量newState，然后再次用return返回回去
   Reducer里只能接收state，不能改变state
   
   ```js
    export default (state = defaultState,action)=>{
        if(action.type === 'changeInput'){
            let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
            newState.inputValue = action.value
            return newState
        }
        return state
    }

   ```
   
 - 让组件发生更新
   
   现在store里的数据已经更新了，但是组件还没有进行更新，我们需要打开组件文件，在constructor，写入下面的代码。
   
   ```js
    constructor(props){
        super(props)
        this.state=store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
        //----------关键代码-----------start
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
        //----------关键代码-----------end
    }
 
    //当然我们现在还没有这个storeChange方法，只要写一下这个方法，并且重新setState一次就可以实现组件也是变化的。在代码的最下方，编写storeChange方法。

    storeChange(){
         this.setState(store.getState())
    }
 
   ```
 