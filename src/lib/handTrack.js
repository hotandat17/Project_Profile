import { GestureDescription, Finger, FingerDirection, FingerCurl } from 'fingerpose';

//  bóp bàn tay  
export const handSos = new GestureDescription('Tín hiệu Sos bạn đã được nhận . Chúng tôi sẽ báo tới nơi gần nhất !!!');
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    handSos.addCurl(finger, FingerCurl.FullCurl, 1.0);
    handSos.addCurl(finger, FingerCurl.FullCurl, 0.9);

}




// đưa ngón tay xuống 

export const thumbsDownGesture = new GestureDescription('Thật tệ hãy nhanh nào !!! SOS');

thumbsDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);
thumbsDownGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

thumbsDownGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.9);
thumbsDownGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.9);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    thumbsDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    thumbsDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}
