## 说明：

1. demoTwo 展示3个 lifecycle 的使用场景。

2. 注意分析 demoTwo 的 console 情况，父组件和子组件的 lifecycle 运行顺序有一定的规律。

3. 关于 shouldComponentUpdate，它的默认为 `return true`，也就是说，存在一种情况，就算父组件没有传递参数给子组件，当父组件 rerender 的时候，子组件也是会一起 rerender 的，如果不希望在这个情况下子组件也 rerender，需要手动设为 `return false`。详细见 demo2/Sub.js

4. 第3点的观点也可以解释为，父组件的 rerender 也是导致子组件 rerender 的原因之一，即使在没有输入参数或者参数不变的情况下。

5. shouldComponentUpdate | PureComponent | react.memo
