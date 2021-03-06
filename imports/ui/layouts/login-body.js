import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './login-body.html';

Template.Login_body.onCreated(function loginBodyOnCreated() {
  this.subscribe('userData');

  if (!!Meteor.user()) {
    if (!Meteor.user().profile.studentData) {
      FlowRouter.go('App.edit');
    } else {
      FlowRouter.go('App.home');
    }
  }
});