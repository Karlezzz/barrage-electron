# barrage_electron 开发日志



> 遗留问题
>
> 1 窗口宽度扩大，方便控制台展现，后期要调整
>
> 3.关闭窗口进行最小化和关闭选择
>
> 4.软件icon图标
>
> 5.未结束的投票结果需要定时请求数据进行刷新
>
> 6.设置软件图标，工具栏，任务栏右键
>
> 7.白天模式和黑夜模式

### 2023.2.28

1.完成脚手架和electron配置

2.路由配置，默认路径进入enter组件

3.主进程配置，设置窗口大小，主体不可移动，不可改变窗口大小，关闭electron窗口

4.HeadBar组件，用来移动窗口

5.ActionBar组件，窗口最小化，最大化，关闭功能

6.Enter静态页面



### 2023.3.1

1.完成窗口最小化，最大化，关闭的功能

2.完成roomid下拉列表选择和roomid输入框输入



### 2023.3.2

1.完成Main组件 Head部分，function部分的静态页面



### 2023.3.3

1.修复全屏Main组件页面大小适配

2.chat部分完成，弹幕发送，屏幕滚动总是在底端

3.在线人员展示部分

4.投票部分，大致完成，样式需要改变，明天继续完善



### 2023.3.4

1.拆分组件

2.完善Vote组件



### 2023.3.5

1.通过全局事件总线，Function组件控制FunctionDetail组件的展现

2.配置vue开发者工具session.defaultSession.loadExtension(path)

3.添加投票选项 修改投票选项（todoList案例）

​	用:value代替v-model   用e.target.value来改变数据（用一个变量，v-model绑定，会让多个input框内容一致）

​	在数组中添加isEdit来判断选项状态

4.createVote完成

5.historyVote完成，引入echart图标展示投票结果
