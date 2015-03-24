module.exports = {
  //配置项: 配置值
  port: 8360, //监听的端口
  db_type: 'mysql', // 数据库类型
  db_host: '127.0.0.1', // 服务器地址
  db_port: '3306', // 端口
  db_name: 'eleven', // 数据库名
  db_user: 'root', // 用户名
  db_pwd: 'root', // 密码
  db_prefix: 'eleven_', // 数据库表前缀
  url_pathname_suffix:'.html',// url 后缀
  app_group_list:['Base','Home','Admin'],
  default_group: 'Home', //默认分组
  default_controller: 'Index', //默认控制器
  default_action: 'index',  //默认操作
  action_suffix: 'Action'
};