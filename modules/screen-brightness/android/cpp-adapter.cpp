#include <jni.h>
#include "react-native-screen-brightness.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_screenbrightness_ScreenBrightnessModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return screenbrightness::multiply(a, b);
}
