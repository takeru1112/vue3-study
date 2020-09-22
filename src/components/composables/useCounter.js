import { computed, reactive } from "vue"

export default function Counter(defaultCount = 0) {
  const text = computed(() => `${count.num}回`)
  const count = reactive({
    num: defaultCount,
    text
  })
  const increment = () => {
    count.num += 1
  }
  const decrement = () => {
    count.num -= 1
  }

  return {
    count,
    increment,
    decrement
  }
}
