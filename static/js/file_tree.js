$(function () {
  $('#jstree').jstree({
    'core' : {
      "themes" : { "dots" : false },
      'data' : {
        'url' : function (data) {
          return data.id === '#' ?
          '/static/teams/file_tree.json' :
          '/static/teams/file_tree_children.json';
        },
        'data' : function (data) {
          return { "id" : data.id };
        }
      }
    }
  });

  $('#jstree').on('changed.jstree', function (e, data) {
    var i, j, r = [];
    for(i = 0, j = data.selected.length; i < j; i++) {
      r.push(data.instance.get_node(data.selected[i]).text);
    }
    $('#jstree-selection').html('<br><b>Selected: ' + r.join(', ')+'</b>');
  }).jstree(); // create the instance
});