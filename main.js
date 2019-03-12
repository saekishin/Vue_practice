//いったんコードを模写して、動画をみながらコメントを入れていく
(function() {
  'use strict';


  var vm = new Vue({

   el: '#app',

    data: {
//newItemが定義されてなかった。空欄にしとく
      newItem: '',
//todoを配列にする⇒isDone：完了タスク
      //todos: [
        //{
          //title: 'task 1',
          //isDone: false
        //},
        
        //{
          //title: 'task 2',
          //isDone: false
        //},
        
        //{
          //title: 'task 3',
          //isDone: true
        //}
      //]
      
      //最初は空の配列を設置する
      todos: []
    },
    
    /*
    watchでデータ保存機能追加
    setItem(名称、値)
    stringfy(値)
    */
    watch: {
    /*
    todos（データ）を監視してくれる
    但し、todosの配列個数に変更があった時だけで、内容の変更には対応してない
    */
      /*todos: function() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
      alert('保存しました')
      }*/
      
      todos: {
    //handler↓というメソッドを使用する
        handler: function() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
      
    //邪魔なので消しとく↓
    //alert('保存しました')
      },
      
    //deepオプションとはなんだ？
      deep: true
    }
  },
    
    //マウントされたタイミングで処理
    mounted: function() {
    //todosが空の場合の処理も書く
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
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
        this.todos.splice(index, 1); 
      }
      
   //↓deleteItemの閉じ
    },
      
    purge: function() {
      if (!confirm('完了済を削除?')) {
        return;
      }
      
  //未完了タスクのみに変更する
      /*this.todos = this.todos.filter(function(todo) {
        return !todo.isDone;
      });*/
      
  //長いので定数にしとくremaining：
      this.todos = this.remaining;
      
    }
  },
  
  computed: {
    remaining: function() {
    //filterってどんな機能？
      /*var items = this.todos.filter(function(todo) {
    //件数を返す
        return !todo.isDone;
      });
    //なにこれ↓
      return items.length;*/
      
      return this.todos.filter(function(todo) {
        return !todo.isDone;
      });
    }
  }
    
  
//new Vueの閉じ
  });
  
//最初のfunctionの閉じ
})();
