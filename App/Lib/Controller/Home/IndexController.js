/**
 * controller
 * @return 
 */
module.exports = Controller("Base/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
      //render View/Home/index_index.html file
      this.display();
    },
    filedListAction:function(){
        var filed = D('filed');
         filed.getFiledList();
    }
  };
});