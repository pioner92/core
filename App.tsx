import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Color} from './src/assets/styles';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
// import {persistor, store} from './src/system/store/configure-store';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/root-navigator';
import {permissionGeolocationRequest} from './src/system/helpers/permissions/permission-geolocation-request';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {PortalHost, PortalProvider} from '@gorhom/portal';
import {BottomSheetMenuContext} from './src/components/bottom-sheet-menu/bottom-sheet-menu-context';
import {ModalProvider} from './src/components/modal/modal-provider';
import {configureStore} from './src/system/store/configure-store';

if (__DEV__) {
  //@ts-ignore
  import('./Reactorton').then(() => console.log('Reactotron Configured'));
}

const App: React.FC = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);

  const {store, persistor} = configureStore(() => setIsLoading(false));

  useEffect(() => {
    permissionGeolocationRequest();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
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
            {/*<SafeAreaView style={[styles.container]} edges={[]}>*/}
            <BottomSheetModalProvider>
              <KeyboardAvoidingView
                onTouchStart={Keyboard.dismiss}
                style={{flex: 1}}
                //@ts-ignore
                behavior={Platform.OS == 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
                <NavigationContainer>
                  <BottomSheetMenuContext>
                    <ModalProvider>
                      <StatusBar barStyle={'dark-content'} />
                      <RootNavigator>{children}</RootNavigator>
                    </ModalProvider>
                    {/*<BottomSheetModalComponent />*/}
                  </BottomSheetMenuContext>
                  <PortalHost name="modal" />
                </NavigationContainer>
              </KeyboardAvoidingView>
            </BottomSheetModalProvider>
            {/*</SafeAreaView>*/}
          </PortalProvider>
        </Provider>
      </PersistGate>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.WHITE,
  },
});

export default App;
