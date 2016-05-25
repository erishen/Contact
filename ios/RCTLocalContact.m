//
//  RCTLocalContact.m
//  Contact
//
//  Created by erishen on 16/5/25.
//  Copyright © 2016年 Facebook. All rights reserved.
//

@import Contacts;
#import <UIKit/UIKit.h>
#import "RCTLocalContact.h"

@implementation RCTLocalContact

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getAll:(RCTResponseSenderBlock) callback){
  
  CNAuthorizationStatus status = [CNContactStore authorizationStatusForEntityType:CNEntityTypeContacts];
  
  NSLog(@"getAll_erishen");
  if (status == CNAuthorizationStatusDenied || status == CNAuthorizationStatusRestricted) {
    
    /*
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:nil message:@"This app previously was refused permissions to contacts; Please go to settings and grant permission to this app so it can use contacts" preferredStyle:UIAlertControllerStyleAlert];
    [alert addAction:[UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:nil]];
     */
    
    callback(@[@1]);
    return;
  }
  
  CNContactStore *store = [[CNContactStore alloc] init];
  [store requestAccessForEntityType:CNEntityTypeContacts completionHandler:^(BOOL granted, NSError * _Nullable error) {
    
    // make sure the user granted us access
    
    if (!granted) {
      dispatch_async(dispatch_get_main_queue(), ^{
        // user didn't grant access;
        // so, again, tell user here why app needs permissions in order  to do it's job;
        // this is dispatched to the main queue because this request could be running on background thread
      });
      callback(@[@1]);
      return;
    }
    
    // build array of contacts
    
    NSMutableArray *contacts = [NSMutableArray array];
    
    NSError *fetchError;
    CNContactFetchRequest *request = [[CNContactFetchRequest alloc] initWithKeysToFetch:@[CNContactIdentifierKey, [CNContactFormatter descriptorForRequiredKeysForStyle:CNContactFormatterStyleFullName]]];
    
    BOOL success = [store enumerateContactsWithFetchRequest:request error:&fetchError usingBlock:^(CNContact *contact, BOOL *stop) {
      [contacts addObject:contact];
    }];
    if (!success) {
      NSLog(@"error = %@", fetchError);
    }
    
    // you can now do something with the list of contacts, for example, to show the names
    
    CNContactFormatter *formatter = [[CNContactFormatter alloc] init];
    
    for (CNContact *contact in contacts) {
      NSString *string = [formatter stringFromContact:contact];
      NSLog(@"contact = %@", string);
    }
    
    callback(@[@0, @"success"]);
  }];
}

@end