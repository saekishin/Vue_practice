//いったんコードを模写して、動画をみながらコメントを入れていく
(function() {
  'use strict';


  var vm = new Vue({

   el: '#app',

    data: {
//newItemが定義されてなかった。空欄にしとく
      newItem: '',
      todos: [
        {
        'task 1'
        },
        
        {
        'task 2'
        },
        
        {
        'task 3'
        }
      ]
    },
    
    methods: {
      //eはなんだ？　preventDfaultが無くてもできるのか？⇒htmlのディレクティブにpreventを付けてあげることで可能　
      //addItem: function(e) {
      //e.preventDefault();
      //this.todos.push(this.newItem);
      
      
    addItem: function() {
      
//this：このドキュメント push：追加する this.newItem：これはhtmlで指定した変数？
      this.todos.push(this.newItem);
      
//テキストボックスの中身を空にしてあげる
      this.newItem = '';
    },
   //↑メソッドを区切るためにカンマを入れている
   
    
   //↓配列のindexを指定するアクション
    deleteItem: function(index) {
      
   //confirmで確認ポップアップを出現させる（コメントは自由に設定できる）※ポップアップの見た目もいじる方法がある。
      if (confirm('are you sure?')) {
   //spliceで削除できる　1ってなんだっけ？
        this.todos.splice(index.1); 
      }
      
   //↓deleteItemの閉じ
    }
      
    //methodsの閉じ
  }
//new Vueの閉じ
  });
  
//最初のfunctionの閉じ
})();
