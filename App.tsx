import React, {useEffect, useMemo, useState} from 'react';
import {Keyboard, KeyboardAvoidingView, Platform, StatusBar, Text, View} from 'react-native';
import {Color} from './src/assets/styles';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/root-navigator';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {PortalHost, PortalProvider} from '@gorhom/portal';
import {ModalProvider} from './src/components/modal/modal-provider';
import {configureStore} from './src/system/store/configure-store';
import {Modal} from './src/components/modal/modal';
import {BottomSheetMenuProvider} from './src/components/bottom-sheet-menu/bottom-sheet-modal-provider';
import {BottomSheetModalComponent} from './src/components/bottom-sheet-menu/bottom-sheet-modal/bottom-sheet-modal-component';

if (__DEV__) {
  //@ts-ignore
  import('./Reactorton').then(() => console.log('Reactotron Configured'));
}

const App: React.FC = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);

  const {store, persistor} = useMemo(
    () => configureStore(() => setIsLoading(false)),
    [],
  );

  useEffect(() => {
    // permissionGeolocationRequest();
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Loading......</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider
      style={{backgroundColor: Color.WHITE, height: '100%', width: '100%'}}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <PortalProvider>
            <BottomSheetModalProvider>
              <BottomSheetMenuProvider>
                <ModalProvider>
                  <KeyboardAvoidingView
                    onTouchStart={Keyboard.dismiss}
                    style={{flex: 1}}
                    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
                    <NavigationContainer>
                      <StatusBar barStyle={'dark-content'} />
                      <RootNavigator>{children}</RootNavigator>
                      <Modal />
                      <PortalHost name="modal" />
                      <BottomSheetModalComponent />
                    </NavigationContainer>
                  </KeyboardAvoidingView>
                </ModalProvider>
              </BottomSheetMenuProvider>
            </BottomSheetModalProvider>
          </PortalProvider>
        </Provider>
      </PersistGate>
    </SafeAreaProvider>
  );
};

export default App;
