var app = getApp()
Page({
    data: {
        "request_lin":"1234"
    },
    onLoad: function(options) {

        var that = this
        
        wx.request({
            url: 'http://www.huanqiuxiaozhen.com/wemall/venues/getBrandAndType?id=' + options.id,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    brandList: res.data.data
                });
            }
        })
    }

})