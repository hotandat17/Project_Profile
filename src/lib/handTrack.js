import { GestureDescription, Finger, FingerDirection, FingerCurl } from 'fingerpose';

// Tạo một đối tượng GestureDescription cho cử chỉ "sos_vn" (nắm tay)
export const handSos = new GestureDescription('sos_vn');

// Thêm mô tả cho từng ngón tay, tất cả đều được cong hoàn toàn (FullCurl)
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    handSos.addCurl(finger, FingerCurl.FullCurl, 1.0);
    handSos.addCurl(finger, FingerCurl.HalfCurl, 0.9);

}
