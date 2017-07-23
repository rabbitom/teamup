// community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filter: "",
    selectedIndex: -1,
    people: [
      {
        show: true,
        name: "Richard",
        avatar: "../../images/richard.jpg",
        skills: ["Ruby", "AWS"],
        ideas: ["01"],
        introduction: "I leanred ruby in a weekend. I'm founder of PiedPiper. I invented the most advanced compression algorithm Middle-out."
      },
      {
        show: true,
        name: "Jared",
        avatar: "../../images/jared.jpg",
        skills: ["Node.js", "Angular"],
        ideas: ["02"],
        introduction: "I'm a JavaScript full-stack engineer. I do backend and frontend at same time. Looking for something cool to build!"
      },
      {
        show: true,
        name: "Gilfoyle",
        avatar: "../../images/gilfoyle.jpg",
        skills: ["FullStack", "Architect"],
        introduction: "I'm a full statck engineerer and a senior system architect. I set up a GPU based server farm in garage. I have a lot of expierence dealing with network attacks."
      },
      {
        show: true,
        name: "Dinesh",
        avatar: "../../images/dinesh.jpg",
        skills: ["UI/UX", "iOS", "Java"],
        introduction: "I can code fluently in Java. I love brilliant code. I made a game-changing video chat app called Piper Chat. I did great frontend design for the famous 'Not Hotdog' App. "
      }
    ]
  },

  removeFilter: function() {
    for (var person of this.data.people)
      person.show = true;
    this.setData({ people: this.data.people });
  },

  onFilterChange: function(event) {
    var filter = event.detail.value;
    if ((filter !== undefined) && (filter.length > 0)) {
      filter = filter.toLowerCase();
      for (var person of this.data.people) {
        var show = false;
        for (var skill of person.skills)
          if (skill.toLowerCase().indexOf(filter) >= 0) {
            show = true;
            break;
          }
        person.show = show;
      }
      this.setData({ people: this.data.people });
    }
    else
      this.removeFilter();
  },

  onFilterClear: function(event) {
    this.setData({filter:""});
    this.removeFilter();
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