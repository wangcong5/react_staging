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