// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// const s = "abcabcbbacdab";
const s = "ababcb";
//         012345

var lengthOfLongestSubstring = function (s) {
  const chars = {};
  let streak = 0;
  let record = 0;
  for (let i = 0; i < s.length; i += 1) {
    const letter = s[i];
    streak += 1;
    // if we have a record
    if (chars[letter] !== undefined && i - chars[letter] < streak) {
      console.log(
        ">>",
        streak,
        "-",
        chars[letter] + 1,
        "=",
        (streak -= chars[letter] + 1)
      );
      streak -= chars[letter] + 1;
    }

    if (streak > record) record = streak;
    chars[letter] = i;
    console.log(letter, chars, streak, ",", record);
  }
  return record;
};

console.log(lengthOfLongestSubstring(s));
