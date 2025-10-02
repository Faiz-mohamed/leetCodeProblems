public class Solution {
    public int AreaOfMaxDiagonal(int[][] dimensions) {
        int max_area = 0;
        int max_diago = 0;
        for(int i = 0; i < dimensions.Length; i++){
            int t = dimensions[i][0]*dimensions[i][0]+dimensions[i][1]*dimensions[i][1];
            if(t > max_diago || (t == max_diago && max_area < dimensions[i][0]*dimensions[i][1])){
                max_diago = t;
                max_area = dimensions[i][0]*dimensions[i][1];
            }
        }
        return max_area;
    }
}