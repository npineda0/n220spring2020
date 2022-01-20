/* Naila Lugardo-Pineda
    01/19/2022
    N220                */

function setup () {
    createCanvas(800, 600);
    var tanOrange = "#eb8628";
    var cream = "#f2d2b3";
    var ellipseW = 30;
    var ellipseH = 8;

/* circle background */
    noStroke();
    fill(tanOrange);
    circle(310, 300, 300);

/* stem */
    stroke(2);
    noFill();
    /* longest line */
    line(220, 450, 380, 200);
    /* leaf stem, starting from bottom leaves(for all) */
    line(250, 370, 271, 370);
    line(299, 330, 319, 330);
    line(320, 260, 340, 260);
    line(375, 210, 395, 210);

    /* left line */
    line(310, 310, 280, 200);
    /* leaf stem */
    line(301, 280, 281, 280);
    line(292, 240, 312, 240);
    line(282, 210, 262, 210);

    /* top right line */
    line(348, 250, 420, 210);
    /* leaf stem */
    line(371, 240, 391, 240);
    line(420, 210, 440, 210);

    /* bottom right line */
    line(271, 370, 400, 330);
    /* leaf stem */
    line(300, 363, 320, 363);
    line(343, 350, 363, 350);
    line(373, 330, 393, 330);

/* leaves */ 
    /* leaves on longest line, starting from the bottom(for all) */
    ellipse(255, 370, ellipseW, ellipseH);
    ellipse(313, 330, ellipseW, ellipseH);
    ellipse(326, 260, ellipseW, ellipseH);
    ellipse(389, 210, ellipseW, ellipseH);

    /* leaves on left line */
    ellipse(287, 280, ellipseW, ellipseH);
    ellipse(306, 240, ellipseW, ellipseH);
    ellipse(268, 210, ellipseW, ellipseH);

    /* leaves on top right line */
    ellipse(385, 240, ellipseW, ellipseH);
    ellipse(435, 210, ellipseW, ellipseH);

    /* leaves on bottom right line */
    ellipse(315, 363, ellipseW, ellipseH);
    ellipse(358, 350, ellipseW, ellipseH);
    ellipse(378, 330, ellipseW, ellipseH);

/* tape */
    noStroke();
    fill(cream);
    rect(228, 390, 50, 20);
}