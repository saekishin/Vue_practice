//いったんコードを模写して、動画をみながらコメントを入れていく
(function() {
  'use strict';


  var vm = new Vue({

   el: '#app',

    data: {
//newItemが定義されてなかった。空欄にしとく
      newItem: '',
//todoを配列にする⇒isDone：完了タスク
      todos: [
        {
          title: 'task 1',
          isDone: false
        },
        
        {
          title: 'task 2',
          isDone: false
        },
        
        {
          title: 'task 3',
          isDone: true
        }
      ]
    },
    
    methods: {
      //eはなんだ？　preventDfaultが無くてもできるのか？⇒htmlのディレクティブにpreventを付けてあげることで可能　
      //addItem: function(e) {
      //e.preventDefault();
      //this.todos.push(this.newItem);
      
      
    addItem: function() {
//新規追加の際、newItem：新規タスク、未完了なので:falseとする
      var item = {
        title: this.newItem,
        isDone: false
      };
      
//this：このドキュメント push：追加する this.newItem：これはhtmlで指定した変数？
      //this.todos.push(this.newItem);
//newItem（TODOのみ）⇒item（TODO,完了フラグの配列）に変更
      this.todos.push(item);
      
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
