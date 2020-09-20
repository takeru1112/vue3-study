# Class Base な Component

## JS での例

```js
export default {
  name: "Count",
  props: {
    defaultValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    const state = {
      num: this.defaultValue
    };
    return {
      state
    };
  },
  methods: {
    increment() {
      this.state.num += 1;
    },
    decrement() {
      this.state.num -= 1;
    }
  }
};
```

## vue-class-component

```ts
@Component({
  props: {
    defaultValue: {
      type: Number,
      default: 0
    }
  }
})
export default class Count extends Vue {
  state!: { num: number } = { num: 0 };
  public increment() {
    this.state.num += 1;
  }
  public decrement() {
    this.state.num -= 1;
  }
}
```

### vue-property-decorator

```ts
@Component
export default class Count extends Vue {
  @Props({ type: Number, default: 0 }) defaultValue!: number;
  state!: { num: number } = { num: 0 };
  public increment() {
    this.state.num += 1;
  }
  public decrement() {
    this.state.num -= 1;
  }
}
```

## Vue3 では

[[Abandoned] Class API proposal](https://github.com/vuejs/rfcs/pull/17)

Class で提供はされなくなったため以下のような書き方ができなくなった

```ts
export default class Foo extends Vue {
```

https://github.com/vuejs/vue-class-component/issues/447

decorator を使う形ではなくなりそう
