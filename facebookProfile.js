var facebookProfile = {
  name: "TJ",
  friends: 300,
  messages: ["Happy Birthday", "You're great!", "LOL", "TGIF"],

  postMessage: function (message) {
    //adds a new message string to the array
    facebookProfile.messages.push(message);
  },

  deleteMessage: function (index) {
    // removes the message corresponding to the index provided
    // In the following splice() method call,
    // - argument 1 = index from where the element has to be deleted
    // - argument 2 = count of elements to be deleted
    facebookProfile.messages.splice(index, 1);
  },

  addFriend: function () {
    // increases the friend count by 1
    facebookProfile.friends = facebookProfile.friends + 1;
    //friends += 1; // this statement is equivalent to the above
  },

  removeFriend: function () {
    // decreases the friend count by 1
    if (facebookProfile.friends > 0) facebookProfile.friends = facebookProfile.friends - 1;
  },
};
