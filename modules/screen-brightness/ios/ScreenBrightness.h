#ifdef __cplusplus
#import "react-native-screen-brightness.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNScreenBrightnessSpec.h"

@interface ScreenBrightness : NSObject <NativeScreenBrightnessSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ScreenBrightness : NSObject <RCTBridgeModule>
#endif

@end
