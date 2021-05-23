路由的基本使用
1、明确好届面中的导航区、展示区
2、导航区的a标签改为Link标签
    <Link to='/xxx'>Demo</Link>
3、展示区写Route标签进行路由匹配
    <Route path='/***' component={Demo}></Route>
4、<APP>最外侧包裹一个<BrowserRouter>或<HashRouter>