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



### 2023.3.6

1.调整histroyVote组件结构，解决echart被压缩问题

2.完成qrCode界面

3.functionList加上过渡动画

4.开启弹幕，打开子窗口，关闭弹幕关闭子窗口（background.js中 窗口实例放在window对象中）



2023.3.8

1.重构background.js文件

2.进行多页面入口改造，配置两个"main.js" 和 "App.vue"，在vou.config.js中配置

3.构建弹幕区域组件，使用vue-baberrage插件完成弹幕效果，样式还未设定



### 2023.3.13

1.建立建简易websocket服务器

2.连接websocket，实现建议通信。获取服务器数据存入vuex中，消息遍历的数据从vuex中获取
