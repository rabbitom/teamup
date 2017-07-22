// community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedIndex: -1,
    people: [
      {
        name: "Tom",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/rX2Oiaqib2QGM5jBCLNUJLribFl6gp6LSqQN2IGTd8dPViaH5gicYUNINhbqicNLnSnSeZVrV8yFq50nkKUQ0bWYJFIw/0",
        skills: ["iOS", "Android", "AWS"],
        ideas: ["01"],
        introduction: "I'm a developer focusing on IoT applications. I'm intrested in cross-platform developing. My favorite programming languages are JavaScript and C#."
      },
      {
        name: "Jerry",
        avatar: "http://up.qqjia.com/z/face01/face06/facejunyong/junyong27.jpg",
        skills: ["Node.js", "Angular"],
        introduction: "I'm a JavaScript full-stack engineer. I do backend and frontend at same time. Looking for something cool to build!"
      },
      {
        name: "Donald",
        avatar: "http://sc.admin5.com/uploads/allimg/100210/113629E45-2.png",
        skills: ["UI/UX"],
        ideas: ["02"],
        introduction: "I'm a designer. I can help if someone need UI/UX designing. And I do have an idea about building an app for people to chat about their hobbies. Feel free to message me if you are intrested."
      },
      {
        name: "Jack",
        avatar: "http://up.qqjia.com/z/face01/face06/facejunyong/junyong02.jpg",
        skills: ["Python", "AI"],
        introduction: "I'm a developer, focusing on IoT applications. I'm intrested in cross-platform developing. My favorite programming languages are JavaScript and C#."
      }
    ]
  },

  onClickPerson: function(event) {
    wx.showActionSheet({
      itemList: ["Send Invitation"],
    });
  },

  onTouchStart: function(event) {
    var index = event.currentTarget.dataset.index;
    if(index !== undefined)
      this.setData({selectedIndex: index});
  },

  onTouchStop: function(event) {
    this.setData({selectedIndex: -1});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})