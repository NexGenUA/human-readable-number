module.exports = function toReadable (number) {
  
  const singleNumber = [null, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const decimalNumber = [null, null, "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (number === 0) return 'zero';

  if (number < 20) return singleNumber[number];

  const num = [...number.toString()];

  if (number < 100) return `${decimalNumber[num[0]]} ${singleNumber[num[1]] || ''}`.trim();

  const isLessTwenty = singleNumber[parseInt(num[1] + num[2])]
      
  return `${singleNumber[num[0]]} hundred ${decimalNumber[num[1]]
          || isLessTwenty
          || ''} ${!isLessTwenty ? singleNumber[num[2]] || '' : ''}`.trim();
}
