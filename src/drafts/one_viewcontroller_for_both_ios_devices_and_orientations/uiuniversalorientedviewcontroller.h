

#import <UIKit/UIKit.h>


@interface UIUniversalOrientedViewController : UIViewController {
	NSString *baseNibName;
}

@property (nonatomic, retain) NSString *baseNibName;

- (UIUniversalOrientedViewController *) initWithBundle:(NSBundle *)bundle;
- (NSString *) findNibName;
- (void) updateOrientation;

@end
