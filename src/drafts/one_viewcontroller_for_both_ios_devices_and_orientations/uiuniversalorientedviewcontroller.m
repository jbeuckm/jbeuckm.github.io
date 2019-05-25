
#import "UIUniversalOrientedViewController.h"


@implementation UIUniversalOrientedViewController


@synthesize baseNibName;


- (UIUniversalOrientedViewController *) initWithBundle:(NSBundle *)bundle
{
	NSString *fullNibName = [self findNibName];
	return [self initWithNibName:fullNibName bundle:bundle];
}

 
- (void) viewWillAppear:(BOOL)animated { 
	[self updateOrientation];
	[super viewWillAppear:animated];
}


- (void) updateOrientation 
{
	NSString *fullNibName = [self findNibName];
	[[NSBundle mainBundle] loadNibNamed:fullNibName owner:self options:nil];
}


- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
	switch (interfaceOrientation) {
		case UIInterfaceOrientationPortrait:
		case UIInterfaceOrientationLandscapeLeft:
		case UIInterfaceOrientationLandscapeRight:
		case UIInterfaceOrientationPortraitUpsideDown:
			return YES;
	}
	return NO;
}



- (NSString *) findNibName {

	NSString *deviceNibName;
	
	switch (UI_USER_INTERFACE_IDIOM()) {
		case UIUserInterfaceIdiomPhone:
			deviceNibName = [NSString stringWithFormat:@"%@%@", baseNibName, @"_iPhone"];
			break;
		case UIUserInterfaceIdiomPad:
			deviceNibName = [NSString stringWithFormat:@"%@%@", baseNibName, @"_iPad"];
			break;
	}
	
	NSString *fullNibName;
	
	if (UIDeviceOrientationIsPortrait([UIApplication sharedApplication].statusBarOrientation)) {
		fullNibName = [NSString stringWithFormat:@"%@%@", deviceNibName, @"_Portrait"];
	}
	else {
		fullNibName = [NSString stringWithFormat:@"%@%@", deviceNibName, @"_Landscape"];
	}

	return fullNibName;
}


- (void) didRotateFromInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
	[self updateOrientation];
}


- (void)dealloc {
	[baseNibName release];
    [super dealloc];
}


@end
