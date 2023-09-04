import { View } from '@aws-amplify/ui-react';
import Hero1 from './Detail/Hero1'
import Features from './Detail/Features'
import Hero2 from './Detail/Hero2'

export function Home() {
  return (
    <View>
      <Hero1 />
      <Features />
      <Hero2 />
    </View>
  );
}