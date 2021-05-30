路由的基本使用
1、明确好届面中的导航区、展示区
2、导航区的a标签改为Link标签
    <Link to='/xxx'>Demo</Link>
3、展示区写Route标签进行路由匹配
    <Route path='/***' component={Demo}></Route>
4、<APP>最外侧包裹一个<BrowserRouter>或<HashRouter>
5、NavLink与封装NavLink
    （1）NavLink可实现路由链接的高亮，通过activeClassName指定样式名
    （2）标签体内容是一个特殊的标签属性
    （3）通过this.props.children可以获取标签体内容
6、Switch的使用
    （1）通常情况下，path和component是一一对应关系
    （2）Switch可以提高路由的匹配效率（单一匹配）

7、解决多级结构时，刷新页面样式丢失问题
    <!-- <link rel="stylesheet" href="./css/bootstrap.css"> -->
    （1）引入样式时不写./ 直接写/（常用）
    <!-- <link rel="stylesheet" href="/css/bootstrap.css"> -->
    (2)使用%PUBLIC_URL%指定public绝对路径（常用）
    <!-- <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css"> -->
    （3）使用HashRouter（不常用）

8、路由的严格匹配与模糊匹配
    （1）默认使用的是模糊匹配（【输入的路径】必须要包含【匹配的路径】，且顺序一致）
    （2）开启严格匹配(true可以不写)：<Route exact={true} path='/about' component={About} />
    （3）严格匹配不要随便开启，需要再打开，否则可能导致无法匹配二级路由

9、Redirect的使用
    （1）一般写在路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
    （2）具体编码
        <Route exact path='/about' component={About} />
        <Route path='/home' component={Home} />
        <Redirect to='/home'/>
10、嵌套路由
    (1)注册子路由时要写上父路由的path值
    (2)路由的匹配是按照路由的顺序进行的

11、向路由组件传递参数
    （1）params参数
        路由链接（携带参数）: <Link to='/demo/test/tom/18'>详情</Link>
        注册路由（声明接收）: <Route path='/demo/test/:name/:age' component={Test}/>
        接收参数: const {name, age} = this.props.match.params