layui.use(['form', 'layedit', 'laydate'], function(){
    var form = layui.form()
        ,layer = layui.layer
        ,layedit = layui.layedit
        ,laydate = layui.laydate;


    //创建一个编辑器  
    layedit.build('LAY_demo_editor');

    //监听提交  
    form.on('submit(demo1)', function(data){
        layer.alert(JSON.stringify(data.field), {
            title: '最终的提交信息'
        })
        return false;
    });


}); 



$(function () {
    var showhinttext=$("#showhint").val();
    if (showhinttext=="1"){
        layer.msg('恭喜你，添加成功！');
    }else if (showhinttext=="2") {
        layer.msg('对不起，添加失败！');
    }
    else if (showhinttext=="") {

    }
})

