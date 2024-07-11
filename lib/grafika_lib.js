function gbr_titik(imageDataTemp, x, y, r, g, b) {
  var index;
  index = 4 * (x + (y * myCanvas.width));
  imageDataTemp.data[index] = r;
  imageDataTemp.data[index + 1] = g;
  imageDataTemp.data[index + 2] = b;
  imageDataTemp.data[index + 3] = 255;
}

function dda_line(imageData, x1, y1, x2, y2, r, g, b) {
  var dx = x2-x1; //bisa positif bisa negatif tergantung posisi x2 sebelum atau sesudah x1
  var dy = y2-y1; //bisa positif atau negatif
  
  var x = x1; //x_awal
  var y = y1; //y_awal

  if (Math.abs(dx) > Math.abs(dy)) {
    //jalan di x
    if (x2 > x1) {
      //ke kanan
      for (x; x<x2; x++) {
        y = y + dy/Math.abs(dx); // 1/m
        gbr_titik(imageData, x, y, r, g, b);
      }
    } else { // x2 < x1
      //ke kiri
      for (x; x>x2; x--) {
        y = y + dy/Math.abs(dx); // 1/m
        gbr_titik(imageData, x, y, r, g, b);
      }
    }

  } else {
    //jalan di y
    if (y2 > y1) {
      //ke kanan
      for (y; y<y2; y++) {
        x = x + dx/Math.abs(dy); // m
        gbr_titik(imageData, x, y, r, g, b);
      }
    } else { // x2 < x1
      //ke kiri
      for (y; y>y2; y--) {
        x = x + dx/Math.abs(dy); // m
        gbr_titik(imageData, x, y, r, g, b);
      }
    }
  }
}