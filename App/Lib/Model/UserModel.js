/****
 * 用户模型
 */

module.exports = Model(function(){
     return {
        getUserList:function(){
          return this.order('id').select().then(function(data){
               return data;
          });
        }
     }
});