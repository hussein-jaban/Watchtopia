/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <GestureHandlerRootView>
      <Section title="My test section">
        <View>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            soluta sunt aliquid quae aut quaerat, illo facere mollitia, maiores
            itaque explicabo necessitatibus consequatur officia, asperiores
            dolore eveniet repudiandae beatae. Autem doloremque voluptatem
            veritatis optio alias dolores perspiciatis consequatur quam magni
            error sint rerum, repellat cum quae dolorum aut reiciendis tenetur
            facilis. Enim ut, in itaque deleniti mollitia vel aut rem provident
            repellendus ducimus molestiae ea temporibus exercitationem voluptate
            eveniet voluptas sunt quis! Dolor soluta et ullam nisi, molestias
            quasi adipisci illum tempora. Mollitia blanditiis ut eius
            cupiditate, sapiente minima magni adipisci doloribus magnam officiis
            delectus dicta incidunt consequuntur voluptas assumenda?
          </Text>
        </View>
      </Section>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
