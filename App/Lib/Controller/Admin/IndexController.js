/**
 * controller
 * @return
 */

module.exports = Controller("Base/BaseController", function () {
    "use strict";
    return {
        indexAction: function () {
            this.display();
        },
        listAction: function () {
            var self = this;
            var  filed = D('filed');
            filed.getFiledList().then(function(data){
                self.assign({
                    list:data
                })
                self.display();
            })
        },
        addAction:function(){

            if(this.isGet()){
                this.display();
                return;
            }
            if(this.isPost()){
                var post = this.post();
                if(post && post['lnglat'] && post['lnglat'].indexOf(',')>0){
                    var lnglat = post['lnglat'];
                    delete  post[lnglat];
                    post['lon'] = lnglat.split(',')[0];
                    post['lat'] = lnglat.split(',')[1];
                }
                post['deleted'] = 0;
                post['valid'] = 1;
                var  filed = D('filed');
                filed.addFiled(post);
                this.display();

            }
        }
    };
});