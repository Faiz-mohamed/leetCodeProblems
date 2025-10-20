public class Solution {
    public bool CanPlaceFlowers(int[] flowerbed, int n) {
        int i = 0;
        int length = flowerbed.Length;
        while(i < length){
            int prev = (i == 0) ? 0 : flowerbed[i - 1];
            int next = (i == length-1) ? 0 : flowerbed[i + 1];
            if (prev == 0 && flowerbed[i] == 0 && next == 0){
                flowerbed[i] = i;
                n--;
                if (n <= 0) return true;
                i += 2;
            } else{
                i++;
            }
        }
        return n <= 0;
    }
}