// ideas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ideas: [
      {
        title: "Chat app about hobbies",
        memberCount: 5,
        skills: ["iOS", "Android", "Backend"],
        introduction: "Users would sign up, choose their hobbies, find people with same ones, chat and make date for offline events."
      },
      {
        title: "Mechine learning of traffic",
        memberCount: 1,
        skills: ["Python", "BigData"],
        introduction: "Analysis realtime traffic information and make route suggestion with meachine learning."
      },
      {
        title: "IoT Sensor platform",
        memberCount: 2,
        skills: ["Embedded", "Architect"],
        introduction: "Build an platform to gather data from massive IoT sensors around the world. The key to this is a highly scalable cloud infrastructure."
      }
    ]
  },

  onClickIdea: function(event) {
    wx.showActionSheet({
      itemList: ["Join the team"],
    })
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