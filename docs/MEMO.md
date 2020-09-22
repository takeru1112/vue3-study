# Vue3

## 主な新機能

https://v3.vuejs.org/guide/migration/introduction.html

- CompositionAPI
  - 機能の再利用性が高くなるように
  - Reack Hooks のような機能
  - https://v3.vuejs.org/guide/composition-api-introduction.html
- Teleport
  - モーダル実装時などに body の最後に追加、などができるように
  - https://v3.vuejs.org/guide/teleport.html
- Fragments
  - template タグ直下に必ず要素は 1 つでなくてはいけない制限がなくなった
  - https://v3.vuejs.org/guide/migration/fragments.html
- Emit Options
  - emit されるイベント名を明示して指定することが推奨されるように
  - native イベントと名前が被っていた場合は native 側を無視するようになる
  - https://v3.vuejs.org/guide/component-custom-events.html#event-names

## CompositionAPI

- SFC には状態をなるべく持たない
- 切り分けられた機能、振る舞いを利用していく
  - vue ファイル自体は Stateless にしていく

## React Hooks

https://ja.reactjs.org/docs/hooks-intro.html

mixin や extend をすることなく振る舞いを再利用できるようにする

### なぜ mixin を使わないのか

https://ja.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html

- 暗黙的な依存関係
  - mixin 内でライフサイクルに依存している可能性
  - mixin 内でどういった操作がされるか追いづらい
- 名前の衝突
  - メソッド名が被ってしまうと動作しなくなってしまう
  - サードパーティ製のミックスインが作りづらい
    - 利用者側が使っているメソッドを追加してしまうと動かなくなる
- 複雑性の増加
  - 密結合になるため変更に弱い状態に
  - 回避していこうとすると複雑性が増していく
