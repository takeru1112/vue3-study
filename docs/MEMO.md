# Vue3

## 主な新機能

- CompositionAPI
  - 機能の再利用性が高くなるように
  - Reack Hooksのような機能
  - https://v3.vuejs.org/guide/composition-api-introduction.html
- Teleport
  - モーダル実装時などにbodyの最後に追加、などができるように
  - https://v3.vuejs.org/guide/teleport.html
- Fragments
  - templateタグ直下に必ず要素は1つでなくてはいけない制限がなくなった
  - https://v3.vuejs.org/guide/migration/fragments.html
- Emit Options
  - emitされるイベント名を明示して指定することが推奨されるように
  - nativeイベントと名前が被っていた場合はnative側を無視するようになる
  - https://v3.vuejs.org/guide/component-custom-events.html#event-names

## CompositionAPI

- SFCには状態をなるべく持たない
- 切り分けられた機能、振る舞いを利用していく
  - vueファイル自体はStatelessにしていく

## React Hooks
https://ja.reactjs.org/docs/hooks-intro.html

mixinやextendをすることなく振る舞いを再利用できるようにする

### なぜmixinを使わないのか
https://ja.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html

- 暗黙的な依存関係
  - mixin内でライフサイクルに依存している可能性
  - mixin内でどういった操作がされるか追いづらい
- 名前の衝突
  - メソッド名が被ってしまうと動作しなくなってしまう
  - サードパーティ製のミックスインが作りづらい
    - 利用者側が使っているメソッドを追加してしまうと動かなくなる
- 複雑性の増加
  - 密結合になるため変更に弱い状態に
  - 回避していこうとすると複雑性が増していく

