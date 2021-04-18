import {
  NavigationState,
  SceneRendererProps,
  TabBar,
} from 'react-native-tab-view';
import {Animated, Platform, StyleSheet} from 'react-native';
import React from 'react';

import {Config} from '../../../../../config';
import {ICategoryItem} from '../../../types/types';
import {TabBarLabel} from './tab-bar-label';

const {Color} = Config;

type TAllProps = SceneRendererProps & {navigationState: NavigationState<any>};

interface TabBarComponentProps extends TAllProps {
  stylesTabBar: any;
}

export const TabBarComponent: React.FC<TabBarComponentProps> = React.memo(
  ({ stylesTabBar, ...props}) => {

    return (
      <Animated.View style={[styles.stylesTabBar, stylesTabBar]}>
        <TabBar
          {...props}
          scrollEnabled={true}
          renderLabel={TabBarLabel}
          style={styles.tabBarContainer}
          tabStyle={styles.tabStyle}
          indicatorStyle={styles.indicator}
        />
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  header: {
    top: Platform.OS === 'ios' ? 25 : 0,
    zIndex: 1,
    position: 'absolute',
    width: '100%',
  },
  stylesTabBar: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
  },
  tabBarContainer: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: Color.WHITE,
    padding: 0,
    margin: 0,
  },
  tabStyle: {
    width: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  indicator: {backgroundColor: 'transparent'},
});
