(function() {
  'use strict';

//aa
  var vm = new Vue({
//aa
   el: '#app',
//aa
    data: {
      todos: [
        'task 1',
        'task 2',
        'task 3'
      ]
    },
    
    methods: {
      //eはなんだ？　preventDfaultが無くてもできるのか？　
      //addItem: function(e) {
      //e.preventDefault();
      //this.todos.push(this.newItem);
      
      
    addItem: function() {
//this：このドキュメント push：追加する this.newItem：これはhtmlで指定した変数？
      this.todos.push(this.newItem);
//テキストボックスの中身を空にしてあげる
      this.newItem = '';
    }
    
    //methodsの閉じ
    }
//new Vueの閉じ
  });
  
//最初のfunctionの閉じ
})();
