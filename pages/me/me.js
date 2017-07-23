//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    showSkillInput: false,
    skillInputValue: '',
    userInfo: {},
    user: {
      name: "Tom",
      avatar: "https://wx.qlogo.cn/mmopen/vi_32/rX2Oiaqib2QGM5jBCLNUJLribFl6gp6LSqQN2IGTd8dPViaH5gicYUNINhbqicNLnSnSeZVrV8yFq50nkKUQ0bWYJFIw/0",
      skills: [],
      ideas: [{
        id: "1",
        title: "IoT Sensor Platform",
        skills: ["UI", "Cloud"],
        introduction: "Build an platform to gather data from massive IoT sensors around the world. The key to this is a highly scalable cloud infrastructure."
      }],
      introduction: "I'm a developer focusing on IoT applications. I'm intrested in cross-platform developing. My favorite programming languages are JavaScript and C#."
    },
    skillsTitle: {
      title: "My Skills"
    },
    introductionTitle: {
      title: "Self Introduction"
    },
    ideasTitle: {
      title: "My Ideas"
    }
  },
  addSkill: function () {
    this.setData({showSkillInput: true});
  },
  onSkillInputDone: function(event) {
    var newSkill = event.detail.value;
    if((newSkill !== undefined) && (newSkill.length > 0)) {
      var skills = this.data.user.skills;
      if(skills.indexOf(newSkill) < 0) {
        skills.push(newSkill);
        this.setData({
          user: this.data.user
        });
      }
    }
    this.setData({ showSkillInput: false, skillInputValue: "" });
  },
  onSkillInputCancel: function(event) {
    this.setData({ showSkillInput: false, skillInputValue: "" });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
