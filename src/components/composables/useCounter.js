import { reactive } from "vue"

export default function Counter() {
  const count = reactive({
    num: 0
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