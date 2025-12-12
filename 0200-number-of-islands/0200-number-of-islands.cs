public class Solution {
    public int NumIslands(char[][] grid) {
        int rows = grid.Length;
        int cols = grid[0].Length;

        int count = 0;

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) 
            {
                if (grid[r][c] == '1') {
                    DFS(r, c);
                    count++;
                }
            }
        }

        return count;

        void DFS(int r, int c) {

            if (r < 0 || r >= rows || c < 0 || c >= cols)
                return;

            if (grid[r][c] == '0')
                return;

            grid[r][c] = '0';

            DFS(r + 1, c);
            DFS(r - 1, c);
            DFS(r, c + 1);
            DFS(r, c - 1);
        }
    }
}
