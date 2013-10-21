var source = new Array();

/**
 * source:
 * 0: blank?
 * 1: width
 * 2: height
 * 3: grid (if not blank)
 */

//heart!
source[0] = new Array();
source[0][0] = false;
source[0][1] = 6;
source[0][2] = 5;
source[0][3] = [-1, 10, 14, 15, 8, -1, 11, 16, 13, 12, -1, 7, 9, 16, -1, -1, 16, 5, -1, 2, 16, 16, 3, -1, -1, -1, 2, 3, -1, -1];

//I love U
source[1] = new Array();
source[1][0] = false;
source[1][1] = 8;
source[1][2] = 6;
source[1][3] = [-1, -1, -1, -1, -1, -1, -1, -1, 1, 11, 2, 3, 7, 1, -1, 1, 1, 5, -1, -1, 9, 1, -1, 1, 1, 2, -1, -1, 3, 1, -1, 1, 1, -1, 2, 3, -1, 13, 0, 12, -1, -1, -1, -1, -1, -1, -1, -1];

//CET
source[2] = new Array();
source[2][0] = false;
source[2][1] = 4;
source[2][2] = 6;
source[2][3] = [-1, 3, 2, -1, -1, 5, 9, -1, 11, -1, -1, 7, 3, -1, -1, 2, -1, 1, 1, -1, -1, 1, 1, -1];

//umbrella
source[3] = new Array();
source[3][0] = false;
source[3][1] = 5;
source[3][2] = 6;
source[3][3] = [-1, 10, 0, 8, -1, 3, -1, -1, -1, 2, 0, 0, 0, 0, 0, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, -1, 13, 12, -1, -1];

//face
source[4] = new Array();
source[4][0] = false;
source[4][1] = 6;
source[4][2] = 5;
source[4][3] = [15, 0, 0, 0, 0, 14, 1, 15, 14, 15, 14, 1, 1, -1, -1, -1, -1, 1, 1, -1, 13, 12, -1, 1, 13, 0, 0, 0, 0, 12];

//blank
source[5] = new Array();
source[5][0] = true;
source[5][1] = 6;
source[5][2] = 5;

//huge blank
source[6] = new Array();
source[6][0] = true;
source[6][1] = 8;
source[6][2] = 6;
