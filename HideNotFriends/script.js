$(function() {
    var f = function() {
        var friendButton = $('.FriendButton');
        friendButton.parent().parent().parent().parent().parent().remove();
        setTimeout(f, 10000);
    };
    f();
});
