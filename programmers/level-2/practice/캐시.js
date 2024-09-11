// cities loop
// cahce에 있으면 제거 후에 head에 추가 -> time += 1
// cache에 없으면 head에 추가 -> time += 5
// cache 꽉 차있으면 pop후에 head에 추가
function solution(cacheSize, cities) {
  let cache = [];
  let time = 0;

  if (cacheSize === 0) return cities.length * 5;

  cities
    .map((city) => city.toLowerCase())
    .forEach((city) => {
      if (cache.includes(city)) {
        cache.splice(cache.indexOf(city), 1);
        cache.unshift(city);
        time += 1;
      } else {
        if (cache.length === cacheSize) cache.pop();
        cache.unshift(city);
        time += 5;
      }
    });

  return time;
}

solution(3, ["seoul", "seoul", "seoul", "tokyo", "seoul", "tokyo"]);
