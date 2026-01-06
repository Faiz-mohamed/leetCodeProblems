public class Solution {
    public int CharacterReplacement(string s, int k) {
        Dictionary<char, int> charCount = new Dictionary<char, int>();
        int left = 0;
        int MaxLength = 0;
        int MaxFreq = 0;

        for (int right = 0; right < s.Length; right++){
            if (!charCount.ContainsKey(s[right]))
            {
                charCount[s[right]] = 1;
            }
            else
            {
                charCount[s[right]]++;
            }

            MaxFreq = Math.Max(MaxFreq, charCount[s[right]]);

            int windowLength = right - left + 1;

            int replacementsNeeded = windowLength - MaxFreq;

            while (replacementsNeeded > k){
                charCount[s[left]]--;
                left++;

                windowLength = right - left + 1;
                replacementsNeeded = windowLength - MaxFreq;
            }
            MaxLength = Math.Max(MaxLength, windowLength);
        }
        return MaxLength;
    }
}