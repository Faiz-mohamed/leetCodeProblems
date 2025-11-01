public class Solution {
    public int MaxVowels(string s, int k) {
        bool IsVowel(char el){
            if(el == 'a') return true;
            if(el == 'e') return true;
            if(el == 'i') return true;
            if(el == 'o') return true;
            if(el == 'u') return true;
            return false;
        }

        int count = 0;

        for(int i = 0; i < k; i++) if(IsVowel(s[i])) count++;

        int temp = count;

        for(int j = k; j < s.Length; j++)
        {
            if(IsVowel(s[j])) temp++;
            if(IsVowel(s[j - k])) temp--;
            if(temp > count) count = temp;
        }
        return count;
    }
}