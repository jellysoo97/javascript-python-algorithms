// 0 ~ 마지막 공격 시간동안 매초 체력, 연속 성공 횟수 계산
// time === 공격시간 -> 체력: - 피해량, 연속 성공 횟수: 초기화
// time !== 공격시간 -> 체력: + 초당 회복량, 연속 성공 횟수: + 1
// 연속 성공 횟수 === 시전 시간 -> 체력: + 추가 회복량, 연속 성공 횟수: 초기화
// 최대 체력 주의
function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  const maxHealth = health;
  let successCount = 0;
  attacks = attacks.sort((a, b) => b[0] - a[0]);
  const [lastAttackTime, _] = attacks[0];

  for (let time = 1; time <= lastAttackTime; time++) {
    if (time === attacks[attacks.length - 1][0]) {
      const [_, attack] = attacks.pop();
      health -= attack;
      successCount = 0;
      if (health <= 0) return -1;
    } else {
      health += x;
      successCount++;
      if (successCount === t) {
        health += y;
        successCount = 0;
      }
      if (health > maxHealth) health = maxHealth;
    }
  }

  return health;
}
