/****
 * 用户模型
 */

module.exports = Model(function () {
    return {
        getFiledList: function (opt) {
            var option ={};
            extends(option,{'deleted':0,'valid':1},opt);
            return this.where(option).order('id').select().then(function (data) {
                return data;
            });
        },
        addFiled: function (data) {
            this.add(data).then(function(insertId){
                 return insertId;
            }).catch(function(err){
                console.log("插入数据错误",err);
            })
        }

    }
})
;