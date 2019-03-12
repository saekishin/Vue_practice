とりあえず、基本ファイルを飛ばしておくことにする
index.html
main.js
main.css

gitへの反映メモ
gitで新たなリポジトリ作成⇒
https://github.com/saekishin/Vue_app.git

git init⇒管理したいディレクトリに移動してから
git add README.md⇒これは必要無いかも
git commit -m "first commit"
git remote add origin https://github.com/saekishin/Vue_app.git

//↓間違ってmasterを入れてしまった
git remote add origin master https://github.com/saekishin/Vue_app.git

git push -u origin master

--------------------------------------------------------------------------
【gitからクローン、編集、プッシュの流れ】
クローンしてプッシュするまでの流れ
git clone URL
cd フォルダ
git init 
git branch ブランチ名
git checkout ブランチ名
編集
git add .
git commit -m ""
git remote add URL（不要かもしれない）⇒不要だった
git push origin ブランチ名
ここでいったんフォルダ削除しても良い
