(function(){
  var due_date = new Date('2024-12-29');
  var days_deadline = 2;
  var current_date = new Date();
  var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
  var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
  var days_late = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

  if (days_late > days_deadline) {
    document.body.remove();
  }
})();
