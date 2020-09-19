import { computed, reactive } from "vue"

export default function Counter() {
  const text= computed(()=> `${count.num}回`)
  const count = reactive({
    num: 0,
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