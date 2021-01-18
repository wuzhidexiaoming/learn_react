## 笔记

1. 状态驱动页面

## 组件

1. 实列常用属性 state props refs

## 疑问

1. 为什么类式组件需要继承而函数式组件不需要？
2. 类继承 super 不是必须调用的吗？
3. 类组件中 render 函数中打印 this 是带 state 属性的,但是如果再外面 打印 new ClassName 就不带 state 属性,这是为什么?
4. 为什么类组件中普通方法中的 this 为 undefined?必须要在构造方法中通过 bind 改变 this 呢?
5. onClick 绑定事件函数中 的 this 不是应该指向节点本身么?为什么会是 undefined 呢?
6. https://codepen.io/gaearon/pen/ozJddz?editors=0010 示例中的 `unreadMessages.length > 0` 为什么此处是表达式且返回值为 false 的时候,
   页面没有显示 false
   - 因为是 jsx 语法,经过 babel 编译后,花括号的返回值作为 React.createElement 的第三个参数传入,而第三个参数是子元素,所以当返回值为 false 或者是不符合格式的数据时,页面就不会输出内容
