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
      ideas: [],
      introduction: ""
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
  onIntroductionInputDone: function(event) {
    var newIntro = event.detail.value;
    console.log("new intro: " + newIntro);
    if(newIntro !== undefined) {
      this.data.user.introduction = newIntro;
      this.setData({user:this.data.user});
    }
  },
  onClearIntroduction: function() {
    this.data.user.introduction = "";
    this.setData({user: this.data.user});
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
  addNewIdea: function(event) {
    var newIdea = {
      id: "1",
      title: "",
      skills: [],
      showSkillInput: false,
      skillInputValue: "",
      introduction: ""
    };
    this.data.user.ideas.push(newIdea);
    this.setData({user:this.data.user});
  },
  onRemoveIdea: function(event) {
    var index = event.target.dataset.index;
    if(index !== undefined) {
      this.data.user.ideas.splice(index,1);
      this.setData({user: this.data.user});
    }
  },
  onIdeaTitleInputDone: function(event) {
    var index = event.target.dataset.index;
    if (index !== undefined) {
      var idea = this.data.user.ideas[index];
      var newTitle = event.detail.value;
      if ((newTitle !== undefined) && (newTitle.length > 0))
        idea.title = newTitle;
      this.setData({ user: this.data.user });
    }
  },
  onAddSkillForIdea: function(event) {
    var index = event.target.dataset.index;
    if (index !== undefined) {
      var idea = this.data.user.ideas[index];
      idea.showSkillInput = true;
      this.setData({user: this.data.user});
    }
  },
  onIdeaSkillInputDone: function(event) {
    var index = event.target.dataset.index;
    if (index !== undefined) {
      var idea = this.data.user.ideas[index];
      var newSkill = event.detail.value;
      if ((newSkill !== undefined) && (newSkill.length > 0)) {
        if (idea.skills.indexOf(newSkill) < 0) {
          idea.skills.push(newSkill);
        }
      }
      idea.showSkillInput = false;
      this.setData({ user: this.data.user });
    }
  },
  onIdeaSkillInputCancel: function(event) {
    var index = event.target.dataset.index;
    if (index !== undefined) {
      var idea = this.data.user.ideas[index];
      idea.showSkillInput = false;
      this.setData({ user: this.data.user });
    }
  },
  onIdeaIntroductionInputDone: function(event) {
    var index = event.target.dataset.index;
    if (index !== undefined) {
      var idea = this.data.user.ideas[index];
      var newIntro = event.detail.value;
      if ((newIntro !== undefined) && (newIntro.length > 0))
        idea.introduction = newIntro;
      this.setData({ user: this.data.user });
    }
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
