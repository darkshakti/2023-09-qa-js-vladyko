/**
 * Вычисляет общий суммарный балл из предоставленного объекта.
 *
 * @param {Object} obj - Объект, где ключ это ник, а значение это успеваемость в баллах.
 * @returns {number} Общая сумма баллов.
 */
function getScore(obj) {
  let sum = 0;

  for (let key in obj) {
    sum += obj[key];
  };

  return sum;
};

const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
};

console.log(getScore(scores)); // 16

