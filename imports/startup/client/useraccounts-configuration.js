import { FlowRouter } from 'meteor/kadira:flow-router';
import { AccountsTemplates } from 'meteor/useraccounts:core';

Accounts.onLogin(function() {
  if (!Meteor.user().profile.studentData) {
    FlowRouter.go('App.edit');
  } else {
    FlowRouter.go('App.home');
  }
});
