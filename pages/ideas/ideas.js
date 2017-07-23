// ideas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedIndex: -1,
    ideas: [
      {
        show: true,
        title: "Chat app about hobbies",
        memberCount: 5,
        skills: ["iOS", "Android", "Backend"],
        introduction: "Users would sign up, choose their hobbies, find people with same ones, chat and make date for offline events."
      },
      {
        show: true,
        title: "Mechine learning of traffic",
        memberCount: 1,
        skills: ["Python", "BigData"],
        introduction: "Analysis realtime traffic information and make route suggestion with meachine learning."
      },
      {
        show: true,
        title: "IoT Sensor platform",
        memberCount: 2,
        skills: ["Embedded", "Architect"],
        introduction: "Build an platform to gather data from massive IoT sensors around the world. The key to this is a highly scalable cloud infrastructure."
      }
    ]
  },

  removeFilter: function () {
    for (var idea of this.data.ideas)
      idea.show = true;
    this.setData({ ideas: this.data.ideas });
  },

  onFilterChange: function (event) {
    var filter = event.detail.value;
    if ((filter !== undefined) && (filter.length > 0)) {
      filter = filter.toLowerCase();
      for (var idea of this.data.ideas) {
        var show = false;
        for (var skill of idea.skills)
          if (skill.toLowerCase().indexOf(filter) >= 0) {
            show = true;
            break;
          }
        idea.show = show;
      }
      this.setData({ ideas: this.data.ideas });
    }
    else
      this.removeFilter();
  },

  onFilterClear: function (event) {
    this.setData({ filter: "" });
    this.removeFilter();
  },

  onClickIdea: function(event) {
    wx.showActionSheet({
      itemList: ["Join the team"],
    })
  },

  onTouchStart: function (event) {
    var index = event.currentTarget.dataset.index;
    if (index !== undefined)
      this.setData({ selectedIndex: index });
  },

  onTouchStop: function (event) {
    this.setData({ selectedIndex: -1 });
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