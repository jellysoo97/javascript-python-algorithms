// receipt loop -> 합성 가능한 재료 합성
// 재귀로 추가 합성 가능한 아이템 합성
function solution(receipt, inventory) {
  function combine() {
    receipt.forEach(([item1, item2, result], curIndex) => {
      if (inventory.includes(item1) && inventory.includes(item2)) {
        inventory = inventory.filter(
          (elem) => elem !== item1 && elem !== item2
        );
        inventory.push(result);
        receipt = receipt.filter((_, index) => index !== curIndex);
        combine();
      }
    });
  }

  receipt.forEach(() => combine());

  return inventory.sort();
}
