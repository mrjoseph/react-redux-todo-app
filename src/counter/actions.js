export function decrement(num){
  return {
    type : 'DECREMENT',
    payload : {
      num : num
    }
  }
}
export function increment(num){

  return {
    type : 'INCREMENT',
    payload : {
      num : num
    }
  }
}