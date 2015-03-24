/****
 * 用户模型
 */

module.exports = Model(function () {
    return {
        getFiledList: function () {
            return this.order('id').select().then(function (data) {
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